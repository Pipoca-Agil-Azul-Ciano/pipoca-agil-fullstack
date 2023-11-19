package br.com.pipoca.PipocaAgilBackend.services;


import br.com.pipoca.PipocaAgilBackend.config.Constantes;
import br.com.pipoca.PipocaAgilBackend.dtos.UserLoginDto;
import br.com.pipoca.PipocaAgilBackend.entity.User;
import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import br.com.pipoca.PipocaAgilBackend.exceptions.BadRequestException;
import br.com.pipoca.PipocaAgilBackend.exceptions.ConflictException;
import br.com.pipoca.PipocaAgilBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public void  createUser(UserLoginDto userLoginDto) throws ConflictException, BadRequestException {
        if(repository.findByEmail(userLoginDto.email) != null ){
            throw new ConflictException("Email já cadastrado!");
        }
        if (!userLoginDto.password.matches(Constantes.REGEX_PASSWORD)) {
            throw new BadRequestException("Senha inválida");
        }

        String passwordEncrypted = this.passwordEncoder.encode(userLoginDto.password);
        User user = new User(userLoginDto.fullName, userLoginDto.email, passwordEncrypted, userLoginDto.dateBirth, UserTypeEnum.REGISTERED);

        repository.save(user);
    }
}
