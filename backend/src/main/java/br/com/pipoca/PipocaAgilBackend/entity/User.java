package br.com.pipoca.PipocaAgilBackend.entity;

import br.com.pipoca.PipocaAgilBackend.entity.validation.EntityValidationException;
import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Data
@Table(name = "pipoca_user")
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
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userTypeEnum;
    @Column
    private Boolean isActive = true;
    @Column
    private LocalDate cratedAt = LocalDate.now();
    @Column
    private LocalDate updatedAt = LocalDate.now();
    @Column()
    private String jwt;

    public User() {}

    public User(String fullName, String email, String password, LocalDate dateBirth, UserTypeEnum userTypeEnum) throws EntityValidationException {
        attributeValidation(fullName, email, password, dateBirth, userTypeEnum);
    }

    private void attributeValidation(String fullName, String email, String password, LocalDate dateBirth, UserTypeEnum userTypeEnum) throws EntityValidationException {
        EntityValidationException.validation(fullName.length() < 2 ||
                fullName.trim().isBlank() ||
                fullName.matches("^[a-zA-Z]{2,}\\s[a-zA-Z]{2,}$\n"), "(Internal Validation) Invalid Full Name. The Full Name must contains 2 or more chars 1 blank space and 2 or more chars.");

        EntityValidationException.validation(email.trim().isBlank() ||
                email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n"), "(Internal Validation) Invalid Email. Input a valid email format.");

        EntityValidationException.validation(password.trim().isBlank(), "(Internal Validation) Invalid Password. The password must contain 8 or more characters, 1 uppercase character, 1 special character and a number ");

        EntityValidationException.validation(dateBirth == null ||
                dateBirth.isAfter(LocalDate.now()) ||
                dateBirth.isEqual(LocalDate.now()) ||
                Period.between(dateBirth, LocalDate.now()).getYears() < 18, "(Internal Validation) Invalid Date. Insert a valid date birthday");

        EntityValidationException.validation(userTypeEnum == UserTypeEnum.ADMIN, "(Internal Validation) Invalid User Role. These constructor not allowed to create admins");
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.dateBirth = dateBirth;
        this.userTypeEnum = userTypeEnum;
    }
}
