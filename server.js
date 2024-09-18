const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('Enter your mongoDB connection String', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Movie Schema
const movieSchema = new mongoose.Schema({
    movieName: String,
    theatreName: String,
    releaseDate: String,
    time: String,
    noOfSeats: Number,
    movieImage: String,
});

const Movie = mongoose.model('Movie', movieSchema);

// Add movie
app.post('/addMovie', async (req, res) => {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.send("Movie added successfully");
});

// Edit movie
app.put('/editMovie/:id', async (req, res) => {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.send("Movie updated successfully");
});

// Delete movie
app.delete('/deleteMovie/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.send("Movie deleted successfully");
});

// Get all movies
app.get('/getMovies', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
