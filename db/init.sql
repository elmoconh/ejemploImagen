CREATE DATABASE IF NOT EXISTS mensajes_db;
USE mensajes_db;

CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(255) NOT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
);

INSERT INTO mensajes (texto) VALUES ('Mensaje de ejemplo');
