import React, {Fragment} from 'react'
import CategorieNav from './pagesComponents/CategorieNav'
import HeadphonesMain from './HeadphonesPages/HeadphonesMain'
import Footer from './pagesComponents/Footer'

const Headphones = ({openBurger, burger, name}) => {
  return (
    <Fragment>
        <CategorieNav openBurger={openBurger} burger={burger} name={name[0]} />
        <HeadphonesMain />
        <Footer />
    </Fragment>
  )
}

export default Headphones