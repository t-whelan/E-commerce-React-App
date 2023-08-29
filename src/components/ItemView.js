import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalf,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import SideBagOne from './SideBagOne';


const ItemView = () => {
  //const { id } = useParams(); // Get the selected product ID from URL parameters
  //const product = products.find((product) => product.id === parseInt(id));
  const items = useSelector(state => state.allCart.items)
  const param = useParams()
    const product = items.find((product) => product.id == param.id)
    const { name, image, make, price, description, specifications} = product

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
      <div>
        <div className="content-area1">
           <button className='back-home'>
             <Link to={`/`}className='homefromitemview'>Back</Link></button>
          <div className="content-frame">
         {/* top half */}
          <div className="top-area">
            {/* image area  */}
            <div className="image-area">
            <div className="main-img">
              <img src={image} className="product-img" alt={name}/>
            </div>
            </div>
            {/* Text area */}
            <div className="text-area">
                {/* header name and make */}
                <div className="header">
                   <h1 className="product-title">{name}</h1>   
                   <h5 className='make'>{make}</h5>
                </div>
                {/* Star rating  */}
                <div className="star-rating">
                  <div className='stars-itemview'>
                    <FontAwesomeIcon className='stars' style={{color: '#128050'}} icon={faStar} />
                     <FontAwesomeIcon className='stars' style={{color: '#128050'}} icon={faStar} />
                      <FontAwesomeIcon className='stars' style={{color: '#128050'}} icon={faStar} /> 
                      <FontAwesomeIcon className='stars' style={{color: '#128050'}} icon={faStar} />
                      <FontAwesomeIcon className='stars' style={{color: '#128050'}} icon={faStarHalf} />
                  </div>
                  </div>
                  <div className='number-rating'style={{color: '#128050'}}>4.5/5</div> 
                
                {/* Item price  */}
                <div className='pricing'>
                  <p className="price">$ {price}</p>
                </div>
                {/* short description  */}
                <div className="short-description">
                  <p className="product-description">{description}</p>
                </div>
                {/* add to cart button  */}
                <div>
                  <button className="add-to-cart-btn">
                   <FontAwesomeIcon icon={faBagShopping} size="2xl" />
                    </button>
                  </div>
                </div>
                </div>
                {/* Top half end  */}
                
                {/* bottom half specifications */}
                <div className="bottom-half">
                  <hr/>
                  <h5>Specifications:</h5>
                    <p className='specs'>{specifications}</p>
                </div>
                {/* bottom half specifications end */}
          </div>
          </div>
          <SideBagOne />
        </div>
    );
}
export default ItemView;