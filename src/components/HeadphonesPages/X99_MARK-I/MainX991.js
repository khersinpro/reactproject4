import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";
import { CartContext } from "../../../CartContext";

const MainX991 = () => {
  const [number, setNumber] = useState(1);
  const [xx99m1, setXx99m1] = useState({name: "XX99 MK I", price: 1750, device: "$", img : "image-xx99-mark-one-headphones.jpg"})
  const {addToCart} = useContext(CartContext)
  const {name, price, device, img} = xx99m1

  const clickAdd = (e) => {
    if (e.target.value === "-") {
      if (number <= 1) {
      } else {
        setNumber(number - 1);
      }
    } else setNumber(number + 1);
  };


  return (
    <main className="articleContainer">
      <div className="articleLink">
        <Link to="/reactproject4/headphones">Go Back</Link>
      </div>

      <div className="articleBox1">
        <div className="articleBox1__img x991hero"></div>

        <div className="articleBox1__order">
          <h2 className="articleBox1__order--name">
            XX99 Mark I <br />
            Headphones
          </h2>

          <p className="articleBox1__order--text">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          <h3 className="articleBox1__order--price">$ 1,750</h3>

          <div className="articleBox1__order--sendOrder">
            <div className="inputContainer">
              <button value="-" onClick={clickAdd}>
                -
              </button>
              <input id="number" type="text" value={number} readOnly />
              <button value="+" onClick={clickAdd}>
                +
              </button>
            </div>
            <button
              className="addToCart"
              onClick={() => addToCart(name, number, price, device, img)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="articleBox2">
        <div className="articleBox2__left">
          <p className="articleBox2__left--title">FEATURES</p>
          <p className="articleBox2__left--txt1">
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz. <br />
            <br />
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
          </p>
        </div>

        <div className="articleBox2__right">
          <p className="articleBox2__right--title">in the box</p>
          <ul>
            <li>
              <span>1x</span> Headphone Unit
            </li>
            <li>
              <span>2x</span> Replacement Earcups
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> 3.5mm 5m Audio Cable
            </li>
          </ul>
        </div>
      </div>

      <div className="articleBox3">
        <div className="articleBox3__container">
          <div className="articleBox3__container--img x991Img1"></div>
          <div className="articleBox3__container--img x991Img2"></div>
        </div>
        <div className="articleBox3__img3 x991Img3"></div>
      </div>

      <div className="articleBox4">
        <p className="articleBox4__title">YOU MAY ALSO LIKE</p>

        <div className="articleBox4__articles">
          <div className="articleBox4__articles--artBox">
            <div className="artImg x99M2Art"></div>
            <p className="artName">X99 MARK II</p>
            <button>
              <Link to="/reactproject4/headphones/x99m2">SEE PRODUCT</Link>
            </button>
          </div>
          <div className="articleBox4__articles--artBox">
            <div className="artImg xx59Art"></div>
            <p className="artName">XX59</p>
            <button>
              <Link to="/reactproject4/headphones/xx59">SEE PRODUCT</Link>
            </button>
          </div>
          <div className="articleBox4__articles--artBox">
            <div className="artImg zx9SpkArt"></div>
            <p className="artName">ZX9 SPEAKER</p>
            <button>
              <Link to="/reactproject4/speakers/zx9">SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="mainNav">
        <div className="mainNav__box">
          <img className="headphonesImg" src={headphones} alt="headphones" />
          <Link to="/reactproject4/headphones">
            HEADPHONES
            <div className="mainNav__box--anchorBox">
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

        <div className="mainNav__box">
          <img className="speakersImg" src={speakers} alt="speakers" />
          <Link to="/reactproject4/speakers">
            SPEAKERS
            <div className="mainNav__box--anchorBox">
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

        <div className="mainNav__box">
          <img className="earphonesImg" src={earphones} alt="earphones" />
          <Link to="/reactproject4/earphones">
            EARPHONES
            <div className="mainNav__box--anchorBox">
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

      <div className="fourthBox">
        <div className="fourthBox__left">
          <div className="fourthBox__left--text">
            <h2>
              Bringing you the <span> best </span>audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>

        <div className="fourthBox__right"></div>
      </div>
    </main>
  );
};

export default MainX991;
