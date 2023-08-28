import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { ValidatePayment } from "./Validation"
import { useDispatch, useSelector } from "react-redux"
import { addPayment } from "../redux/features/ordersSlice"

const Payment = () => {
    const orders = useSelector(state => state.orders)
    console.log(orders);

    const [values, setValues] = useState({
        name: '',
        cardnumber: '',
        date: '',
        cvc: ''
    })

    const dispatch = useDispatch()

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addPayment(values))
    } 
    const handleValidation = (event) => {
        event.preventDefault()
        setErrors(ValidatePayment(values))
    } 
    const submit = (event) => {
        handleSubmit(event)
        handleValidation(event)
    }

    const handleInput = (event) => {
        const newObj = {...values, [event.target.name]: event.target.value}
        setValues(newObj)
    }

    return (
        <div className="-page">
            <div className="address-page">
            <div className="small-container">
                <h1>SELECT A CARD</h1>
                <p><FontAwesomeIcon icon={faCreditCard} style={{marginRight: '5px'}}/>MasterCard ending in 4242</p> <br /><br /><br />
                <p><FontAwesomeIcon icon={faCreditCard} style={{marginRight: '5px'}}/>VISA Debit ending in 2716</p>
            </div>
            <div className="form-container">
                
            <form onSubmit={submit}>
                <h1>ADD A NEW CARD</h1>
                <label>
                    <span className="input-label">Cardholder Name</span>
                    <input type="text" name="name" placeholder="eg. Namadzavho" onChange={handleInput}/>
                    {errors.name && <p style={{color: '#E5252C'}}>{errors.name}</p>}
                </label>
                <label>
                    <span className="input-label">Card Number</span>
                    <input type="tel" inputMode="numeric" name="cardnumber" placeholder="eg. 1234-5678-9101" onChange={handleInput} />
                    {errors.cardnumber && <p style={{color: '#E5252C'}}>{errors.cardnumber}</p>}
                </label>
                <label>
                    <span className="input-label">Expiry Date</span> <br />
                    <input type="date" name="date" onChange={handleInput}/>
                    {errors.date && <p style={{color: '#E5252C'}}>{errors.date}</p>}
                </label>
                <label>
                    <span className="input-label">CVC</span>
                    <input type="tel" inputMode="numeric" name="cvc" placeholder="eg. 123" onChange={handleInput}/>
                    {errors.cvc && <p style={{color: '#E5252C'}}>{errors.cvc}</p>}
                </label>
                <p className="para"><input value="test" type="checkbox" />Save this as your default address</p>
                <input type="submit" value="Add Payment Method" className="add-address-btn"/>
                <p><span style={{float: 'left'}}><Link to={-1}><button>Back</button></Link></span>
                <span className="secure-connection">
                    <FontAwesomeIcon icon={faLock} style={{marginRight: '5px'}}/>Secure Connection
                </span></p>
            </form>
        </div>
        </div>
            
        </div>
    )
}

export default Payment