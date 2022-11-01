import React from 'react'
import './category.css'
import categoryGridImage1 from '../../../../assets/images/homepage/categoryGridImage1.png'
import categoryGridImage2 from '../../../../assets/images/homepage/categoryGridImage2.png'
import categoryGridImage3 from '../../../../assets/images/homepage/categoryGridImage3.png'
import categoryGridImage4 from '../../../../assets/images/homepage/categoryGridImage4.png'
import categoryGridImage5 from '../../../../assets/images/homepage/categoryGridImage5.png'

const Category = () => {
  return (
    <div className='category-main'>
      <div className='category-container'>
         <div className='item-1'>
             <div className='category-title'>
              OUR CATEGORIES
              </div>
             <div className ='category-heading'>
              Shop By our Categories
              </div>
             <div className='category-desc'>
              Because You Nedd Time For Yourself
             </div>
         </div>
         <div className='item-2'>
         <img src={categoryGridImage5} />
           </div>
           <div className='item-3'>
            <img src={categoryGridImage1} />
           </div>
           <div className='item-4'>
           <img src={categoryGridImage4} />
           </div>
           <div className='item-5'>
           <img src={categoryGridImage3} />
           </div>
           <div className='item-6'>
           item-6
           </div>
           <div className='item-7'>
           <img src={categoryGridImage2} />
           </div>
      </div>
    </div>
  )
}

export default Category