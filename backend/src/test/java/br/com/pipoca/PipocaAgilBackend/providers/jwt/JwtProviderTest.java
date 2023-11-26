package br.com.pipoca.PipocaAgilBackend.providers.jwt;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class JwtProviderTest {

    @Test
    public void testCreateToken() {
        JwtProvider jwtProvider = new JwtProvider();
        jwtProvider.init();
        String email = "user@example.com";

        String token = jwtProvider.createToken(email);

        assertNotNull(token);
    }
}
