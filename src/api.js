const searchMovies = async (term) => {
  const response = await fetch(`https://www.omdbapi.com/?t=${term}&apikey=YOUR_API_KEY`);
  const data = await response.json();
  return data.Response === "True" ? data : null; // Return the movie object or null if not found
};

export default searchMovies;
