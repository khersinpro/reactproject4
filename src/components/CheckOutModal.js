import React, {useContext, Fragment, useEffect} from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { CartContext } from '../CartContext'

const CheckOutModal = () => {
    const {testContext, setTestContext, confirmChecker} = useContext(CartContext)
    let naviage = useNavigate()

    const reset = () => {
        confirmChecker()
        setTestContext([])
        localStorage.removeItem("cart")
        naviage("/reactproject4/")
    }
  
    return (
        <div className='checkOutModal' >
            <div className='redirectModal' onClick={() => reset()}></div>
            <div className='checkOutModal__modal' >
                <div className='checkOutModal__modal--check'><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height='40px'  fill='white' viewBox="0 0 16 16"><path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z"/></svg></div>
                <p className='checkOutModal__modal--txt1'>THANK YOU FOR YOUR ORDER</p>
                <p className='checkOutModal__modal--txt2'>You will receive an email confirmation shortly.</p>
                <div className='checkOutModal__modal--container'>
                    <div className='left'>

                        <div className='leftContainer'>
                            <div className='top'>
                                {testContext.length > 0 && 
                                <Fragment>
                                    <div className='top__left'>
                                        <img src={require(`../images/cart/${testContext[0].img}`)} alt={testContext[0].name} />
                                        <div>
                                            <p className='nameCheck'>{testContext[0].name}</p>
                                            <p className='priceCheck'>$ {testContext[0].price}</p>
                                        </div>
                                    </div>
                                    <div className='top__right'>
                                        <p className='numberCheck'>x{testContext[0].number}</p>
                                    </div>
                                </Fragment>
                                }
                            </div>
                            {testContext.length > 1 &&
                                <div className='bottom'>
                                    <p>and {testContext.length - 1} other item(s)</p>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='right'>
                        <p className='right__total'>GRAND TOTAL</p>
                        {
                            testContext.length > 0 &&
                            <p className='right__device'>{testContext[0].device}12313</p>
                        }
                    </div>
                </div>

                <button onClick={() => reset()}>BACK TO HOME</button>
            </div>
        </div>
    )
}

export default CheckOutModal