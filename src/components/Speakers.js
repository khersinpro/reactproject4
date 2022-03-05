import React, {Fragment} from 'react'
import CategorieNav from './pagesComponents/CategorieNav'
import SpeakersHome from './SpeakersPages/SpeakersHome'
import Footer from './pagesComponents/Footer'

const Speakers = ({openBurger, burger, name}) => {
  return (
    <Fragment>
     <CategorieNav openBurger={openBurger} burger={burger} name={name[1]} />   
     <SpeakersHome />
     <Footer />
    </Fragment>
  )
}

export default Speakers