import React from "react";
import { Link } from "react-router-dom";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";

const MainXx59 = () => {
  return (
    <main className="articleContainer">
      <div className="articleLink">
        <Link to="/reactproject4/headphones">Go Back</Link>
      </div>

      <div className="articleBox1">
        <div className="articleBox1__img xx59hero"></div>

        <div className="articleBox1__order">
          <h2 className="articleBox1__order--name">
            XX59
            <br />
            Headphones
          </h2>

          <p className="articleBox1__order--text">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>

          <h3 className="articleBox1__order--price">$ 899</h3>

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
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. <br />
            <br />
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
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
          <div className="articleBox3__container--img xx59Img1"></div>
          <div className="articleBox3__container--img xx59Img2"></div>
        </div>
        <div className="articleBox3__img3 xx59Img3"></div>
      </div>

      <div className="articleBox4">
        <p className="articleBox4__title">YOU MAY ALSO LIKE</p>

        <div className="articleBox4__articles">
          <div className="articleBox4__articles--artBox">
            <div className="artImg x99M2Art"></div>
            <p className="artName">X99 MARK II</p>
            <button><Link to='/reactproject4/headphones/x99m2'>SEE PRODUCT</Link></button>
          </div>
          <div className="articleBox4__articles--artBox">
            <div className="artImg x99M1Art"></div>
            <p className="artName">X99 MARK I</p>
            <button><Link to='/reactproject4/headphones/x99m1'>SEE PRODUCT</Link></button>
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

export default MainXx59;
