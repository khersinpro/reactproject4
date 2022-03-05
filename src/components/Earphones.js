import React, {Fragment} from 'react'
import CategorieNav from './pagesComponents/CategorieNav'
import EarphoneMain from './EarphonesPages/EarphoneMain'
import Footer from './pagesComponents/Footer'

const Earphones = ({openBurger, burger, name}) => {
  return (
    <Fragment>
        <CategorieNav openBurger={openBurger} burger={burger} name={name[2]} />
        <EarphoneMain />
        <Footer />
    </Fragment>
  )
}

export default Earphones