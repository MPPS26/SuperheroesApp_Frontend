import AllsuperHeroes from './AllSuperHeroes';
import './App.css';
import { Routes, Route } from "react-router-dom";
import EachSuperHero from './EachSuperHero';
import NewShero from './NewShero'
import EditSuperHero from './EditSuperHero';



function App() {

  return (
    <>
    <div className="title">
      <h1>SUPERHEROES</h1>
    </div>
    <Routes>
      <Route path='/' element={<AllsuperHeroes/>}/>
      <Route path='/:id' element={<EachSuperHero/>}/> 
      <Route path='/heroes/new' element={<NewShero/>}/>
      <Route path='/heroes/edit/:id' element={<EditSuperHero/>}/>
    </Routes>    
    </>
  );
}

export default App;
