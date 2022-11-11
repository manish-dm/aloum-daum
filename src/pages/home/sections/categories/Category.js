import React from 'react'
import './category.css'
import categoryGridImage1 from '../../../../assets/images/homepage/categoryGridImage1.png'
import categoryGridImage2 from '../../../../assets/images/homepage/categoryGridImage2.png'
import categoryGridImage3 from '../../../../assets/images/homepage/categoryGridImage3.png'
import categoryGridImage4 from '../../../../assets/images/homepage/categoryGridImage4.png'
import categoryGridImage5 from '../../../../assets/images/homepage/categoryGridImage5.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Category = () => {
  return (
    <div className='category-main'>
      <div className='category-container'>
        <div className='item-1'>
          <div className='category-title'>
            OUR CATEGORIES
          </div>
          <div className='category-heading'>
            Shop By our Categories
          </div>
          <div className='category-desc'>
            Because You Need Time For Yourself
          </div>
        </div>
        <div className='item-2'>
          <img src={categoryGridImage5} />
          <div className='item-2-text'>FACE</div>
        </div>
        <div className='item-3'>
          <img src={categoryGridImage1} />
          <div className='item-3-text'>BODY</div>
        </div>
        <div className='item-4'>
          <img src={categoryGridImage4} />
          <div className='item-4-text'>HAIR</div>
        </div>
        <div className='item-5'>
          <img src={categoryGridImage3} />
        </div>
        <div className='item-6'>
          <div className='item-6-text'>Shop All Products</div>
          <div className='hoverable-circle'></div>
          <div className='item-6-arrow'>
            <div className="readmore-btn-dash" />
            <MdOutlineArrowForwardIos fill="black" size="2rem" />
          </div>
        </div>
        <div className='item-7'>
          <img src={categoryGridImage2} />
        </div>
      </div>
    </div>
  )
}

export default Category