package br.com.pipoca.PipocaAgilBackend.controller;

import br.com.pipoca.PipocaAgilBackend.dtos.UserLoginDto;
import br.com.pipoca.PipocaAgilBackend.entity.User;
import br.com.pipoca.PipocaAgilBackend.exceptions.BadRequestException;
import br.com.pipoca.PipocaAgilBackend.exceptions.ConflictException;
import br.com.pipoca.PipocaAgilBackend.exceptions.InternalErrorException;
import br.com.pipoca.PipocaAgilBackend.repository.UserRepository;
import br.com.pipoca.PipocaAgilBackend.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private final UserService service;
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> creatUser(@RequestBody @Valid UserLoginDto userLoginDto) {

        try {
            service.createUser(userLoginDto);
            return ResponseEntity.ok().build();
        } catch (ConflictException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (BadRequestException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }


    }

}