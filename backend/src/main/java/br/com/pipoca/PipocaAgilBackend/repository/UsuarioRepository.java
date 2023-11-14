package br.com.pipoca.PipocaAgilBackend.repository;

import br.com.pipoca.PipocaAgilBackend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario, Long> {
}
