package br.com.pipoca.PipocaAgilBackend.providers.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Date;

// Refatorar
@Component
public class JwtProvider {

    // Implementar .env
    private String secretKey = "secret-key";
    private long validityInMilliseconds = 3600000;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(String email) {
        Claims claims = Jwts.claims().setSubject(email);


        Date dateNow = new Date();
        Date tokenValidity = new Date(dateNow.getTime() + validityInMilliseconds);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(tokenValidity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
}
