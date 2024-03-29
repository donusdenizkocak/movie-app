import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const MovieContext = createContext()

const API_KEY=process.env.REACT_APP_TMBD_KEY;
const FEATURED_API= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

 const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      getMovies(FEATURED_API);
    }, [])
    // console.log(movies)
    
    const getMovies=(API)=>{
        setLoading(true);
        axios
        .get(API)
        .then((res)=>setMovies(res.data.results))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
    };
    const values ={movies,getMovies,loading};
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
export default MovieContextProvider