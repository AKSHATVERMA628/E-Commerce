import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling 
        of products or services over the internet. These websites enable businesses and individuals 
        to showcase their offerings, process transactions, and manage orders efficiently.</p>
        <p>
        E-commerce websites typically display products in an organized manner,
         allowing customers to browse, compare, and purchase items easily. 
         These products are presented with detailed information to help users make informed decisions.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
