import React, {Fragment}  from 'react'
import ArticleNav from '../../pagesComponents/ArticleNav'
import MainX991 from './MainX991'
import Footer from '../../pagesComponents/Footer'

const X99Mark1 = ({openBurger, burger}) => {
  return (
    <Fragment>
        <ArticleNav openBurger={openBurger} burger={burger} />
        <MainX991 />
        <Footer />
    </Fragment>
  )
}

export default X99Mark1