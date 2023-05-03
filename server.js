//Imports
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');

//Create app/ server instance
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8001; // Define our base URL as http:\\localhost:8001

// Document network traffic to console.
app.use(morgan("dev"));
// Converts url to readable text
app.use(express.urlencoded({ extended: false }));
// Convert data package to json if applicable
app.use(express.json());
// Prevents cors errors
app.use(cors());

//EXPRESS
// Routes for each resource
const clientRoutes = require('./routes/clients');
const projectRoutes = require('./routes/projects');
const sampleRoutes = require('./routes/samples');

//Endpoints
app.use('/clients', clientRoutes);
app.use('/projects', projectRoutes);
app.use('/samples', sampleRoutes);

app.use('/', (req, res) => {
  res.send('Root - Success');
});


// PORT LISTEN
server.listen(port, '0.0.0.0', () => {
  console.log(`app is listening on ${port}`);
});