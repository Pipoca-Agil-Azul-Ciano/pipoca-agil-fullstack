package br.com.pipoca.PipocaAgilBackend.config.swagger;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Pipoca Ágil API")
                        .description("SpringBoot Application")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("Azul Ciano")
                                .email("")
                                .url("https://github.com/Pipoca-Agil-Azul-Ciano/pipoca-agil-fullstack")));
    }
}
