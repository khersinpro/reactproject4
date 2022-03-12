import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import earphones from "../../../images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../../images/shared/desktop/image-category-thumbnail-headphones.png";
import { CartContext } from "../../../CartContext";


const MainX992 = () => {
  const [number, setNumber] = useState(1)
  const [x99MarkTwo, setX99MarkTwo] = useState({name: "X99 MARK II", price: "2.999", number: number})
  const {testContext, setTestContext} = useContext(CartContext)
  
  const clickAdd = (e) =>{
    if(e.target.value === "-"){
      if(number <= 1){
      }else{
        setNumber(number - 1)
      }
    }else{
      setNumber(number + 1)
    }   
  }

  const addToCart = (nom, number) =>{
    setTestContext([...testContext, {number: number, name: nom , price: 599, device: "$", img : "image-xx99-mark-two-headphones.jpg"} ])
  } 




  return (
    <main className="articleContainer">
      <div className="articleLink">
        <Link to="/reactproject4/headphones">Go Back</Link>
      </div>

      <div className="articleBox1">
        <div className="articleBox1__img x99hero"></div>

        <div className="articleBox1__order">
          <p className="articleBox1__order--newProd">NEW PRODUCT</p>

          <h2 className="articleBox1__order--name">
            XX99 Mark II <br />
            Headphones
          </h2>

          <p className="articleBox1__order--text">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <h3 className="articleBox1__order--price">$ 2,999</h3>

          <div className="articleBox1__order--sendOrder">
            <div className="inputContainer">
              <button onClick={clickAdd} value="-">-</button>
              <input id="number" type="text" value={number} readOnly />
              <button onClick={clickAdd} value='+'>+</button>
            </div>
            <button className="addToCart" onClick={() => addToCart("XX99 MK II", number)}>ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="articleBox2">
        <div className="articleBox2__left">
          <p className="articleBox2__left--title">FEATURES</p>
          <p className="articleBox2__left--txt1">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. <br/><br/>The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic.
          </p>
        </div>

        <div className="articleBox2__right">
          <p className="articleBox2__right--title">in the box</p>
          <ul>
            <li>
              <span>1x</span> Headphone Unit
            </li>
            <li>
              <span>2x</span> Headphone Unit
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> 3.5mm 5m Audio Cable
            </li>
            <li>
              <span>1x</span> Travel Bag
            </li>
          </ul>
        </div>
      </div>

      <div className="articleBox3">
        <div className="articleBox3__container">
          <div className="articleBox3__container--img x99Img1"></div>
          <div className="articleBox3__container--img x99Img2"></div>
        </div>
        <div className="articleBox3__img3 x99Img3"></div>
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

export default MainX992;
