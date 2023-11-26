package br.com.pipoca.PipocaAgilBackend.exceptions;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExceptionsTest {
    @Test
    public void testBadRequestExceptionMessage() {
        String errorMessage = "Bad Request Error";
        BadRequestException exception = new BadRequestException(errorMessage);
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    public void testBadRequestExceptionWithNullMessage() {
        BadRequestException exception = new BadRequestException(null);
        assertEquals(null, exception.getMessage());
    }

    @Test
    public void testConflictExceptionMessage() {
        String errorMessage = "Conflict Error";
        ConflictException exception = new ConflictException(errorMessage);
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    public void testConflictExceptionWithNullMessage() {
        ConflictException exception = new ConflictException(null);
        assertEquals(null, exception.getMessage());
    }

    @Test
    public void testInternalErrorExceptionMessage() {
        String errorMessage = "Internal Error";
        InternalErrorException exception = new InternalErrorException(errorMessage);
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    public void testInternalErrorExceptionWithNullMessage() {
        InternalErrorException exception = new InternalErrorException(null);
        assertEquals(null, exception.getMessage());
    }

    @Test
    public void testUnauthorizedExceptionMessage() {
        String errorMessage = "Unauthorized Access Error";
        UnauthorizedException exception = new UnauthorizedException(errorMessage);
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    public void testUnauthorizedExceptionWithNullMessage() {
        UnauthorizedException exception = new UnauthorizedException(null);
        assertEquals(null, exception.getMessage());
    }
}
