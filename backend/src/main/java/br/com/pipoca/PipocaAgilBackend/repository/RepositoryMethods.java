package br.com.pipoca.PipocaAgilBackend.repository;

import br.com.pipoca.PipocaAgilBackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class RepositoryMethods {
    @Autowired
    private final UserRepository repository;

    public RepositoryMethods(UserRepository repository) {
        this.repository = repository;
    }

    //REFATORAR (MULTIPLAS FALHAS)
    @Transactional
    public void updateUser(User updatedUser) {

        User existingUser = repository.findById(updatedUser.getId());
        existingUser.setFullName(updatedUser.getFullName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setDateBirth(updatedUser.getDateBirth());
        existingUser.setUserTypeEnum(updatedUser.getUserTypeEnum());
        existingUser.setIsActive(updatedUser.getIsActive());
        existingUser.setUpdatedAt(updatedUser.getUpdatedAt());
        existingUser.setJwt(updatedUser.getJwt());


        repository.save(existingUser);
    }
}
