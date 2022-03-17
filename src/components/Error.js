import React, { Fragment } from "react";
import ArticleNav from "./pagesComponents/ArticleNav";
import Footer from "./pagesComponents/Footer";

const Error = ({openBurger, burger, openCart, cart, cartDisplay}) => {
  return (
    <Fragment>
      <ArticleNav openBurger={openBurger} burger={burger} carti={cart} openCart={openCart} cartDisplay={cartDisplay} />
      {/* //Style -> main.scss */}
      <main className="errorMain">
        <div className="errorPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="100px"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.775 16.368a1 1 0 0 1-1.55 1.264 4 4 0 0 0-6.45 0 1 1 0 1 1-1.55-1.264 6 6 0 0 1 9.55 
        0zM23 12A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9zm-4-3a1 
        1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0 1 1 0 0 0-2 0zm-6 0a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 
        3 3 0 0 0 6 0z"
            />
          </svg>
          <p>ERROR 404</p>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Error;
