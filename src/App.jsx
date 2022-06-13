import './App.scss';
import beers from "./data/beers"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Filter from './components/Filter/Filter';
import Cards from './components/Cards/Cards';

const App = () => {

  return (
    <div className="App">
      <Filter/> 
      <Cards arr = {beers} />
    </div>
  );
}

export default App;
