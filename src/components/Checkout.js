import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faGift, faStar, faStarHalf, faMinus, faPlus, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { increaseItemQuantity, decreaseItemQuantity } from '../redux/features/cartSlice';
const Checkout = () => {
    
    const { cart, totalPrice } = useSelector(state => state.allCart)
    const users = useSelector(state => state.users.users)
    const orders = useSelector(state => state.orders.orders)
    const users_data = users[users.length - 1]
    const orders_data = orders[orders.length - 1]
    const dispatch = useDispatch()
    
    return (
        <div className="checkoutt_page">
            <div className="row">
                <div className="column111">
                    <div className="small-container">
                                    <div>
                            <h1>Shipping Address</h1>
                            <div>{users_data.name}</div>
                            <div>{users_data.streetname}</div>
                            <div>{users_data.city}</div>
                            <div>{users_data.country}</div>
                        </div>
                        
                        <div>
                            <Link to='/addres'><button>Change</button></Link>
                        </div>
                    </div>
                    <div className="small-container">
                        <div>
                            <h1>Payment Method</h1>
                            <div style={{marginBottom: '2%'}}><strong><FontAwesomeIcon icon={faCreditCard} style={{marginRight: '5px'}}/>MasterCard</strong> ending in {(orders_data.cardnumber).slice(-4)}</div>
                            <div style={{marginBottom: '2%'}}><strong><FontAwesomeIcon icon={faGift} style={{marginRight: '8px'}}/>$ 53.21</strong> gift card balance</div>
                            <div style={{marginBottom: '2%'}}><input value="test" type="checkbox" />Save this as your default address</div>
                        </div>
                        <div>
                            <Link to='/payment'><button>Change</button></Link>
                        </div>
                    </div>
                    <div className="small-container">
                        <div>
                            <h1>Review your bag</h1>
                            {cart.map((product, index) => {
                            const itemTotal = (product.price * product.quantity).toFixed(2)
                            return (
                                <div key={index} className="item-in-bag1">
                                    <div className="column15">
                                        <div className='card15'>
                                        <img src={product.image} alt={product.name} />
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
                                    </div>
                                    <div className="price-rating">
                                    <div className="price">
                                        <div className="text-wrapper-2">$ {itemTotal}</div>
                                    </div>
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
                            )})}
                    
                                
                    </div>
                        
                    </div>
                </div>
                <div className="column112" style={{padding: '16px 24px'}}>
                <div>
                <div className="small-container">
                            <h4>Order Summary</h4>
                            <div><div style={{float: 'left'}}>Items:</div><div style={{float: 'right'}}>$ {totalPrice}</div></div>
                            <div><div style={{float: 'left'}}>Shipping:</div><div style={{float: 'right'}}>$ {(totalPrice*(0.002)).toFixed(2)}</div></div>
                            <div><div style={{float: 'left'}}>Estmated GST:</div><div style={{float: 'right'}}>$ {(totalPrice*(0.152)).toFixed(2)}</div></div>
                            <div><div style={{float: 'left'}}>Gift Card:</div><div style={{float: 'right'}}>$ 0.00</div></div>
                            <hr />
                            <div><div style={{float: 'left', color: '#E5252c', fontWeight: 500}}>Order Total:</div><div style={{float: 'right', color: '#E5252c', fontWeight: 500}}>$ {(totalPrice + (totalPrice*(0.002)) + (totalPrice*(0.152))).toFixed(2)}</div></div>
                            <hr/>
                            <button>Place your order</button>
                    </div>
                </div>
                <div style={{float: 'right', marginTop: '10%'}}>
                    <Link to={-1}><button><FontAwesomeIcon icon={faChevronLeft}/>Back</button></Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout