DROP TABLE IF EXISTS samples CASCADE;
CREATE TABLE samples (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  sub_project_id INTEGER REFERENCES sub_projects(id),
  serial VARCHAR(255) NOT NULL,
  sampled_date DATE NOT NULL
);