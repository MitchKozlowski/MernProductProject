//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from "./Routes/product.route.js";

// Initializes dotenv I think
dotenv.config();

// Creates express variable
const app = express();
const PORT = process.env.PORT

app.use(express.json()); // Middleware. Allows us to accept JSON data in the req.body

app.use("/")
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


