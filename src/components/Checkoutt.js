import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard,faGift} from '@fortawesome/free-solid-svg-icons';


const Checkout=()=>{
    return(
    
     <div className="content-checkout">
         <div className="left-column">
        <div className="shipping-address-card">
            <div className="Header-address-card">
                <h1 className="Shipping">Shipping Address</h1>
            </div>
            <div className="Shipping-address">
                <div className="Current-address">
                    <button className="change-address-btn">Change</button>
                    <p>John Maker</p>
                    <br/>
                    <p>123 Plae Grond Street</p>
                    <br/>
                    <p>Vermont,California</p>
                    <br/>
                    <p>United States of America</p>
                </div>
            </div><br/></div>

            <div className="Payment-Method">
                <div className="Payment-header">
                    <h1>Payment Method</h1>
                </div>
                <div className="Payment-content">
                    <button className="change-payment-btn">Change</button>
                    <div className="Current-payment">
                        <p className="bank-card"><FontAwesomeIcon icon={faCreditCard} />Mastercard</p>
                        <p className="gift-card"><FontAwesomeIcon icon={faGift} />$53.21</p>
                        <p className="billing-addres">Billing address same as shipping address</p>
                        {/* <div className="checkbox-payment-address">
                            <label>
                             <input type="checkbox"
                             name="saveAsDefault"
                             checked={saveAsDefault}
                             onChange={this.handleChange}/>
                             <span style={{color:'#128050',
                             fontFamily:'Cabin',
                            fontSize:'12px',fontStyle:'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                            }}>Billing address same as shipping address</span>

                            </label>
                        </div> */}
                        
                </div>
                </div><br/></div>
                <div className="content-reviewed-bag">
                    <div className="review-bag-header">
                        <h1>Review your bag</h1>
                    </div>
                    <div className="bag-content">
                        <div className="item-view-bag-content">
                            
                        </div><hr/>
                    </div>
                    </div></div>

            <div className="right-column">
            <div className="total-summary-card">
              <p className="order">Order Summary</p>

              <div className="summary-row">
              <p className="items-summary">Items:</p>
              <p className="item-price-summary">$ 849.37</p>
              </div>

              <div className="summary-row">
              <p className="shipping-summary">Shipping:</p>
              <p className="shipping-price-summary">$6.99</p>
              </div>

              <div className="summary-row">
              <p className="est-gst">Estimated GST:</p>
              <p className="est-gst-price-summary">$ 760.47</p>
              </div>

              <div className="summary-row">
              <p className="gift-card-summary">Gift Card:</p>
              <p className="gift-card-price-summary">$ 0.00</p>
              </div>
              <div><hr/></div>
              
              <div className="summary-row">
              <p className="order-total">Order Total</p>
              <p className="order-total-price-summary">$ 6609.78</p>
              </div>
              <div><hr/></div>

              <button className="order-placement-btn">place your order</button>     
            <div className="back-cart-btn">
                <Link to={-1}><button className="backtocart">Back</button></Link>
                </div>
                </div></div>
    </div>
   );
}
export default Checkout;