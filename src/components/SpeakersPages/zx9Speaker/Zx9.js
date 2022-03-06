import React, { Fragment } from "react";
import ArticleNav from "../../pagesComponents/ArticleNav";
import MainZx9 from "./MainZx9";
import Footer from "../../pagesComponents/Footer";

const Zx9 = ({ openBurger, burger }) => {
  return (
    <Fragment>
      <ArticleNav openBurger={openBurger} burger={burger} />
      <MainZx9 />
      <Footer />
    </Fragment>
  );
};

export default Zx9;
