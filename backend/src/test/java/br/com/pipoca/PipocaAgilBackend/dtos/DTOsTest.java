package br.com.pipoca.PipocaAgilBackend.dtos;

import br.com.pipoca.PipocaAgilBackend.dtos.UserLoginDTO;
import br.com.pipoca.PipocaAgilBackend.dtos.UserRegisterDTO;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DTOsTest {
    @Test
    public void testUserLoginDTOFields() {
        String email = "test@example.com";
        String password = "password123";

        UserLoginDTO userLoginDTO = new UserLoginDTO();
        userLoginDTO.email = email;
        userLoginDTO.password = password;

        assertEquals(email, userLoginDTO.email);
        assertEquals(password, userLoginDTO.password);
    }

    @Test
    public void testUserRegisterDTOFields() {
        String fullName = "John Doe";
        String email = "john@example.com";
        String password = "password123";
        LocalDate dateOfBirth = LocalDate.of(1990, 10, 15);

        UserRegisterDTO userRegisterDTO = new UserRegisterDTO();
        userRegisterDTO.fullName = fullName;
        userRegisterDTO.email = email;
        userRegisterDTO.password = password;
        userRegisterDTO.dateBirth = dateOfBirth;

        assertEquals(fullName, userRegisterDTO.fullName);
        assertEquals(email, userRegisterDTO.email);
        assertEquals(password, userRegisterDTO.password);
        assertEquals(dateOfBirth, userRegisterDTO.dateBirth);
    }
}
