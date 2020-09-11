import React from 'react';
import ListCard from "./ListCard";
import { moviePopular, movieUpcoming, movieTopRated, movieNow } from "../service/index";

const Movie = () => {

    return (
        <>
            <ListCard title="Películas populares" limit={5} api={moviePopular} link ="/moviePopular/trending" />
            <ListCard title="Peliculas con mejores críticas" limit={5} api={movieTopRated} link ="/movieTopRated/trending" />
            <ListCard title="Películas a estrenarse" limit={5} api={movieUpcoming} link ="/movieUpcoming/trending" />
            <ListCard title="Películas en cines" limit={5} api={movieNow} link ="/movieNow/trending" />
        </>
  )

}

export default Movie;