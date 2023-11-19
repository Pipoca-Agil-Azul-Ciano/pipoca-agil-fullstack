package br.com.pipoca.PipocaAgilBackend.exceptions;

public class ConflictException extends Exception{
    public ConflictException(String error){
        super(error);
    }
}
