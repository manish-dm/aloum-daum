import React,{useState} from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './productMainDetails.css'
import productImage from '../../../../assets/images/homepage/product6.png'
import instagram from '../../../../assets/icons/Instagram.svg'
import facebook from '../../../../assets/icons/Facebook.svg'
import youtube from '../../../../assets/icons/youtube.svg'
import { useLocation } from 'react-router-dom';
import { style } from '@mui/system';

const ProductMainDetails = () => {
    const location = useLocation();
     
    const [quantity, setQuantity] = useState(1);
    const [activeProductImage, setActiveProductImage] = useState(location?.state?.image);
    const [addToWishList, setTAddToWishList] = useState(false);

    const onClickHandler = (prop) =>{
        prop === '-'? setQuantity(quantity -1) : setQuantity(quantity + 1)
    }
  
    function onCLickChangeImage(prop){
        setActiveProductImage(prop)
    }
    function wishListToggleHandler(){
       if(addToWishList === false )setTAddToWishList(true)
       else setTAddToWishList(false)
    }
    return (
        
        <div className='ProductMainDetails-conatiner'>
            <div className='ProductMainDetails-left-conatiner'>
                {/* <div className='productMainDetailsPage-status'>
                    <div className='status-home-text'>Home</div>
                    <div className='ProductMainDetails-status-dash'></div>
                    <div className='status-face-text'>Face</div>
                    <div className='ProductMainDetails-status-dash'></div>
                    <div className='status-product-text'>Product</div>
                </div> */}
                <div className='product-images'>
                    <div className='main-img'>
                    <img  src={activeProductImage} alt="product image" />
                    </div>
                    <div className='product-alt-images'>
                       <div className='individual-product-alt-img' onClick={()=> onCLickChangeImage(productImage)}>
                        <img src={productImage} alt="main-product-alternative-images" />
                        </div>
                       <div className='individual-product-alt-img' onClick={()=> onCLickChangeImage(location?.state?.image)}>
                        <img src={location?.state?.image} alt="main-product-alternative-images" /></div>
                       <div className='individual-product-alt-img' onClick={()=> onCLickChangeImage(location?.state?.image)}>
                        <img src={location?.state?.image} alt="main-product-alternative-images" /></div>
                       <div className='individual-product-alt-img'onClick={()=> onCLickChangeImage(location?.state?.image)}>
                        <img src={location?.state?.image} alt="main-product-alternative-images" /></div>
                    </div>
                </div>
            </div>

            <div className='ProductMainDetails-right-conatiner'>
                <div className='ProductMainDetails-product-price'>
                    $12.00 - $20.00
                </div>
                <div className='ProductMainDetails-product-name'>
                    Shield Container
                </div>
                <div className='product-ratings-and-reviews'>
                    <div className='product-ratings'>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        4.9/5
                    </div>
                    <div className='product-reviews'>
                        10 customer Reviews
                    </div>
                </div>
                <div className='product-desc-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </div>
                <div className='product-selection-dropdown'>
                    <label>Size</label>
                    <select id="" name="" required>
                    <option value="" disabled selected hidden className='select-placeholder'>Choose an Option</option>
                        <option value="Shield Container">Shield Container</option>
                        <option value="Shield Container">Shield Container</option>
                        <option value="Shield Container">Shield Container</option>
                    </select>
                </div>
                <div className='product-quantity'>
                    <div className='quantity-text'>Quantity</div>
                    <div className='quantity-actions'>
                        <div className='inc-dec-btn'>
                        <div className='increase-and-decrease' name='increase' onClick={()=>onClickHandler("-")}>-</div>
                        <div className='show-quantity'>{quantity}</div>
                        <div className='increase-and-decrease' name='decrease' onClick={()=>onClickHandler("+")}>+</div>
                        </div>
                        <button className='addtoCart-btn' name="addtoCart">Add to Cart</button>
                    </div>
                    <div className='add-wishlist' onClick={wishListToggleHandler}>
                        {
                            !addToWishList?<AiOutlineStar size={25} />: 
                           <AiFillStar className='star' size={25} color='#FFCC00'/>
                           }
                        <div className='addToWishlist-text'>
                            Add to Wishlist
                        </div>
                    </div>
                    <div className='product-tags'>
                        <div className='tag-text'>Tags:</div>
                        <div className='tag-list'>
                            <div className='tag-1'>Moisturisers</div>
                            <div className='tag-2'>Cleansers</div>
                        </div>
                    </div>
                    <div className='category'>Category: <span>Skin Care</span></div>
                    <div className='Brand'>Brand: <span>Aloumdowm</span></div>
                    <div className='follow-us-div'>
                            <div className='follow-us'>Follows Us:- </div>
                            <img className='icons instagram-logo' src={instagram} />
                            <img className='icons facebook-logo' src={facebook} />
                            <img className='icons youtube-logo' src={youtube} />
                        </div>
                </div>
            </div>

        </div>
    )
}

export default ProductMainDetails