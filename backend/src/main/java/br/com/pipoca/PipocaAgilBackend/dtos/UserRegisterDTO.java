package br.com.pipoca.PipocaAgilBackend.dtos;


import jakarta.validation.constraints.*;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDate;

@Validated
public class UserRegisterDTO {

    @NotBlank
    public String fullName;
    @Email(message = "Invalid email format. Enter a valid email.")
    @NotBlank(message = "Email cannot be blank.")
    public String email;

    @Pattern(regexp = "^(?=.*[a-zA-Z]).{8,}$\n", message = "The password must contain at least 8 characters, including at least one uppercase letter and one lowercase letter.")
    public String password;

    public LocalDate dateBirth;

    public UserRegisterDTO() {}

    public UserRegisterDTO(String fullName, String email, String password, LocalDate dateBirth) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.dateBirth = dateBirth;
    }
}
