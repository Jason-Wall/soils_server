DROP TABLE IF EXISTS psd CASCADE;
CREATE TABLE psd (
  id SERIAL PRIMARY KEY NOT NULL,
  sample_id INTEGER REFERENCES samples(id),
  serial VARCHAR(255),
  test_date DATE,
  results JSONB NOT NULL
);