DROP TABLE IF EXISTS sub_projects CASCADE;
CREATE TABLE sub_projects (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  charge_code VARCHAR(255)
);