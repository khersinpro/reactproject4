import React, {Fragment, useState, useEffect} from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import Headphones from './components/Headphones';
import Speakers from './components/Speakers';
import Earphones from './components/Earphones';
import X99Mark2 from './components/HeadphonesPages/X99_MARK_II/X99Mark2.js';
import X99Mark1 from './components/HeadphonesPages/X99_MARK-I/X99Mark1';
import Xx59 from './components/HeadphonesPages/XX59/Xx59';
import Zx9 from './components/SpeakersPages/zx9Speaker/Zx9';
import Zx7 from './components/SpeakersPages/zx7Speaker/Zx7';
import Yx1 from './components/EarphonesPages/Yx1Hearphone/Yx1';
import CheckOut from './components/CheckOut';
import { CartContext, Count } from './CartContext';
import './styles/main.scss';

function App() {
  const category = ["HEADPHONES", "SPEAKERS", "EARPHONES"]
  const [burger, setBurger] = useState(false)
  const [cart, setCart] = useState(false)
  const [testContext, setTestContext] = useState([])
  
  useEffect(() => {
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", JSON.stringify(testContext))
    }else if(localStorage.getItem("cart").length > 2 && testContext.length === 0) {
      const local =  localStorage.getItem('cart')
      setTestContext(JSON.parse(local))
    }else{
      localStorage.setItem("cart", JSON.stringify(testContext))
    }
    
  }, [testContext])
  
  const openCart = () => {
    setCart(!cart)
  }

  const openBurger = (e) => {
    setBurger(!burger)
  }

  return (
    <Fragment>
        <BrowserRouter>
      <CartContext.Provider value={{testContext, setTestContext, cart, openCart}}>
          <Routes>
            <Route path="/reactproject4/" 
              element={<Home 
                openBurger={openBurger} 
                burger={burger} 
                cart={cart}
                openCart={openCart}      
              />} 
            />

            <Route path="/reactproject4/checkout" 
              element={<CheckOut
                openBurger={openBurger} 
                burger={burger} 
                cart={cart}
                openCart={openCart}
                
              />} 
            />

            <Route path="/reactproject4/headphones" 
              element={< Headphones 
                openBurger={openBurger} 
                burger={burger}
                name={category}
              />} 
            />
//***********************headphones articles****************************//
            <Route path="/reactproject4/headphones/x99m2" 
              element={<X99Mark2 
              openBurger={openBurger} 
              burger={burger}
              />} />
            <Route path="/reactproject4/headphones/x99m1" 
              element={<X99Mark1 
              openBurger={openBurger} 
              burger={burger}
              />} />
            <Route path="/reactproject4/headphones/xx59" 
              element={<Xx59 
              openBurger={openBurger} 
              burger={burger}
              />} />
//**************END OF HEADPHONES ARTICLES *****************************//

            <Route path="/reactproject4/speakers" 
              element={< Speakers 
                openBurger={openBurger} 
                burger={burger}
                name={category}
              />} 
            />
//***********************SPEAKER ARTICLES****************************// 
            <Route path="/reactproject4/speakers/zx7" 
              element={<Zx7
              openBurger={openBurger} 
              burger={burger}
              />} />      
            <Route path="/reactproject4/speakers/zx9" 
              element={<Zx9
                openBurger={openBurger} 
              burger={burger}
              />} />      
//**************END SPEAKER ARTICLES *****************************// 

            <Route path="/reactproject4/earphones" 
              element={< Earphones 
                openBurger={openBurger} 
                burger={burger}
                name={category}
              />} 
              />

//***********************EARPHONES ARTICLES****************************// 
            <Route path="/reactproject4/earphones/yx1" 
              element={<Yx1
              openBurger={openBurger} 
              burger={burger}
              />} />           
//**************END EARPHONES ARTICLES *****************************// 
          </Routes>
              </CartContext.Provider>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
