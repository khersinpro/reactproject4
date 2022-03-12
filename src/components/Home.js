import React, {Fragment} from 'react'
import HomeNav from './pagesComponents/HomeNav'
import HomeMain from './pagesComponents/HomeMain'
import Footer from './pagesComponents/Footer'

const Home = ({openBurger, burger, openCart, cart, cartDisplay}) => {
  return (
      <Fragment>
        <HomeNav openBurger={openBurger} burger={burger} carti={cart} openCart={openCart} cartDisplay={cartDisplay} />
        <HomeMain />
        <Footer />
      </Fragment>
   
  )
}

export default Home