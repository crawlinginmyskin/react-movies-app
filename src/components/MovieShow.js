import React from 'react';

const MovieShow = ({ movie, onDelete }) => {
  const handleDelete = () => {
    onDelete(movie.imdbID);
  };

  return (
    <div style={styles.card}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={`${movie.Title} Poster`}
        style={styles.poster}
      />
      <div style={styles.details}>
        <h3>{movie.Title} ({movie.Year})</h3>
        <p><strong>Genre:</strong> {movie.Genre || "N/A"}</p>
        <p><strong>Director:</strong> {movie.Director || "N/A"}</p>
        <p><strong>Plot:</strong> {movie.Plot || "No plot available"}</p>
        <p><strong>IMDb Rating:</strong> {movie.imdbRating || "N/A"}</p>
        <button onClick={handleDelete} style={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  poster: {
    width: "150px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  details: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    border: "none",
    color: "white",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default MovieShow;
