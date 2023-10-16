const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors'); // Import the 'cors' package


const app = express();


// Use the 'cors' middleware to enable CORS
app.use(cors());


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/CollegeDunia", { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the database'));

db.once('open', function () {
    console.log('Successfully connected to the database');
});

const FormDataSchema = require('./models/form_data');

app.use(express.json());

app.post('/formdata', async (req, res) => {
    try {
        const { Name, Email, Phone, City, course, DistanceCourse } = req.body;

        const newFormData = new FormDataSchema({
            Name,
            Email,
            Phone,
            City,
            course,
            DistanceCourse,
        });

        const savedData = await newFormData.save();
        res.status(201).json({ message: 'Data saved successfully', data: savedData });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
