FROM openjdk:11
ARG JAR_FILE
ENV JAVA_OPTS=""
ADD ${JAR_FILE} app.jar
VOLUME /tmp
EXPOSE 8080
ENTRYPOINT [ "sh", "java -jar app.jar" ]