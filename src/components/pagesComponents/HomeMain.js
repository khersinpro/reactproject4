import React from 'react'
import { Link } from 'react-router-dom'
import earphones from '../../images/shared/desktop/image-category-thumbnail-earphones.png'
import speakers from '../../images/shared/desktop/image-category-thumbnail-speakers.png'
import headphones from '../../images/shared/desktop/image-category-thumbnail-headphones.png'
import speakerMain from '../../images/home/desktop/image-speaker-zx9.png'

const HomeMain = () => {
  return (
    <main>
        <div className='mainNav'>
                 <div className='mainNav__box'>
                    <img className='headphonesImg' src={headphones} alt="headphones" />
                    <Link to="/reactproject4/headphones">
                        HEADPHONES
                        <div className='mainNav__box--anchorBox'>
                            <span >SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>  
                    
                <div className='mainNav__box'>
                    <img className='speakersImg' src={speakers} alt="speakers" />
                    <Link to="/reactproject4/speakers">
                        SPEAKERS
                        <div className='mainNav__box--anchorBox'>
                            <span>SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>

                <div className='mainNav__box'>
                    <img className='earphonesImg' src={earphones} alt="earphones" />
                    <Link to="/reactproject4/earphones">
                        EARPHONES
                        <div className='mainNav__box--anchorBox'>
                            <span>SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>
        </div>
        <div className='firstBox'>
            <div className='firstBox__left'>
                <img src={speakerMain}  alt="speaker"/>
            </div>
            <div className='firstBox__right'>
                <div className='firstBox__right--text'>
                    <h2>ZX9 SPEAKER</h2>
                    <p>
                        Upgrade to premium speakers that are phenomenally built to 
                        deliver truly remarkable sound.
                    </p>
                    <button><Link to='/reactproject4/speakers/zx9'>SEE PRODUCT</Link></button>
                </div>
            </div>
        </div>
        <div className='secondBox'>
            <div className='secondBox__text'>
                <h2>ZX7 SPEAKER</h2>
                <button><Link to='/reactproject4/speakers/zx7'>SEE PRODUCT</Link></button>
            </div>
        </div>
        <div className='thirdBox'>
            <div className='thirdBox__left'>
            </div>
            <div className='thirdBox__right'>
                <div className='thirdBox__right--box'>
                    <h2>YX1 EARPHONE</h2>
                    <button><Link to='/reactproject4/earphones/yx1'>SEE PRODUCT</Link></button>
                </div>
            </div>
        </div>
        <div className='fourthBox'>
            <div className='fourthBox__left'>
                <div className='fourthBox__left--text'>
                    <h2>Bringing you the <span> best </span>audio gear</h2>
                    <p>Located at the heart of New York City,
                         Audiophile is the premier store for high 
                         end headphones, earphones, speakers, and 
                         audio accessories. We have a large showroom 
                         and luxury demonstration rooms available for you 
                         to browse and experience a wide range of our products.
                          Stop by our store to meet some of the fantastic people 
                          who make Audiophile the best place to buy your
                         portable audio equipment.
                    </p>
                </div>
            </div>
        
            <div className='fourthBox__right'>

            </div>
        </div>
    </main>
  )
}

export default HomeMain