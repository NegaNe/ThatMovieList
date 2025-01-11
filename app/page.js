"use client";
import Image from 'next/image';

import { useEffect, useState } from 'react';
import Navbar from './ui/navbar';

export default function Home() {
  const [data, setData] = useState(null);
  const [detail_data, setDetailData] = useState(null);
  const [error, setError] = useState(null);
  const [sortby, setSortBy] = useState('now_playing');

  const fetchMovies = (category) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`)
    .then((res) => {
      if (res.ok) {
        return res.json(); 
      }
      else
      throw new Error('Failed to fetch data from TMDb.');
    })
    .then((data) => setData(data)) 
    .catch((err) => {
      if (err instanceof Error) {
        setError(err.message); 
      } else {
        setError('Failed to fetch data.');
      }
    }, []);


  }
  useEffect(() => {
    fetchMovies(sortby);
  })


  return (
    <div>
      <Navbar />

    <div className='column-wrapper'>
      <div className='content-wrapper'>
        <form 
        onChange={(e) => setSortBy(e.target.value)}
        className='genre-form'>
          <label htmlFor="nowplaying">
            <input type="radio" id="nowplaying" name="sortby" value="now_playing" />Now Playing</label>
          <label htmlFor="popular">
            <input type="radio" id="popular" name="sortby" value="popular" />Popular</label>
          <label htmlFor="toprated">
            <input type="radio" id="toprated" name="sortby" value="top_rated" />Top Rated</label>
          <label htmlFor="upcoming">
            <input type="radio" id="upcoming" name="sortby" value="upcoming" />Upcoming</label>
        </form>

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
                <div className='movie-title'>{movie.title}</div>
                <p className='movie-overview'>Release Date{movie.release_date}</p>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
      </div>
    </div>
  );
}
