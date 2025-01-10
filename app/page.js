"use client";
import Image from 'next/image';
import '../app/globals.css';

import { useEffect, useState } from 'react';
import Navbar from './components/navbar';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json(); 
        }
        throw new Error('Failed to fetch data from TMDb.');
      })
      .then((data) => setData(data)) 
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError('Failed to fetch data.');
        }
      });
  }, []); 

  return (
    <div>
      <Navbar />

      {error} 
      {
      data !== null ? (
        <div className='movie-container'>
          {data.results.map((movie) => (
            <div className="card" key={movie.id}>
              {
              movie.poster_path&&(<Image src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
              alt={`${movie.title} poster`} width={250} height={300}/>)
              } 
              <div className='card-content'>
              <div className='list-style'>{movie.title}</div>
                <p>
                {movie.overview}
                </p>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
