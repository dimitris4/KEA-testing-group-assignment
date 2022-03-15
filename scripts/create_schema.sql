
CREATE DATABASE my_schema;

CREATE TABLE `my_schema`.`grades` (
  `nGradeID` INT NOT NULL UNIQUE,
  `cDenmark` VARCHAR(45) NOT NULL,
  `cUSA` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nGradeID`));