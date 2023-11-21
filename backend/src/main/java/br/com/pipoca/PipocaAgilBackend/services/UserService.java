package br.com.pipoca.PipocaAgilBackend.services;


import br.com.pipoca.PipocaAgilBackend.dtos.UserLoginDTO;
import br.com.pipoca.PipocaAgilBackend.dtos.UserRegisterDTO;
import br.com.pipoca.PipocaAgilBackend.entity.User;
import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import br.com.pipoca.PipocaAgilBackend.exceptions.BadRequestException;
import br.com.pipoca.PipocaAgilBackend.exceptions.ConflictException;
import br.com.pipoca.PipocaAgilBackend.exceptions.UnauthorizedException;
import br.com.pipoca.PipocaAgilBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepository repository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public void  createUser(UserRegisterDTO userLoginDto) throws ConflictException, BadRequestException {
        if(repository.findByEmail(userLoginDto.email) != null ){
            throw new ConflictException("Email já cadastrado!");
        }

        String passwordEncrypted = this.passwordEncoder.encode(userLoginDto.password);
        User user = new User(userLoginDto.fullName, userLoginDto.email, passwordEncrypted, userLoginDto.dateBirth, UserTypeEnum.REGISTERED);

        repository.save(user);
    }

    public String authorizeUser(UserLoginDTO userLoginDTO) throws UnauthorizedException {

        Optional<User> optionalUser = Optional.ofNullable(repository.findByEmail(userLoginDTO.email));
        User user = optionalUser.orElseThrow(() -> new UnauthorizedException("Email ou Senha inválidos."));

        if (!passwordEncoder.matches(userLoginDTO.password, user.getPassword())) {
            throw new UnauthorizedException("Email ou Senha inválidos.");
        }

        // implementar jwt


        return "";
    }
}
