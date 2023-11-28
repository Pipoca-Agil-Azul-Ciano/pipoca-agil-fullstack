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

    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z]).{8,}$", message = "The password must contain at least 8 characters, including at least one uppercase letter and one lowercase letter.")
    public String password;
    @Past(message = "Invalid date of birth. Enter a date prior to the current date.")
    @Min(value = 18, message = "Age must be at least 18 years.")
    @Max(value = 120, message = "Age must be less than 100 years.")
    public LocalDate dateBirth;


}
