FROM openjdk:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
LABEL authors="cristhian.acurio"

ENTRYPOINT ["java","-jar","/app.jar"]
