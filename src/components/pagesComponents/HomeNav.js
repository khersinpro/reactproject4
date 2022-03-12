import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CartModal from "../CartModal";
import logo from "../../images/shared/desktop/logo.svg";
import cart from "../../images/shared/desktop/icon-cart.svg";
import burgerMenu from "../../images/shared/tablet/icon-hamburger.svg";
import earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import { CartContext } from "../../CartContext";

const HomeNav = ({ openBurger, burger, openCart, carti, cartDisplay }) => {
  const { testContext, setTestContext } = useContext(CartContext);

  let priceTest = 0

  for(let i= 0; i < testContext.length ; i++){
      priceTest += testContext[i].price * testContext[i].number
  }

  function changeNumber(index, value){
    let contextValue = testContext.map((element, idx) => (
       idx === index ? {...element, number: value} : element
    ) )
    if(value > 0){
      setTestContext(contextValue)
      console.log(contextValue, "+1");
    }else{
      let deleteItem = contextValue.filter((item) => item.number !== 0)
      if(deleteItem.length === 0 ){
        localStorage.removeItem("cart")
        setTestContext(deleteItem)
      }else{
        setTestContext(deleteItem)
      }
      console.log(deleteItem.length, '-1');
    }
  }

  function deleteCart() {
    localStorage.removeItem("cart")
    setTestContext([])
  }
  return (
    <Fragment>
      <header className="homeNav">
        <div
          className="cartModal"
          style={{ display: `${carti ? "block" : "none"}` }}
        >
          <div className="bgModal" onClick={openCart}>
          </div>
          <div className="cartModal__modal">

              <div className="cartModal__modal--cartLength">
                <p>CART({testContext.length})</p>
                <button onClick={deleteCart}>Remove all</button>
              </div>

              <div className="cartModal__modal--cart">
                {testContext.map((article, idx) => (
                  <div className="artContainer" key={idx}> 
                    <div className="artContainer__left">
                      <img src={require(`../../images/cart/${article.img}`)} alt={article.name} />
                      <div className="artContainer__left--txt">
                        <p className="name">{article.name}</p>
                        <p className="price">{article.device} {article.price}</p>
                      </div>
                    </div>
                    <div className="inputContainer">
                      <button value="-" onClick={() => changeNumber(idx, article.number -1)} >-</button>
                      <input id="number" type="text" value={article.number} readOnly />
                      <button value="+" onClick={() => changeNumber(idx, article.number +1)} >+</button>
                    </div>
                  </div>
                ))}
              </div>

            <div className="cartModal__modal--cartPrice">
              <p className="first">TOTAL</p>
              <p className="price">$ {priceTest}</p>
            </div>

            <button className="cartModal__modal--checkOut">CHECKOUT</button>

          </div>
        </div>
        <nav>
          <div className="logoContainer">
            <img
              className="burger"
              onClick={openBurger}
              src={burgerMenu}
              alt="burger"
            />
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className={`linkContainer ${!burger && "openOrClose"}`}>
            <div className="navContainer home">
              <Link to="/reactproject4/">HOME</Link>
            </div>

            <div className="navContainer">
              <img
                className="headphones absoImg"
                src={headphones}
                alt="headphones"
              />
              <Link to="/reactproject4/headphones" onClick={openBurger}>
                HEADPHONES
                <div className="shop">
                  <span>SHOP</span>
                  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.322 1l5 5-5 5"
                      stroke="#D87D4A"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="navContainer">
              <img className="wat absoImg" src={speakers} alt="speakers" />
              <Link to="/reactproject4/speakers" onClick={openBurger}>
                SPEAKERS
                <div className="shop">
                  <span>SHOP</span>
                  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.322 1l5 5-5 5"
                      stroke="#D87D4A"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="navContainer">
              <img
                className="earphones absoImg"
                src={earphones}
                alt="earphones"
              />
              <Link to="/reactproject4/earphones" onClick={openBurger}>
                EARPHONES
                <div className="shop">
                  <span>SHOP</span>
                  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.322 1l5 5-5 5"
                      stroke="#D87D4A"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <img className="cart" src={cart} alt="cart" onClick={openCart} />
        </nav>
        <div className="presentationHeader">
          <p className="firstTxt">NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p className="scdTxt">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>
            <Link to="/reactproject4/headphones/x99m2">SEE PRODUCT</Link>
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default HomeNav;
