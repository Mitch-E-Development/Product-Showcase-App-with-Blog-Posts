
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require('./routes/postRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors('*'));
app.use(express.json());

// Mount routers
app.use('/api', postRoutes);
app.use('/api', productRoutes);

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost/product-showcase-db")
    .then(() => {
        console.log("Connected to DB successfully");
        
        // Start the server after successful database connection
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => {
        console.log(`The following error occurred while connecting to DB:\n ${error}`);
    });