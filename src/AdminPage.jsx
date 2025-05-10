import React, { useState, useEffect } from 'react';
import './AdminPage.css';

const AdminPage = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ title: '', duration: '', poster: '', seats: '' });
    const [showAddMovieForm, setShowAddMovieForm] = useState(false);

    // Load movies from localStorage on component mount
    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }
    }, []);

    const updateLocalStorage = (updatedMovies) => {
        setMovies(updatedMovies);
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
    };

    const addMovie = () => {
        if (newMovie.title && newMovie.duration && newMovie.poster && newMovie.seats) {
            const updatedMovies = [...movies, { ...newMovie }];
            updateLocalStorage(updatedMovies);
            setNewMovie({ title: '', duration: '', poster: '', seats: '' });
            setShowAddMovieForm(false);
        }
    };

    const removeMovie = (indexToRemove) => {
        const updatedMovies = movies.filter((_, index) => index !== indexToRemove);
        updateLocalStorage(updatedMovies);
    };

    return (
        <div className="admin-page">
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li><a href="#movies">Manage Movies</a></li>
                </ul>
            </div>

            <div className="content">
                <h1>Welcome, Admin!</h1>

                <section id="movies">
                    <h2>Manage Movies</h2>
                    <button className="add-movie-btn" onClick={() => setShowAddMovieForm(!showAddMovieForm)}>
                        {showAddMovieForm ? 'Cancel' : 'Add New Movie'}
                    </button>

                    {showAddMovieForm && (
                        <div className="add-movie-form">
                            <input
                                type="text"
                                value={newMovie.title}
                                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                                placeholder="Movie Title"
                            />
                            <input
                                type="text"
                                value={newMovie.duration}
                                onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })}
                                placeholder="Duration (mins)"
                            />
                            <input
                                type="text"
                                value={newMovie.poster}
                                onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
                                placeholder="Poster URL"
                            />
                            <input
                                type="number"
                                value={newMovie.seats}
                                onChange={(e) => setNewMovie({ ...newMovie, seats: e.target.value })}
                                placeholder="Available Seats"
                            />
                            <button onClick={addMovie}>Add Movie</button>
                        </div>
                    )}

                    <div className="movie-list">
                        <h3>Available Movies</h3>
                        {movies.length > 0 ? (
                            movies.map((movie, index) => (
                                <div key={index} className="movie-card">
                                    <img src={movie.poster} alt={movie.title} className="movie-poster" />
                                    <div className="movie-info">
                                        <h4>{movie.title}</h4>
                                        <p>Duration: {movie.duration} mins</p>
                                        <p>Seats Available: {movie.seats}</p>
                                        <button onClick={() => removeMovie(index)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No movies available.</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminPage;