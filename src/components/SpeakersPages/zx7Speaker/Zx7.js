import React, { Fragment } from "react";
import ArticleNav from "../../pagesComponents/ArticleNav";
import MainZx7 from "./MainZx7";
import Footer from "../../pagesComponents/Footer";

const Zx7 = ({ openBurger, burger }) => {
  return (
    <Fragment>
      <ArticleNav openBurger={openBurger} burger={burger} />
      <MainZx7 />
      <Footer />
    </Fragment>
  );
};

export default Zx7;
