import React, {Fragment}  from "react";
import ArticleNav from "../../pagesComponents/ArticleNav";
import MainXx59 from "./MainXx59";
import Footer from "../../pagesComponents/Footer";

const Xx59 = ({ openBurger, burger }) => {
  return (
    <Fragment>
      <ArticleNav openBurger={openBurger} burger={burger} />
      <MainXx59 />
      <Footer />
    </Fragment>
  );
};

export default Xx59;
