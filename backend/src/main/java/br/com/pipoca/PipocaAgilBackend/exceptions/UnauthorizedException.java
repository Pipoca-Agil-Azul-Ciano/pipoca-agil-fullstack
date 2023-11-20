package br.com.pipoca.PipocaAgilBackend.exceptions;

public class UnauthorizedException extends Exception {
    public UnauthorizedException(String error) {
        super(error);
    }

}
