import React from "react";
import { Link } from "react-router-dom";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";

const MainYx1 = () => {
  return (
    <main className="articleContainer">
      <div className="articleLink">
        <Link to="/reactproject4/earphones">Go Back</Link>
      </div>

      <div className="articleBox1">
        <div className="articleBox1__img yx1hero"></div>

        <div className="articleBox1__order">
        <p className="articleBox1__order--newProd">NEW PRODUCT</p>
          <h2 className="articleBox1__order--name">
          YX1 WIRELESS
            <br />
            EARPHONES
          </h2>

          <p className="articleBox1__order--text">
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
          </p>

          <h3 className="articleBox1__order--price">$ 599</h3>

          <div className="articleBox1__order--sendOrder">
            <div className="inputContainer">
              <button>-</button>
              <input id="number" type="text" value="0" readOnly />
              <button>+</button>
            </div>
            <button className="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="articleBox2">
        <div className="articleBox2__left">
          <p className="articleBox2__left--title">FEATURES</p>
          <p className="articleBox2__left--txt1">
          Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. <br />
            <br />

            The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
          </p>
        </div>

        <div className="articleBox2__right">
          <p className="articleBox2__right--title">in the box</p>
          <ul>
            <li>
              <span>2x</span> Earphone Unit
            </li>
            <li>
              <span>6x</span> Multi-size Earplugs
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> USB-C Charging Cable
            </li>
            <li>
              <span>1x</span> Travel Pouch
            </li>
          </ul>
        </div>
      </div>

      <div className="articleBox3">
        <div className="articleBox3__container">
          <div className="articleBox3__container--img yx1Img1"></div>
          <div className="articleBox3__container--img yx1Img2"></div>
        </div>
        <div className="articleBox3__img3 yx1Img3"></div>
      </div>

      <div className="articleBox4">
        <p className="articleBox4__title">YOU MAY ALSO LIKE</p>

        <div className="articleBox4__articles">
          <div className="articleBox4__articles--artBox">
            <div className="artImg x99M1Art"></div>
            <p className="artName">X99 MARK I</p>
            <button><Link to='/reactproject4/headphones/x99m1'>SEE PRODUCT</Link></button>
          </div>
          <div className="articleBox4__articles--artBox">
            <div className="artImg xx59Art"></div>
            <p className="artName">XX59</p>
            <button><Link to='/reactproject4/headphones/xx59'>SEE PRODUCT</Link></button>
          </div>
          <div className="articleBox4__articles--artBox">
            <div className="artImg zx9SpkArt"></div>
            <p className="artName">ZX9 SPEAKER</p>
            <button><Link to='/reactproject4/speakers/zx9'>SEE PRODUCT</Link></button>
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
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
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
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
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
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
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

export default MainYx1;
