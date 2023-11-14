package br.com.pipoca.PipocaAgilBackend.model;

import br.com.pipoca.PipocaAgilBackend.domain.enums.Perfil;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Data
@Table(name = "usuario")
public class Usuario implements Serializable {


    @Serial
    private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private final Long id;

    @NotBlank(message = "Campo não informado!")
    @Column(name = "nome", length = 200, nullable = true)
    private String nome;

    @Column(name = "sobrenome", length = 200, nullable = true)
    private String sobrenome;

    @Column(unique=true)
    private String apelido;

    @Email
    @Column(unique=true, nullable = true, length = 80)
    private String email;

    @Column(name = "senha", columnDefinition = "TEXT",length = 8, nullable = true)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private String password;

    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "PERFIS")
    protected Set<Integer> perfil = new HashSet<>();

    public Set<Perfil> getPerfil() {
        return perfil.stream().map(x -> Perfil.toEnum(x)).collect(Collectors.toSet());
    }

    public void addPerfil(Perfil perfil) {
        this.perfil.add(perfil.getCodigo());
    }
}
