package br.com.pipoca.PipocaAgilBackend.exceptions;

public class BadRequestException extends Exception{

    public BadRequestException(String error){
        super(error);
    }
}
