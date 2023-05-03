//Imports
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');

//Create app/ server instance
const app = express();
const server = http.createServer(app);
const port = 8001; // Define our base URL as http:\\localhost:8001

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


//Endpoints
app.use('/', (req, res) => {
  res.send('Root - Success');
});
app.use('/clients', clientRoutes);


// PORT LISTEN
server.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
