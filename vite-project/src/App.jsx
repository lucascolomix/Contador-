
import './App.css';
import MoviesList from './components/MoviesList';


function App() {
  

  return (
    <>
    <div>
      
      <div>
        <h1>52Film</h1>
      </div>

    <MoviesList cant={20} mensaje="Holaa"/>
    </div>
      
    </>
  );
}

export default App;
