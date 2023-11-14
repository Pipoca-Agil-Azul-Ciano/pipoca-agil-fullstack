package br.com.pipoca.PipocaAgilBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class PipocaAgilBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PipocaAgilBackendApplication.class, args);
	}

}
