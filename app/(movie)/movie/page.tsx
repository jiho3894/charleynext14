'use client';

import { useEffect, useState } from 'react';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    const data = await response.json();
    setMovieList(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return <div>{loading ? 'loading...' : JSON.stringify(movieList)}</div>;
};

export default Movie;
