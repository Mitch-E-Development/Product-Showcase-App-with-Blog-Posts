const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require('./routes/postRoutes');
const productRoutes = require('./routes/productRoutes');
const messageRoutes = require('./routes/messageRoutes');
const config = require('./config')

const app = express();


// mount middleware
app.use(cors('*'));
app.use(express.json());

// Mount routes
app.use('/api', postRoutes);
app.use('/api', productRoutes);
app.use('/api', messageRoutes);



// Connect to the MongoDB database
mongoose.connect(config.DATABASE)
    .then(() => {
        console.log("Connected to DB successfully");
        
        // Start the server after successful database connection
        app.listen(config.PORT, () => {
            console.log(`Server listening on port ${config.PORT}`);
        });
    })
    .catch(error => {
        console.log(`The following error occurred while connecting to DB:\n ${error}`);
    });
