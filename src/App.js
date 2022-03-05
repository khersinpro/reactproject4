import React, {Fragment, useState} from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import Headphones from './components/Headphones';
import Speakers from './components/Speakers';
import Earphones from './components/Earphones';
import './styles/main.scss';

function App() {
  const category = ["HEADPHONES", "SPEAKERS", "EARPHONES"]
  const [burger, setBurger] = useState(false)

  const openBurger = (e) => {
    setBurger(!burger)
  }

  return (
    <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/reactproject4/home" 
              element={<Home 
                openBurger={openBurger} 
                burger={burger} 
              />} 
            />
            <Route path="/reactproject4/headphones" 
              element={< Headphones 
                openBurger={openBurger} 
                burger={burger}
                name={category}
              />} 
            />
            <Route path="/reactproject4/speakers" 
              element={< Speakers 
                openBurger={openBurger} 
                burger={burger}
                name={category}
              />} 
            />
            <Route path="/reactproject4/earphones" 
              element={< Earphones 
                openBurger={openBurger} 
                burger={burger}
                name={category}
              />} 
            />
          </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
