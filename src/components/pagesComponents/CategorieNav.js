import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/shared/desktop/logo.svg'
import cart from '../../images/shared/desktop/icon-cart.svg'
import burgerMenu from '../../images/shared/tablet/icon-hamburger.svg'
import earphones from '../../images/shared/desktop/image-category-thumbnail-earphones.png'
import speakers from '../../images/shared/desktop/image-category-thumbnail-speakers.png'
import headphones from '../../images/shared/desktop/image-category-thumbnail-headphones.png'

const CategorieNav = ({openBurger, burger, name}) => {
  return (
    <header className='catNav'>
        <nav>
            <div className='logoContainer'>
                <img className='burger' onClick={openBurger} src={burgerMenu} alt='burger' /> 
                <Link to='/reactproject4/home'><img className='logo' src={logo} alt="logo" /></Link>
            </div>
            <div className={`linkContainer ${!burger && "openOrClose"}`}>
                <div className='navContainer home'>
                    <Link to="/reactproject4/home">HOME</Link>
                </div>

                <div className='navContainer'>
                    <img className='headphones absoImg' src={headphones} alt="headphones" />
                    <Link to="/reactproject4/headphones" onClick={openBurger}>
                        HEADPHONES
                        <div className='shop'>
                            <span >SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>  
                    
                <div className='navContainer'>
                    <img  className='wat absoImg' src={speakers} alt="speakers" />
                    <Link to="/reactproject4/speakers" onClick={openBurger}>
                        SPEAKERS
                        <div className='shop'>
                            <span>SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>

                <div className='navContainer'>
                    <img className='earphones absoImg' src={earphones} alt="earphones" />
                    <Link to="/reactproject4/earphones" onClick={openBurger}>
                        EARPHONES
                        <div className='shop'>
                            <span>SHOP</span>
                            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
                            </svg>       
                        </div>
                    </Link>
                </div>
            </div>
            <img className='cart' src={cart} alt="cart" />
        </nav>
        <p className='catNav__title'>{name}</p>
    </header>
  )
}

export default CategorieNav