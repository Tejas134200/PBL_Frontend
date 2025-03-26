import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'; // Ensure you add `.js` to the import path

const app = express();
app.set("view engine", "ejs");
app.set('views');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
const dbURI = 'mongodb://127.0.0.1:27017/JWT2';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3001, () => console.log('Server running on port 3000'));
    })
    .catch((err) => console.log(err));

// Routes
app.use(authRoutes);


