import React from 'react'
import { Link } from 'react-router-dom'
import earphones from '../../images/shared/desktop/image-category-thumbnail-earphones.png'
import speakers from '../../images/shared/desktop/image-category-thumbnail-speakers.png'
import headphones from '../../images/shared/desktop/image-category-thumbnail-headphones.png'

const HeadphonesMain = () => {
  return (
    <main className='headphonesMain'>
      <div className='headBox1'>
        <div className='headBox1__left bg1'></div>
        <div className='headBox1__right'>
          <div className='headBox1__right--text'>
            <p className='firstTxt'>NEW PRODUCT</p>
            <h2>XX99 Mark II Headphones</h2>
            <p className='secondTxt'>The new XX99 Mark II headphones is the pinnacle of pristine audio. 
              It redefines your premium headphone experience by reproducing the balanced 
              depth and precision of studio-quality sound.
            </p>
            <button><Link to="/reactproject4/headphones/x99m2">SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>

      <div className='headBox2 flex2'>
        <div className='headBox2__left bg2'></div>
        <div className='headBox2__right'>
          <div className='headBox2__right--text'>
            <h2>XX99 Mark I Headphones</h2>
            <p className='secondTxt'>As the gold standard for headphones, the classic XX99 Mark I offers 
              detailed and accurate audio reproduction for audiophiles, mixing engineers,
               and music aficionados alike in studios and on the go.
            </p>
            <button><Link to="/reactproject4/headphones/x99m1">SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>

      <div className='headBox2 flex3'>
        <div className='headBox2__left bg3'></div>
        <div className='headBox2__right'>
          <div className='headBox2__right--text'>       
            <h2>XX59 Headphones</h2>
            <p className='secondTxt'>Enjoy your audio almost anywhere and customize it 
              to your specific tastes with the XX59 headphones. The stylish yet durable 
              versatile wireless headset is a brilliant companion at home or on the move.
            </p>
            <button><Link to="/reactproject4/headphones/xx59">SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>
      {/* SCSS ARE IN HOMEMAIN.SCSS */}
      <div className='mainNav'>
                 <div className='mainNav__box'>
                    <img className='headphonesImg' src={headphones} alt="headphones" />
                    <Link to="/reactproject4/headphones">
                        HEADPHONES
                        <div className='mainNav__box--anchorBox'>
                            <span >SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
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
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
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
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>
        </div>
        {/* SCSS ARE IN HOMEMAIN.SCSS */}
        
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

export default HeadphonesMain