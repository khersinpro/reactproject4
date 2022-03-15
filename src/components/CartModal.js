import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const CartModal = () => {
  const { testContext, setTestContext, cart , openCart } = useContext(CartContext);

  let priceTest = 0

  for(let i= 0; i < testContext.length ; i++){
      priceTest += testContext[i].price * testContext[i].number
  }

  function changeNumber(index, value){
    let contextValue = testContext.map((element, idx) => (
       idx === index ? {...element, number: value} : element
    ) )
    if(value > 0){
      setTestContext(contextValue)
      console.log(contextValue, "+1");
    }else{
      let deleteItem = contextValue.filter((item) => item.number !== 0)
      if(deleteItem.length === 0 ){
        localStorage.removeItem("cart")
        setTestContext(deleteItem)
      }else{
        setTestContext(deleteItem)
      }
      console.log(deleteItem.length, '-1');
    }
  }

  function deleteCart() {
    localStorage.removeItem("cart")
    setTestContext([])
  }
  return (
    <div
      className="cartModal"
      style={{ display: `${cart ? "block" : "none"}` }}
    >
      <div className="bgModal" onClick={openCart}></div>
      <div className="cartModal__modal">
        <div className="cartModal__modal--cartLength">
          <p>CART({testContext.length})</p>
          <button onClick={deleteCart}>Remove all</button>
        </div>

        <div className="cartModal__modal--cart">
          {testContext.map((article, idx) => (
            <div className="artContainer" key={idx}>
              <div className="artContainer__left">
                <img
                  src={require(`../images/cart/${article.img}`)}
                  alt={article.name}
                />
                <div className="artContainer__left--txt">
                  <p className="name">{article.name}</p>
                  <p className="price">
                    {article.device} {article.price}
                  </p>
                </div>
              </div>
              <div className="inputContainer">
                <button
                  value="-"
                  onClick={() => changeNumber(idx, article.number - 1)}
                >
                  -
                </button>
                <input
                  id="number"
                  type="text"
                  value={article.number}
                  readOnly
                />
                <button
                  value="+"
                  onClick={() => changeNumber(idx, article.number + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cartModal__modal--cartPrice">
          <p className="first">TOTAL</p>
          <p className="price">$ {priceTest}</p>
        </div>

        <button className="cartModal__modal--checkOut">
          <Link to="/reactproject4/checkout">CHECKOUT</Link>
        </button>
      </div>
    </div>
  );
};

export default CartModal;
