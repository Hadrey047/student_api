
require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const Student  = require('./models/student')

const app = express();
const port = process.env.PORT || 4000;

//middleware to parse JSON
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));
// app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB..', error));



//Basic Route 
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//Create a new Student
app.post('/students', async (req, res) =>{
    const {name,department,address,gender,age} = req.body
    const newStudent = new Student({name,department,address,gender,age})

    await newStudent.save()
    res.status(201).json(newStudent);
})

//Get all Students (READ)
app.get('/students', async (req, res)=> {
    const students = await Student.find()
    res.json(students);;

})

//Get a single Students by ID (READ)
app.get('/students/:id', async (req, res)=> {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({message: 'Student not found'});
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({message: 'Error fetching Student', error});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});