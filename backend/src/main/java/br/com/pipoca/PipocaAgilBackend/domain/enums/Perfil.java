package br.com.pipoca.PipocaAgilBackend.domain.enums;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum Perfil {
    ADMIN(0, "ROLE_ADMIN"), VISITANTE(1,"ROLE_VISITANTE"), ASSINANTE(2, "ROLE_ASSINANTE");

    private Integer codigo;
    private String descricao;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public static Perfil toEnum(Integer cod){
        if(cod==null){
            return null;
        }
        for (Perfil x : Perfil.values()){
            if(cod.equals(x.getCodigo())){
                return x;
            }
        }
        throw new IllegalArgumentException("Perfil inválido!");
    }

}
