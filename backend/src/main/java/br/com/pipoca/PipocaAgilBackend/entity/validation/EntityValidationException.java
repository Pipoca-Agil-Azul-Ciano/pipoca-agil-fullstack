package br.com.pipoca.PipocaAgilBackend.entity.validation;

public class EntityValidationException extends Exception {
    public EntityValidationException(String error) {
        super(error);
    }

    public static void validation(Boolean isError, String message) throws EntityValidationException {
        if (isError) {
            throw new EntityValidationException(message);
        }
    }
}
