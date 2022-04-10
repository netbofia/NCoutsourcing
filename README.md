# NCoutsourcing
NCoutsourcing


Create database:
```sql 
    create database NCoutsourcing;
    create USER 'webapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'randomPassword';
    GRANT ALL PRIVILEGES ON `NCoutsourcing`.* TO 'webapp'@'localhost'; FLUSH PRIVILEGES;
    
    CREATE TABLE `NCoutsourcing`.`User` ( 
        `email` VARCHAR(254) NOT NULL , 
        `first_name` VARCHAR(254) NOT NULL , 
        `last_name` VARCHAR(254) NOT NULL , 
        `hash` VARCHAR(254) NOT NULL , 
        `createdOn` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
        `role` VARCHAR(254) NOT NULL , 
        `phone_country_code` VARCHAR(4) NULL DEFAULT '+351' ,
        `phone_code` VARCHAR(15) NULL ,
        `telegram` BOOLEAN NOT NULL DEFAULT FALSE, 
        `whatsapp` BOOLEAN NOT NULL DEFAULT FALSE, 
        PRIMARY KEY (`email`)
    ) ENGINE = InnoDB;
    
    CREATE TABLE `NCoutsourcing`.`Employee`(
        `NIF` INT NOT NULL,
        `CC` INT NOT NULL,
        `expiration_data` DATETIME NOT NULL,
        `email` VARCHAR(254) NOT NULL,
        `photo` VARCHAR(254) NULL,
        `description` TEXT NULL,
        `birthdate` DATETIME NOT NULL,
        `work_area` VARCHAR(254) NOT NULL,
        `evaluation_date` DATETIME NULL,
        `evaluator` VARCHAR(254) NULL,
        `active` BOOLEAN NOT NULL DEFAULT FALSE,
        `rank` INT NOT NULL,
        `qualifications` TEXT(1000) NULL,
        `hourly_rate` FLOAT NULL
    ) ENGINE = InnoDB;   
    
    ALTER TABLE `Employee` ADD FOREIGN KEY (`email`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE RESTRICT;
    ALTER TABLE `Employee` ADD FOREIGN KEY (`evaluator`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE RESTRICT;
    
    
    
    INSERT INTO `User` (`email`, `first_name`, `last_name`, `hash`, `createdOn`, `role`, `phone_country_code`, `phone_code`, `telegram`, `whatsapp`) VALUES ('brunovasquescosta@gmail.com', 'Bruno', 'Costa', 'hjklç', CURRENT_TIMESTAMP, 'admin', '+351', '912547011', '1', '1'),
    ('test1@gmail.com', 'Alexandre', 'Silva', 'hdfdjklç', CURRENT_TIMESTAMP, 'employee', '+351', '911234322', '0', '0'),
    ('test2@gmail.com', 'Gonçalo', 'Tavares', 'hdfdjklç', CURRENT_TIMESTAMP, 'employee', '+351', '911232322', '0', '0');

    INSERT INTO `Employee` (`NIF`, `CC`, `expiration_data`, `email`, `photo`, `description`, `birthdate`, `work_area`, `evaluation_date`, `evaluator`, `active`, `rank`, `qualifications`, `hourly_rate`) VALUES 
    ('2111231232', '1231312311', '2025-12-17 00:00:00', 'brunovasquescosta@gmail.com', "/images/employee-1.jpeg", 'Um trabalhador exemplar. Tirei a formação na melhor escola de gastronomia de Londres. Com estágio, no Rolan Garros, na companhia de catering MasterChef. Em Portugal trabalhei no Jncqois, da Avenida da liberdade n83. Sobre o comando do sushi man Yokomoto Sabishimi. Conto com uma vasta experiências em serviço de mesa.', '2011-12-13 15:17:06', '1', '2021-12-23 15:17:05.000000', NULL, '1', '2', '2021 - Altis Apoio à copa\r\n2020 - Rits Lisboa - Barman\r\n2019 - Rolan Garros - Catering', '7'),
    ('2111231232', '1231312311', '2025-12-17 00:00:00', 'test1@gmail.com', "/images/employee-2.jpeg", 'Um trabalhador exemplar. Tirei a formação na melhor escola de gastronomia de Londres. Com estágio, no Rolan Garros, na companhia de catering MasterChef. Em Portugal trabalhei no Jncqois, da Avenida da liberdade n83. Sobre o comando do sushi man Yokomoto Sabishimi. Conto com uma vasta experiências em serviço de mesa.', '2011-12-13 15:17:06', '1', '2021-12-23 15:17:05.000000', NULL, '1', '2', '2021 - Altis Apoio à copa\r\n2020 - Rits Lisboa - Barman\r\n2019 - Rolan Garros - Catering', '7')
    ;
```
