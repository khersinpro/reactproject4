import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";
import { CartContext } from "../../../CartContext";

const MainZx7 = () => {
  const [number, setNumber] = useState(1)
  const {addToCart} = useContext(CartContext)
  const [zx7, setZx7] = useState({name: "zx7" , price: 3500, device: "$", img: "image-zx7-speaker.jpg" })
  const {name, price, device, img} = zx7

  const clickAdd = (e) =>{
    if(e.target.value === "-"){
     if(number <= 1){
     }else{
       setNumber(number - 1)
     }
    }else(
      setNumber(number + 1)
    )
  }

  return (
    <main className="articleContainer">
      <div className="articleLink">
        <Link to="/reactproject4/speakers">Go Back</Link>
      </div>

      <div className="articleBox1">
        <div className="articleBox1__img zx7hero"></div>

        <div className="articleBox1__order">
          <h2 className="articleBox1__order--name">
            ZX7
            <br />
            SPEAKER
          </h2>

          <p className="articleBox1__order--text">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
          </p>

          <h3 className="articleBox1__order--price">$ 3,500</h3>

          <div className="articleBox1__order--sendOrder">
            <div className="inputContainer">
              <button value="-" onClick={clickAdd}>-</button>
              <input id="number" type="text" value={number} readOnly />
              <button value="+" onClick={clickAdd}>+</button>
            </div>
            <button className="addToCart" onClick={() => addToCart(name, number, price, device, img)}>ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="articleBox2">
        <div className="articleBox2__left">
          <p className="articleBox2__left--title">FEATURES</p>
          <p className="articleBox2__left--txt1">
          Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. <br />
            <br />
            The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
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
              <span>1x</span> 3.5mm 7.5m Audio Cable
            </li>
            <li>
              <span>1x</span> 7.5m Optical Cable
            </li>
          </ul>
        </div>
      </div>

      <div className="articleBox3">
        <div className="articleBox3__container">
          <div className="articleBox3__container--img zx7Img1"></div>
          <div className="articleBox3__container--img zx7Img2"></div>
        </div>
        <div className="articleBox3__img3 zx7Img3"></div>
      </div>

      <div className="articleBox4">
        <p className="articleBox4__title">YOU MAY ALSO LIKE</p>

        <div className="articleBox4__articles">
          <div className="articleBox4__articles--artBox">
            <div className="artImg zx9SpkArt"></div>
            <p className="artName">ZX9 SPEAKER</p>
            <button><Link to='/reactproject4/speakers/zx9'>SEE PRODUCT</Link></button>
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

export default MainZx7;
