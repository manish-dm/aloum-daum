import React from 'react'
import product4 from "../../../../assets/images/homepage/product4.png"
import product5 from "../../../../assets/images/homepage/product5.png"
import product6 from "../../../../assets/images/homepage/product6.png"
import SingleAddonCard from './SingleAddonCard'
import './addOnProducts.css'

const AddOnProducts = () => {
  return (
    <>
      <div className='AddOnProducts-main'>
       <div className='AddOnProducts-wrapper'>
       <div className='single-addon-product'>
          <SingleAddonCard className='single-addon-product' imageUrl={product4} />
        </div>
        <div className='plus-sign'>+</div>
        <div className='single-addon-product'>
          <SingleAddonCard className='single-addon-product' imageUrl={product5} />
        </div>
        <div className='plus-sign'>+</div>
        <div className='single-addon-product'>
          <SingleAddonCard className='single-addon-product' imageUrl={product6} />
        </div>
        <div className='AddOnProducts-total-price'>
          <div className='AddOnProducts-price'>
            $57.00
          </div>
          <div className='AddOnProducts-total-price-text'>
            Price for all:
          </div>
          <button>Add to Cart</button>
        </div>
       </div>
       <div className='AddOnProducts-checklist'>
       <div className='item'>
          <input type="checkbox" name="item" />
          <label name="item">This Item:</label>
        </div>
        <div className='item-2'>
          <input type="checkbox" name="item-2" />
          <label name="item-2">Cool Cosmetics:</label>
        </div>
        <div className='item-3'>
          <input type="checkbox" name="item-3" />
          <label name="item-3">Supple Symmetry:</label>
        </div>
      </div>

      </div>

      
    </>
  )
}

export default AddOnProducts