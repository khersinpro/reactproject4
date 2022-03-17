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
import ScrollToTop from './components/SpeakersPages/ScrollToTop';
import { CartContext, Count } from './CartContext';
import './styles/main.scss';
import CheckOutModal from './components/CheckOutModal';

function App() {
  const category = ["HEADPHONES", "SPEAKERS", "EARPHONES"]
  const [burger, setBurger] = useState(false)
  const [cart, setCart] = useState(false)
  const [testContext, setTestContext] = useState([])
  const [confirm, setConfirm] = useState(false)
  
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

  const confirmChecker = () => {
    setConfirm(!confirm)
  }
  const openBurger = (e) => {
    setBurger(!burger)
  }

  const addToCart = (nom, number, price , device , img) =>{
    let contextValue = testContext.map(element => (
      element.name === nom ? {...element, number: element.number + number} : element
    ) )

    if(testContext.length >= 1){
      for (let i = 0; i < testContext.length; i++) {
       if(testContext[i].name === nom){
         setTestContext(contextValue)
         break
       }else if (testContext.length-1 == i){
         setTestContext([...testContext, {number: number, name: nom , price: price, device: device, img : img} ])
         break
       }
      }
   }else{
    setTestContext([...testContext, {number: number, name: nom , price: price, device: device, img : img} ])
   }
  }

  return (
    <Fragment>
        <BrowserRouter>
        <ScrollToTop>
      <CartContext.Provider value={{testContext, setTestContext, cart, openCart, addToCart, confirm, confirmChecker }}>
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
              </ScrollToTop>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
