import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    movieName: '',
    theatreName: '',
    releaseDate: '',
    time: '',
    noOfSeats: '',
    movieImage: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/addMovie', movieData)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={headerStyle}>Add Movie</h1>
      <input
        type="text"
        name="movieName"
        placeholder="Movie Name"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="theatreName"
        placeholder="Theatre Name"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="date"
        name="releaseDate"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="time"
        placeholder="Time"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="number"
        name="noOfSeats"
        placeholder="No. of Seats"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="movieImage"
        placeholder="Image URL"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Movie</button>
    </form>
  );
};

export default AddMovie;
