package br.com.pipoca.PipocaAgilBackend.exceptions;

public class InternalErrorException extends Exception{
    public InternalErrorException(String error){
        super(error);
    }

}
