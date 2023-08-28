import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ValidateAddress } from './Validation'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/features/usersSlice";


const Address = () => {
    const users = useSelector(state => state.users)
    console.log(users);
    const [values, setValues] = useState({
        name: '',
        streetname: '',
        city: '',
        province: '',
        country: ''
    })

    const dispatch = useDispatch()

    const [errors, setErrors] = useState({})
    
    
        const handleSubmit = (event) => {
            event.preventDefault()
            dispatch(addUser(values))
        } 
        const handleValidation = (event) => {
            event.preventDefault()
            setErrors(ValidateAddress(values))
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
        <div className="address-page">
            <div className="form-container">
            <form onSubmit={submit}>
                <label>
                    <span className="input-label">Shipping Name</span>
                    <input type="text" name="name" placeholder="Your full name" onChange={handleInput}/>
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p> }
                </label>
                <label>
                    <span className="input-label">Street Name</span>
                    <input type="text" id="sname" name="streetname" placeholder="Your street address" onChange={handleInput} />
                    {errors.streetname && <p style={{color: 'red'}}>{errors.streetname}</p> }
                </label>
                <label>
                    <span className="input-label">City</span>
                    <input type="text" name="city" placeholder="Your city or hometown" onChange={handleInput}/>
                    {errors.city && <p style={{color: 'red'}}>{errors.city}</p> }
                </label>
                <label>
                    <span className="input-label">State  / Province</span>
                    <input type="text" name="province" placeholder="Your state gr province"  onChange={handleInput}/>
                    {errors.province && <p style={{color: 'red'}}>{errors.province}</p> }
                </label>
                <label>
                    <span className="input-label">Country</span>
                    <input type="text" name="country" placeholder="Your country" onChange={handleInput} />
                    {errors.country && <p style={{color: 'red'}}>{errors.country}</p> }
                </label>
                <p className="para"><input value="test" type="checkbox" />Save this as your default address</p>
                <input type="submit" value="Add Address" className="add-address-btn"/>
                <p><span style={{float: 'left'}}><Link to={-1}><button>Back</button></Link></span>
                <span className="secure-connection">
                    <FontAwesomeIcon icon={faLock} style={{marginRight: '5px'}}/>Secure Connection
                </span></p>
            </form>
        </div>
        </div>
    )
}

Address.propTypes = {
    props: PropTypes.any,
    trigger: PropTypes.bool,
    children: PropTypes.array,
    setTrigger: PropTypes.func,
    text2: PropTypes.string,
    text3: PropTypes.string,
  };

export default Address