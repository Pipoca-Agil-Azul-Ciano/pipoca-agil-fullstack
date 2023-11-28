package br.com.pipoca.PipocaAgilBackend.repository;

import br.com.pipoca.PipocaAgilBackend.entity.User;
import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class RepositoryTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private RepositoryMethods repositoryMethods;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testUpdateUser() {
        User updatedUser = new User();
        updatedUser.setId(1);
        updatedUser.setFullName("Novo Nome");
        updatedUser.setEmail("novonome@example.com");
        updatedUser.setPassword("Senha123@Teste");
        updatedUser.setUserTypeEnum(UserTypeEnum.SUBSCRIBE);
        updatedUser.setDateBirth(LocalDate.ofEpochDay(2000-10-30));

        User existingUser = new User();
        existingUser.setId(1);
        existingUser.setFullName("Nome Antigo");
        existingUser.setEmail("nomeantigo@example.com");
        updatedUser.setPassword("Senha123@Teste2");
        updatedUser.setUserTypeEnum(UserTypeEnum.REGISTERED);
        updatedUser.setDateBirth(LocalDate.ofEpochDay(1989-10-30));

        when(userRepository.findById(updatedUser.getId())).thenReturn(existingUser);

        repositoryMethods.updateUser(updatedUser);

        verify(userRepository, times(1)).findById(updatedUser.getId());

        verify(userRepository, times(1)).save(existingUser);

        assertEquals(updatedUser.getFullName(), existingUser.getFullName());
        assertEquals(updatedUser.getEmail(), existingUser.getEmail());
        assertEquals(updatedUser.getPassword(), existingUser.getPassword());
        assertEquals(updatedUser.getUserTypeEnum(), existingUser.getUserTypeEnum());
        assertEquals(updatedUser.getDateBirth(), existingUser.getDateBirth());
    }
}
