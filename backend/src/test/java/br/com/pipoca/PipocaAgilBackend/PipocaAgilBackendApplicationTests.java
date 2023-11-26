package br.com.pipoca.PipocaAgilBackend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = PipocaAgilBackendApplication.class)
class PipocaAgilBackendApplicationTests {

	@Autowired
	private PipocaAgilBackendApplication pipocaAgilBackendApplication;

	@Test
	void contextLoads() {
		assertThat(pipocaAgilBackendApplication).isNotNull();
	}
}
