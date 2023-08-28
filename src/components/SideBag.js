import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from '../redux/features/cartSlice';
import { Link } from 'react-router-dom';
//import './Bag.css'
import { useEffect } from 'react';

const SideBag = () => {
    const { cart, totalPrice, totalQuantity } = useSelector(state => state.allCart)
    console.log(totalQuantity);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    return (
            <div className="third-content">
                <div className="label1">
                    <div className="text-wrapper1">Bag</div>
                </div>
                <div className="small-items">

                {cart.map(item => {
                    return (
                        <div key={item.id} className="bag-item">
                            <img src={item.image} alt="" className="small-item"/>
                        </div>
                    )
                })}

                </div>
                <div className="label4">
                    <div className="text-wrapper4">Bag Total: $ {totalPrice}</div>
                </div>
                <div className="view-bag">
                    <Link to='/checkout' style={{textDecoration: 'none'}}>
                        <button>
                            <FontAwesomeIcon style={{marginRight: '5px'}} icon={faShoppingBag}/>
                            <span>Checkout</span>
                        </button>
                    </Link>
                </div>
            </div>
                        
    )}

export default SideBag