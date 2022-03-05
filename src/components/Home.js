import React, {Fragment} from 'react'
import HomeNav from './pagesComponents/HomeNav'
import HomeMain from './pagesComponents/HomeMain'
import Footer from './pagesComponents/Footer'

const Home = ({openBurger, burger}) => {
  return (
      <Fragment>
        <HomeNav openBurger={openBurger} burger={burger} />
        <HomeMain />
        <Footer />
      </Fragment>
   
  )
}

export default Home