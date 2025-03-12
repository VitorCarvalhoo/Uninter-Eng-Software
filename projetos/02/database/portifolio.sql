--> Criação da Database e adição de dados importantes para manuntenção do site/projeto.

USE amrp;

CREATE TABLE IF NOT EXISTS Usuarios (
    ID int AUTO_INCREMENT, 
    Username VARCHAR(50), 
    Email VARCHAR(30), 
    Pass VARCHAR(255), 
    Helper boolean DEFAULT 0, 
    PRIMARY KEY (ID)
);

SELECT * FROM Usuarios;

