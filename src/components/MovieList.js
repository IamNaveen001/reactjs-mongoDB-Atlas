import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getMovies')
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteMovie = (id) => {
    axios.delete(`http://localhost:5000/deleteMovie/${id}`)
      .then(() => setMovies(movies.filter(movie => movie._id !== id)))
      .catch((error) => console.log(error));
  };

  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const movieStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const movieImageStyle = {
    width: '350px',
    height: 'auto',
    marginBottom: '10px',
  };

  const movieTextStyle = {
    margin: '5px 0',
    fontSize: '18px',
    color: '#333',
  };

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: '#fff',
  };

  const linkStyle = {
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    margin: '5px',
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '32px',
    color: '#333',
  };

  const addLinkStyle = {
    display: 'block',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '20px',
    color: '#28a745',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>New Movies</h1>
      <Link to="/add" style={addLinkStyle}>Add Movie</Link>
      <ul>
        {movies.map(movie => (
          <li key={movie._id} style={movieStyle}>
            <img src={movie.movieImage} alt={movie.movieName} style={movieImageStyle} />
            <p style={movieTextStyle}>Movie: {movie.movieName}</p>
            <p style={movieTextStyle}>Theatre: {movie.theatreName}</p>
            <p style={movieTextStyle}>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
            <p style={movieTextStyle}>Time: {movie.time}</p>
            <p style={movieTextStyle}>Seats: {movie.noOfSeats}</p>
            <Link to={`/edit/${movie._id}`} style={linkStyle}>Edit</Link>
            <button onClick={() => deleteMovie(movie._id)} style={buttonStyle}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
