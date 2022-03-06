import React, {Fragment} from 'react'
import ArticleNav from '../../pagesComponents/ArticleNav'
import MainX992 from './MainX992'
import Footer from '../../pagesComponents/Footer'

const X99Mark2= ({openBurger, burger}) => {
  return (
    <Fragment>
        <ArticleNav openBurger={openBurger} burger={burger} />
        <MainX992 />
        <Footer />
    </Fragment>
  )
}

export default X99Mark2