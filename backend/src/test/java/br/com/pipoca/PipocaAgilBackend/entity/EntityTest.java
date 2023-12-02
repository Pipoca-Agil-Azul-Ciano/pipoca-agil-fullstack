package br.com.pipoca.PipocaAgilBackend.entity;

import br.com.pipoca.PipocaAgilBackend.entity.validation.EntityValidationException;
import br.com.pipoca.PipocaAgilBackend.enums.UserTypeEnum;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;

import static org.aspectj.bridge.MessageUtil.fail;
import static org.junit.jupiter.api.Assertions.*;

public class EntityTest {

    @Test
    public void testValidationWithTrueCondition() {
        try {
            EntityValidationException.validation(true, "Error message");
            fail("Expected EntityValidationException was not thrown");
        } catch (EntityValidationException e) {
            assertEquals("Error message", e.getMessage());
        }
    }

    @Test
    public void testValidationWithFalseCondition() {
        try {
            EntityValidationException.validation(false, "Error message");
        } catch (EntityValidationException e) {
            fail("Unexpected EntityValidationException was thrown");
        }
    }
    @ParameterizedTest
    @MethodSource("validUserParameters")
    @DisplayName("Test for valid User Params")
    public void createUser_WithValidParameters_ReturnValidObjectState(String fullName, String email, String password, LocalDate dateBirth, UserTypeEnum userTypeEnum) {
        assertDoesNotThrow(() -> {
            User user = new User(fullName, email, password, dateBirth, userTypeEnum);
        });
    }


    @ParameterizedTest
    @ValueSource(strings = {"", " ", "a", "a a", "abc", "abd ", "abcde a", "~as", "~^^ asdd", "adas ^´~", "1231 asd", "dasda1 dasdas"})
    @DisplayName("Test for invalid Full Names")
    public void createUser_WithInvalidFullName_ThrowEntityValidationException(String invalidFullName) {
        assertThrows(EntityValidationException.class, () -> {
            User user = new User(invalidFullName, "email@email.com", "password", LocalDate.of(2023, 11, 26), UserTypeEnum.REGISTERED);
        });
    }

    @ParameterizedTest
    @ValueSource(strings = {"", "aemail.com", "ab@email.", "abc@emailcom", "@email.com", "@email.", "dashkj@12.com", "dashkj@12com", "dashkj@-.com"})
    @DisplayName("Test for invalid Email")
    public void createUser_WithInvalidEmail_ThrowEntityValidationException(String invalidEmail) {
        assertThrows(EntityValidationException.class, () -> {
            User user = new User("valid Name", invalidEmail, "password", LocalDate.of(2023, 11, 26), UserTypeEnum.REGISTERED);
        });
    }

    @ParameterizedTest
    @ValueSource(strings = {"", " ", "abcdefg", "abcdefG", "1abcdeF", "1!abcdF"})
    @DisplayName("Test for invalid Password")
    public void createUser_WithInvalidPassword_ThrowEntityValidationException(String invalidPassword) {
        assertThrows(EntityValidationException.class, () -> {
            User user = new User("valid Name", "valid@email.com", invalidPassword, LocalDate.of(2023, 11, 26), UserTypeEnum.REGISTERED);
        });
    }

    @ParameterizedTest
    @MethodSource("invalidDatesProvider")
    @DisplayName("Test for invalid DateBirth")
    public void createUser_WithInvalidDateBirth_ThrowEntityValidationException(LocalDate invalidDateBirth) {
        assertThrows(EntityValidationException.class, () -> {
            User user = new User("valid Name", "valid@email.com", "validPassword1", invalidDateBirth, UserTypeEnum.REGISTERED);
        });
    }
    @ParameterizedTest
    @MethodSource("invalidUserTypeEnumsProvider")
    @DisplayName("Test for invalid UserTypeEnum")
    public void createUser_WithInvalidDateBirth_ThrowEntityValidationException(UserTypeEnum invalidUserType) {
        assertThrows(EntityValidationException.class, () -> {
            User user = new User("valid Name", "valid@email.com", "validPassword1",LocalDate.of(2023, 11, 26), invalidUserType);
        });
    }

// SUPPORT PRIVATE METHODS
    private static Stream<Object[]> validUserParameters() {
        return Stream.of(
                new Object[]{"Nome completo", "email@email.com", "Password123", LocalDate.of(1997, 11, 26), UserTypeEnum.REGISTERED},
                new Object[]{"Outro Nome", "outro@email.com", "outraSenha", LocalDate.of(1997, 11, 26), UserTypeEnum.SUBSCRIBE}
        );
    }

    private static Collection<Object[]> invalidDatesProvider() {
        return Arrays.asList(new Object[][]{
                {null}, // Adding a null date case
                {LocalDate.now().plusDays(1)},
                {LocalDate.of(2017, 11, 26)},
                {LocalDate.now()} // Adding the current date
        });
    }

    private static Collection<UserTypeEnum> invalidUserTypeEnumsProvider() {
        return List.of(UserTypeEnum.ADMIN);
    }
}
