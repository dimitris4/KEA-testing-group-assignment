
CREATE USER 'my_api'@'localhost' IDENTIFIED BY 'my_secret_password';

GRANT SELECT ON my_schema.grades TO 'my_api'@'localhost';

flush privileges;