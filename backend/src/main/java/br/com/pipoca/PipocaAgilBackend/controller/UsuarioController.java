package br.com.pipoca.PipocaAgilBackend.controller;

import br.com.pipoca.PipocaAgilBackend.model.Usuario;
import br.com.pipoca.PipocaAgilBackend.config.Constantes;
import br.com.pipoca.PipocaAgilBackend.repository.UsuarioRepository;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioController(UsuarioRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }



    public List<Usuario> getAllUsuarios() {
        return repository.findAll();
    }

    @GetMapping("/usuario/{id}")
    public Optional<Usuario> getUsuarioById(@PathVariable Long id) {
        return repository.findById(id);
    }

    @GetMapping
    public Optional<List<Usuario>> getAll() {
        List<Usuario> listaUsuarios = repository.findAll();
        return Optional.ofNullable(listaUsuarios);
    }

    public Usuario creatUsuario(@RequestBody @Valid Usuario usuario) {
        String encoder = this.passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(encoder);
        if (!usuario.getPassword().matches(Constantes.REGEX_PASSWORD)) {
            throw new RuntimeException("Senha inválida");
        }
        return repository.save(usuario);
    }

    @PutMapping
    public Usuario editUsuario(@RequestBody Usuario usuario) {
        String encoder = this.passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(encoder);
        if (!usuario.getPassword().matches(Constantes.REGEX_PASSWORD)) {
            throw new RuntimeException("Senha inválida");
        }
        return repository.save(usuario);
    }

    @DeleteMapping("/usuario/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        repository.deleteById(id);
    }

    /*@PostMapping("/login")
    public ResponseEntity<Usuario> validarPassword(@RequestBody Usuario usuario){
        Boolean valid = usuario.getPassword().matches(Constantes.REGEX_PASSWORD);
        if (valid){
            return ResponseEntity.ok(usuario);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }*/

}