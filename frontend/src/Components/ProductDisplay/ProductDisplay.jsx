import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import {ShopContext} from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisply-img-list">
              <img src={product.image} alt=""/>
              <img src={product.image} alt=""/>
              <img src={product.image} alt=""/>
              <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
             <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
      </div>
      <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="Productdisplay-right-stars">
               <img src={star_icon} alt=""/>
               <img src={star_icon} alt=""/>
               <img src={star_icon} alt=""/>
               <img src={star_dull_icon} alt=""/>
               <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
             <div className="productdisplay-right-price-old">${product.old_price}</div>
             <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
          A lightweight, usually knitted pullover shirt is commonly referred to as a sweater or pullover. 
          These garments are typically made from soft, breathable materials like cotton, wool, or synthetic 
          fibers, and they are designed to be worn over the head, without any fasteners like zippers or buttons.
          </div>
          <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
          <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
