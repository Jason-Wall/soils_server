# Soils_server

Hosted on Railway.app as:
[soilsserver-production.up.railway.app](soilsserver-production.up.railway.app)

## API

`GET /clients`
Retrieves a list of all clients in the database.

`GET /clients/{id}`
Retrieves the details of a specific client with the given ID.

`POST /clients`
Creates a new client in the database.

`PUT /clients/{id}`
Updates the details of a specific client with the given ID.

`DELETE /clients/{id}`\
Deletes a specific client with the given ID.

`GET /clients/{id}/projects`\
Retrieves a list of all projects for a specific client with the given ID.

`GET /projects/{id}`\
Retrieves the details of a specific project with the given ID.

`POST /clients/{id}/projects`\
Creates a new project for a specific client with the given ID.

`PUT /projects/{id}`\
Updates the details of a specific project with the given ID.

`DELETE /projects/{id}`\
Deletes a specific project with the given ID.

`GET /projects/{id}/samples`\
Retrieves a list of all samples for a specific project with the given ID.

`GET /samples/{id}`\
Retrieves the details of a specific sample with the given ID.

`POST /projects/{id}/samples`\
Creates a new sample for a specific project with the given ID.

`PUT /samples/{id}`\
Updates the details of a specific sample with the given ID.

`DELETE /samples/{id}`\
Deletes a specific sample with the given ID.

`GET /samples/{id}/test-results`\
Retrieves a list of all test results for a specific sample with the given ID.

`GET /test-results/{id}`\
Retrieves the details of a specific test result with the given ID.

`POST /samples/{id}/test-results`\
Creates a new test result for a specific sample with the given ID.

`PUT /test-results/{id}`\
Updates the details of a specific test result with the given ID.

`DELETE /test-results/{id}`\
Deletes a specific test result with the given ID.
