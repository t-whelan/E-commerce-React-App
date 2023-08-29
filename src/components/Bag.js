import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
//import { getItemTotal } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import "./Bag.css"
import SideBag from './SideBag';
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../redux/features/cartSlice';
//import { increment } from '../redux/cartSlice';
//import { decrement } from '../redux/cartSlice';
//import { update } from '../redux/cartSlice';

const Bag = () => {
    
    const cart = useSelector(state => state.allCart.cart)
    const dispatch = useDispatch()
    //useEffect(() => { dispatch(getItemTotal())}, [cart])
    console.log(cart);
    return (
        <div className="item-bag-body">
            <div className="second-content">
                <div className="label">
                    <h1 style={{marginLeft: '50px'}} className="text-wrappe">Check your Bag Items</h1>
                        {cart.map((product, index) => {
                            const itemTotal = (product.price * product.quantity).toFixed(2)
                            return (
                    <div key={index} className="item-in-bag">
                        
                        <div className="column15">
                            <div className='card15'>
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>
                        <div className="content-area">
                            <div className="header">
                                <div className="div-wrapper">
                                    <div className="item-name">{product.name}</div>
                                </div>
                                <div className="div-wrapper">
                                    <div className="item-type">{product.make}</div>
                                </div>
                            </div>
                            <div className="small-description">
                                <p className="text-wrappe">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    <FontAwesomeIcon className="star" style={{ color: '#12805D'}} icon={faStar} />
                                    <FontAwesomeIcon className="star" style={{ color: '#12805D'}} icon={faStar} />
                                    <FontAwesomeIcon className="star" style={{ color: '#12805D'}} icon={faStar} />
                                    <FontAwesomeIcon className="star" style={{ color: '#12805D'}} icon={faStar} />
                                    <FontAwesomeIcon style={{ color: '#12805D'}} icon={faStarHalf} />
                                </div>
                                <div className="div" style={{ color: '#12805D'}}>4.5 / 5</div>
                            </div>
                            <div className="price-rating">
                                <div className="price">
                                    <div className="text-wrapper-2">$ {itemTotal}</div>
                                </div>
                                <div><FontAwesomeIcon className="star" style={{ color: '#E5252c', cursor: 'pointer'}} icon={faTrash} onClick={() => dispatch(removeItem(product))} /></div>
                                    <div className="quantity">
                                        <div className="price-2">
                                            <button className="button-instance" style={{color: "#E5252C", icon: "start", size: "small", style: "icon", cursor: 'pointer', border: 'none', background: '#FFF'}} onClick={() => dispatch(decreaseItemQuantity(product))}>
                                                <FontAwesomeIcon className="icon-instance-node icon-2" icon={faMinus}/>
                                            </button>
                                            <div className="element">{product.quantity}</div>
                                                <button className="button-instance" style={{color: "#02D693", icon: "start", size: "small", style: "icon", cursor: 'pointer', border: 'none', background: '#FFF'}} onClick={() => dispatch(increaseItemQuantity(product))}>
                                                    <FontAwesomeIcon className="icon-instance-node icon-2" icon={faPlus} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        })}
                    </div>    
                </div>
                <SideBag />
            </div>
    )
    
}

export default Bag
