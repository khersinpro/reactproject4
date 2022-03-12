import React from 'react'

const CartModal = () => {
  return (
    <div className='cartModal'>
        <div className='cartModal__modal'>
            <div>
                <p>CART(3)</p>
                <button>Remove all</button>
            </div>
            {}
            <div>
                <p></p>
                <p></p>
            </div>
            <button>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartModal