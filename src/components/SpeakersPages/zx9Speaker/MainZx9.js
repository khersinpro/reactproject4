import React from "react";
import { Link } from "react-router-dom";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";

const MainZx9 = () => {
  return (
    <main className="articleContainer">
      <div className="articleLink">
        <Link to="/reactproject4/speakers">Go Back</Link>
      </div>

      <div className="articleBox1">
        <div className="articleBox1__img zx9hero"></div>

        <div className="articleBox1__order">
          <h2 className="articleBox1__order--name">
            ZX9
            <br />
            SPEAKER
          </h2>

          <p className="articleBox1__order--text">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>

          <h3 className="articleBox1__order--price">$ 4,500</h3>

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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
            <br />
            <br />
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
          </p>
        </div>

        <div className="articleBox2__right">
          <p className="articleBox2__right--title">in the box</p>
          <ul>
            <li>
              <span>2x</span> Speaker Unit
            </li>
            <li>
              <span>2x</span> Speaker Cloth Panel
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> 3.5mm 10m Audio Cable
            </li>
            <li>
              <span>1x</span> 10m Optical Cable
            </li>
          </ul>
        </div>
      </div>

      <div className="articleBox3">
        <div className="articleBox3__container">
          <div className="articleBox3__container--img zx9Img1"></div>
          <div className="articleBox3__container--img zx9Img2"></div>
        </div>
        <div className="articleBox3__img3 zx9Img3"></div>
      </div>

      <div className="articleBox4">
        <p className="articleBox4__title">YOU MAY ALSO LIKE</p>

        <div className="articleBox4__articles">
          <div className="articleBox4__articles--artBox">
            <div className="artImg zx7Art"></div>
            <p className="artName">ZX7 SPEAKER</p>
            <button><Link to='/reactproject4/speakers/zx7'>SEE PRODUCT</Link></button>
          </div>
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

export default MainZx9;
