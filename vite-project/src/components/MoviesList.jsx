import React from 'react';
import moviesList from '../data/movies.json';
import CardMovie from './CardMovie';


const MoviesList = (props) => {

//codigo javascript 
//props
const {cant,mensaje} = props; 
const listaPelis = moviesList.filter((movies) => {
return  movie.rank <= cant;

}) ; 




  return (
    <>
     <div>
      <h3> {cant} mas vistas!</h3>
   

      <div className="poster">
        {listaPelis.map((movie)=>(
          // <div className="container-img" key={movie.id}>
            //  <img className="movie-grid-image" src={movie.image} alt={movie.title} />
          // </div>
          <CardMovie peliculas={movie} key={peliculas.id}/>
        ))}
      </div>
    
      </div>
    </>
  )
}

export default MoviesList