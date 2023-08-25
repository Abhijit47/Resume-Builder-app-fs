const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const resumeRouter = require('./routes/resumeRoutes');

// create an app instance of express
const app = express();

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// configure environment variable
dotenv.config({ path: './config.env' });

// Default endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the resume API.' });
});

app.use('/api/v1', resumeRouter);

// Wildcard endpoint
app.all('*', (req, res, next) => {
  res.status(400).json({ message: `Can't ${req.method} on this ${req.originalUrl} Url.` });
  next();
});

module.exports = app;