import React from 'react'
import './productDescription.css'
import image from '../../../../assets/images/homepage/trendingImage4.png'
import image2 from '../../../../assets/images/homepage/product-desc-image.png'
import {MdKeyboardArrowRight} from 'react-icons/md'

const ProductDescription = () => {
    return (
        <div className='ProductDescription-main'>
            <div className="product-desc-nav">
                <div className='product-description'>
                    Product Description

                </div>
                <div className='About-Brand'>
                    About Brand
                </div>
                <div className='Reviews'>
                    Reviews
                </div>
            </div>
            <div className='description-card'>
                <div className='left-div-texts'>
                  <div className="left-div-texts-heading">
                    Shield Container
                  </div>
                  <div className='product-charactersitic-listings'>
                    <div className='prouct-characteristics'>
                        <MdKeyboardArrowRight size ={25}/>
                        <div className='product-cagarcteristics-heading'>
                        Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className='prouct-characteristics'>
                        <MdKeyboardArrowRight size ={25}/>
                        <div className='product-cagarcteristics-heading'>
                        Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className='prouct-characteristics'>
                        <MdKeyboardArrowRight size ={25}/>
                        <div className='product-cagarcteristics-heading'>
                        Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className='prouct-characteristics'>
                        <MdKeyboardArrowRight size ={25}/>
                        <div className='product-cagarcteristics-heading'>
                        Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                    <div className='prouct-characteristics'>
                        <MdKeyboardArrowRight size ={25}/>
                        <div className='product-cagarcteristics-heading'>
                        Lorem ipsum dolor sit amet,
                        </div>
                    </div>
                  </div>
                  <div className='left-div-extraInfo'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor Lorem ipsum Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut.<br/><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor Lorem ipsum Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut.
                  </div>
                </div>
                <div className='right-div-images'>
                    <div className='product-desc-image'>
                        <img src={image2} alt="product description images" />
                    </div>
                    <div className='product-desc-image'>
                        <img src={image} alt="product description images" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDescription