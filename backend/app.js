const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', postRoutes);

module.exports = app;