package br.com.pipoca.PipocaAgilBackend.entity;

import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data

@Table(name = "user")
public class User implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column
    @NotNull
    private String fullName;
    @Column
    @NotNull
    private String email;
    @NotNull
    @Column
    private String password;
    @NotNull
    @Column(name = "date_birth")
    private LocalDate dateBirth;
    @Column
    @NotNull
    private UserTypeEnum userTypeEnum;
    @Column
    private Boolean isActive = true;
    @Column
    private LocalDate cratedAt = LocalDate.now();
    @Column
    private LocalDate updatedAt = LocalDate.now();
    @Column(nullable = true)
    private String jwt;

    public User() {}
    public User(String fullName, String email, String password, LocalDate dateBirth, UserTypeEnum userTypeEnum) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.dateBirth = dateBirth;
        this.userTypeEnum = userTypeEnum;
    }
}
