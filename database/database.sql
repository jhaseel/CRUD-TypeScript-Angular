CREATE DATABASE test_db;

USE test_db;

CREATE TABLE Personaje (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80),
    altura int(11),
    genero varchar(15),
    nacimiento varchar(20),
    description VARCHAR(255),
    image VARCHAR(400),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Vehiculo (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80),
    modelo varchar(80),
    clase varchar(80),
    description VARCHAR(255),
    image VARCHAR(400),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE Personaje;
DESCRIBE Vehiculo;