DROP TABLE IF EXISTS clients CASCADE;
CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);