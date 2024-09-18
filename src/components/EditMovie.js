import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/getMovies`)
      .then(response => {
        const movie = response.data.find(m => m._id === id);
        setMovieData(movie);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/editMovie/${id}`, movieData)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Movie</h1>
      <input type="text" name="movieName" value={movieData.movieName || ''} onChange={handleChange} required />
      <input type="text" name="theatreName" value={movieData.theatreName || ''} onChange={handleChange} required />
      <input type="date" name="releaseDate" value={movieData.releaseDate || ''} onChange={handleChange} required />
      <input type="text" name="time" value={movieData.time || ''} onChange={handleChange} required />
      <input type="number" name="noOfSeats" value={movieData.noOfSeats || ''} onChange={handleChange} required />
      <input type="text" name="movieImage" value={movieData.movieImage || ''} onChange={handleChange} required />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditMovie;
