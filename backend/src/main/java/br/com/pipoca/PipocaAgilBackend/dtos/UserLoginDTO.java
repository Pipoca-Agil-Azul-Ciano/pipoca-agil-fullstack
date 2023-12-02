package br.com.pipoca.PipocaAgilBackend.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class UserLoginDTO {
    @Email(message = "Invalid email format. Enter a valid email.")
    @NotBlank(message = "Email cannot be blank.")
    public String email;
    @NotBlank(message = "Password cannot be blank.")
    public String password;

    public UserLoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public UserLoginDTO() {}
}
