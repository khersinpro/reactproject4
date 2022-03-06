import React, { Fragment } from "react";
import ArticleNav from "../../pagesComponents/ArticleNav";
import MainYx1 from "./MainYx1";
import Footer from "../../pagesComponents/Footer";

const Yx1 = ({ openBurger, burger }) => {
  return (
    <Fragment>
      <ArticleNav openBurger={openBurger} burger={burger} />
      <MainYx1 />
      <Footer />
    </Fragment>
  );
};

export default Yx1;
