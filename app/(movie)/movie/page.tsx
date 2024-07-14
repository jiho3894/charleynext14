import Link from 'next/link';

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await fetch(API_URL).then((response) => response.json());
};

const Movie = async () => {
  const movieList = await getMovies();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {movieList.map((data: any) => {
        return (
          <Link href={`/movie/${data.id}?keyword=${data.original_title}`} key={data.id}>
            {data.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Movie;

// 기존 클라이언트 API fetching 방식
// 'use client';

// import { useEffect, useState } from 'react';

// const Movie = () => {
//   const [loading, setLoading] = useState(true);
//   const [movieList, setMovieList] = useState([]);

//   const getMovies = async () => {
//     const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
//     const data = await response.json();
//     setMovieList(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <div>{loading ? 'loading...' : JSON.stringify(movieList)}</div>;
// };

// export default Movie;
