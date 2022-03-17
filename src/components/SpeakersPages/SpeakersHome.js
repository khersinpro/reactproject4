import React from "react";
import { Link } from "react-router-dom";
import earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import HeadphonesMain from "../HeadphonesPages/HeadphonesMain";

const SpeakersHome = () => {
  return (
    //   CSS ARE IN HeadphonesMain.SCSS
    <main className="headphonesMain">
      <div className="headBox1">
        <div className="headBox1__left speakBg1"></div>
        <div className="headBox1__right">
          <div className="headBox1__right--text">
            <p className="firstTxt">NEW PRODUCT</p>
            <h2>ZX9 SPEAKER</h2>
            <p className="secondTxt">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button><Link to='/reactproject4/speakers/zx9'>SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>

      <div className="headBox2 flex2">
        <div className="headBox2__left speakBg2"></div>
        <div className="headBox2__right">
          <div className="headBox2__right--text">
            <h2>ZX7 SPEAKER</h2>
            <p className="secondTxt">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <button><Link to='/reactproject4/speakers/zx7'>SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>

      {/* SCSS ARE IN HOMEMAIN.SCSS */}
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
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      {/* SCSS ARE IN HOMEMAIN.SCSS */}

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

export default SpeakersHome;
