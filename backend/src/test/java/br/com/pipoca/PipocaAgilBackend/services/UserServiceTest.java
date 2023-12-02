package br.com.pipoca.PipocaAgilBackend.services;

import br.com.pipoca.PipocaAgilBackend.dtos.UserLoginDTO;
import br.com.pipoca.PipocaAgilBackend.dtos.UserRegisterDTO;
import br.com.pipoca.PipocaAgilBackend.entity.User;
import br.com.pipoca.PipocaAgilBackend.entity.validation.EntityValidationException;
import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import br.com.pipoca.PipocaAgilBackend.exceptions.ConflictException;
import br.com.pipoca.PipocaAgilBackend.exceptions.UnauthorizedException;
import br.com.pipoca.PipocaAgilBackend.providers.jwt.JwtProvider;
import br.com.pipoca.PipocaAgilBackend.repository.RepositoryMethods;
import br.com.pipoca.PipocaAgilBackend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RepositoryMethods repositoryMethods;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtProvider jwtProvider;

    @InjectMocks
    private UserService userService;

    private final LocalDate mockDateOfBirth = LocalDate.parse("01/01/1990", DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        userService = new UserService(userRepository, repositoryMethods, passwordEncoder, jwtProvider);

    }

    @Test
    public void testCreateUser_Successful() throws ConflictException, EntityValidationException {
        // Arrange
        UserRegisterDTO userRegisterDTO = new UserRegisterDTO("John Doe", "john@example.com", "password123", this.mockDateOfBirth);

        when(userRepository.findByEmail(anyString())).thenReturn(null);
        when(passwordEncoder.encode(anyString())).thenReturn("encryptedPassword");
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        userService.createUser(userRegisterDTO);

        // Assert
        verify(userRepository, times(1)).findByEmail("john@example.com");
        verify(passwordEncoder, times(1)).encode("password123");
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testAuthorizeUser_Successful() throws UnauthorizedException, EntityValidationException {



        // Arrange
        UserLoginDTO userLoginDTO = new UserLoginDTO("john@example.com", "password123");
        User user = new User("John Doe", "john@example.com", "encryptedPassword", this.mockDateOfBirth, UserTypeEnum.REGISTERED);

        when(userRepository.findByEmail(anyString())).thenReturn(user);
        when(passwordEncoder.matches(anyString(), anyString())).thenReturn(true);
        when(jwtProvider.createToken(anyString())).thenReturn("generatedToken");
        doNothing().when(repositoryMethods).updateUser(any(User.class));

        // Act
        String token = userService.authorizeUser(userLoginDTO);

        // Assert
        assertEquals("generatedToken", token);
        verify(userRepository, times(1)).findByEmail("john@example.com");
        verify(passwordEncoder, times(1)).matches("password123", "encryptedPassword");
        verify(jwtProvider, times(1)).createToken("john@example.com");
        verify(repositoryMethods, times(1)).updateUser(user);
    }
}
