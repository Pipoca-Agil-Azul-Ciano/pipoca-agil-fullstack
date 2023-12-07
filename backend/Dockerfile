FROM openjdk:17

WORKDIR /usr/src/app

COPY ./target/PipocaAgilBackend-0.0.1-SNAPSHOT.jar /usr/src/app/

EXPOSE 8080

CMD ["java", "-jar", "PipocaAgilBackend-0.0.1-SNAPSHOT.jar", "--server.port=8080"]
