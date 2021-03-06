import React,{Fragment, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import CheckOutModal from './CheckOutModal'
import ArticleNav from "./pagesComponents/ArticleNav"
import Footer from "./pagesComponents/Footer"
import shape from '../images/cart/Shape.png'

const CheckOut = ({openBurger, burger}) => {
    const [radiobtn, setradiobtn] = useState("money")
    const [nameCtrl, setNameCtrl] = useState(true)
    const [emailCtrl, setEmailCtrl] = useState(true)
    const {testContext, confirm, confirmChecker} = useContext(CartContext)
    const [email, setemail] = useState(null)
    const [adress, setadress] = useState(null)
    const [phone, setphone] = useState(null)
    const [name, setname] = useState(null)
    const [eMoney, seteMoney] = useState(null)
    const [eMoneyPin, seteMoneyPin] = useState(null)
    let vat = 0
    let pricing  = 0
    let shipping = 50


    const openCheckTop = () => {
        if(email && adress && phone && name && eMoney && eMoneyPin ){
                window.scrollTo(0, 0);
                confirmChecker()
                setemail(null)
                setadress(null)
                setphone(null) 
                setname(null) 
                seteMoney(null)
                seteMoneyPin(null)
        }else if(email && adress && phone && name && radiobtn === "cash" ){
            window.scrollTo(0, 0);
            confirmChecker()
            setemail(null)
            setadress (null)
            setphone(null) 
            setname(null) 
            seteMoney(null)
            seteMoneyPin(null)
        }else{
            alert("Incompletes Values")
        }
        

    }

    const changeRadio = (e) => {
        setradiobtn(e.target.value)
    }
    
    if(testContext.length > 0){
        for(let i = 0 ; i < testContext.length ; i++){
            pricing += testContext[i].price * testContext[i].number
        }
        vat = (pricing * 20 /100)
    }

    const formChecker = (e) => {
        switch (e.target.id){
            case "email":
                if(e.target.value.length > 3 && e.target.value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i)){
                    setEmailCtrl(true)
                    setemail(e.target.value)
                }else if(e.target.value.length > 3){
                    setEmailCtrl(false)
                }else{
                    setEmailCtrl(true)
                }
                break
            case "name":
                if(e.target.value.length > 3 && e.target.value.match(/^[ a-zA-Z\-\']+$/)){
                    setNameCtrl(true)                   
                    setname(e.target.value)
                }else if(e.target.value.length > 3 && !e.target.value.match(/^[ a-zA-Z\-\']+$/)){
                    setNameCtrl(false)
                }else{
                    setNameCtrl(true)
                }
                break
            case "phone":
                if(e.target.value.length > 6 && e.target.value.match(/^[0-9]/)){
                    setphone(e.target.value) 
                }
                break
            case "adress":
                if(e.target.value.length > 5 ){
                    setadress(e.target.value)
                }
                break
            case "emoney":
                if(e.target.value.length > 3 && e.target.value.match(/^[0-9]/) ){
                    seteMoney(e.target.value)
                }
                break
            case "pin":
                if(e.target.value.length > 3 && e.target.value.match(/^[0-9]/)){
                    seteMoneyPin(e.target.value)
                }
                break
            default:
                break
        }
    }
  return (
    <Fragment>
        <ArticleNav openBurger={openBurger} burger={burger} />
        <main className='checkOutMain'>
            <div className='checkOutLeft'>
                <Link to="/reactproject4/" className='backAnchor' >Go Back</Link>
                <h1>CHECKOUT</h1>

                <div className='checkOutLeft__billing'>
                    <p className="containerTitle">BILLING DETAILS</p>
                    <div className='checkOutLeft__billing--first'>
                        <div className={`inputContainer ${!nameCtrl && "redFormat"}`}>
                            <p>Name</p>
                            <input type='text' id='name' onChange={formChecker}/>
                            {!nameCtrl && <p className='errorInput'>Wrong format</p>}
                        </div>
                        <div className={`inputContainer ${!emailCtrl && "redFormat"}`}>
                            <p>Email Adress</p>
                            <input type='text'  id='email' onChange={formChecker} />
                            {!emailCtrl && <p className='errorInput'>Wrong format</p>}
                        </div>
                    </div>
                    <div className='inputContainer'>
                        <p>Phone number</p>
                        <input type='text' id='phone' onChange={formChecker} />
                    </div>
                </div>

                <div className='checkOutLeft__shipping'>
                    <p className="containerTitle">SHIPPING INFO</p>
                    <div className='checkOutLeft__shipping--first'>
                        <p>Adress</p>
                        <input type="text" id='adress' onChange={formChecker} />
                    </div>
                    <div className='checkOutLeft__shipping--scd'>
                        <div className='inputContainer'>
                            <p>ZIP Code</p>
                            <input type='text'  />
                        </div>
                        <div className='inputContainer'>
                            <p>City</p>
                            <input type='text'  />
                        </div>
                    </div>
                    <div className='inputContainer'>
                        <p>Country</p>
                        <input type='text'  />
                    </div>
                </div>

                <div className='checkOutLeft__payment'>
                    <p className="containerTitle">PAYMENTS DETAILS</p>
                    <div className='checkOutLeft__payment--radio'>
                            <p>Payment Method</p>
                        <div className='radioContainer'>
                            <div className='radio'>
                                <label className={` ${radiobtn !== "cash" && "selectRadio"}`}>
                                    <div className='radioSelected'>
                                        {radiobtn !== "cash" && <div className='selected'></div>}
                                    </div>
                                    <input type="radio" className='testRadio' name='radios' value="money" checked={radiobtn === "money"} onChange={changeRadio}  />
                                    <span>e-Money</span>
                                </label>
                            </div>
                            <div className='radio'>
                                <label  className={` ${radiobtn === "cash" && "selectRadio"}`}>
                                    <div className='radioSelected '>
                                        {radiobtn === "cash" && <div className='selected'></div>}
                                    </div>
                                    <input name='radios' type="radio" value="cash" checked={radiobtn === "cash"} onChange={changeRadio} />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='checkOutLeft__payment--choice'>
                       {radiobtn === "money" ?(
                           <Fragment>
                                <div className='inputContainer'>
                                    <p>e-Money Number</p>
                                    <input type='text' id='emoney' onChange={formChecker}  />
                                </div>
                                <div className='inputContainer'>
                                    <p>e-Money PIN</p>
                                    <input type='text' id='pin' onChange={formChecker}  />
                                </div>
                           </Fragment>
                       ) 
                       :
                       (
                           <Fragment>
                               <img src={shape} alt='shape' />
                                <p className='cashDelivery'>
                                    The ???Cash on Delivery??? option enables you to pay in cash when our delivery courier 
                                    arrives at your residence. Just make sure your address is correct so that your order
                                    will not be cancelled.
                                </p>
                           </Fragment>
                       ) }
                    </div>
                </div>


            </div>
            <div className='checkOutRight'>
                <p className='summary'>SUMMARY</p>
                <div className='checkOutRight__cart'>
                    {testContext.map((article, idx) => (
                        <div key={idx} className='cartArticle'>
                            <div className='cartArticle__first'>
                                <img src={require(`../images/cart/${article.img}`) } alt={article.name} />
                                <div className='cartArticle__first--box'>
                                    <p className='cartName'>{article.name}</p>
                                    <p className='cartPrice'>{article.device}{article.price}</p>
                                </div>
                            </div>
                            <p className='cartPrice number'>x{article.number}</p>
                        </div>
                    ))}

                </div>
                <div className='checkOutRight__txt'>
                    <p className='checkOutRight__txt--first'>TOTAL</p>
                    <p className='checkOutRight__txt--scd'>$ {pricing}</p>
                </div>
                <div className='checkOutRight__txt'>
                    <p className='checkOutRight__txt--first'>SHIPPING</p>
                    <p className='checkOutRight__txt--scd'>$ {shipping}</p>
                </div>
                <div className='checkOutRight__txt'>
                    <p className='checkOutRight__txt--first'>VAT (INCLUDED)</p>
                    <p className='checkOutRight__txt--scd'>$ {vat}</p>
                </div>
                <div className='checkOutRight__txt lastTxt'>
                    <p className='checkOutRight__txt--first' >GRAND TOTAL</p>
                    <p className='checkOutRight__txt--scd grandTotal'>$ {pricing + shipping}</p>
                </div>
                <button onClick={() => openCheckTop()}>{radiobtn === "money" ? ("CONTINUE & PAY") : ("CONTINUE")}</button>
            </div>
            {confirm && <CheckOutModal />}
        </main>
        <Footer />
    </Fragment>
  )
}

export default CheckOut