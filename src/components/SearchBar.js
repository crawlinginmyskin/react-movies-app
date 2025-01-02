import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Wpisz tytuł filmu</h3>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <input
          type='text'
          placeholder='Szukaj filmu...'
          onChange={handleChange}
          value={term}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Szukaj</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default SearchBar;
