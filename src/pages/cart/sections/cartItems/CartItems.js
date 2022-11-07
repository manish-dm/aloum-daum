import React, {useState} from "react";
import "./CartItems.css";
import cartItemImage1 from "../../../../assets/images/homepage/product1.png";
import cartItemImage2 from "../../../../assets/images/homepage/product6.png";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import CheckoutModal from "../../../../components/checkout/CheckoutModal";

const CartItems = () => {
const [openDialog, setOpenDialog] = useState(false);

  const staticData = [
    {
      id: "erds",
      image: cartItemImage1,
      productName: "Pure Vitamin C Serum",
      price: "45.05",
      qty: 1,
    },
    {
      id: "fjkd",
      image: cartItemImage2,
      productName: "Pure Vitamin C Serum",
      price: "45.05",
      qty: 5,
    },
  ];
  return (
    <div className="cartItems-wrapper">
      <div className="cartItems-all-content">
        <div className="cartItems-heading">YOUR CART ITEMS</div>
        <div className="cartItems-table-heading-row">
          <span>PRODUCT NAME</span>
          <div className="cartItems-grid-view">
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>
        </div>

        {staticData.map((data) => {
          return (
            <div
              className="cartItems-row-preview cartItems-top-divider"
              key={data.id}
            >
              <div className="cartItems-image-and-name-container">
                <div className="cartItems-image-container">
                  <img src={data.image} alt="cart item" />
                </div>
                <div className="cartItems-name-container">
                  {data.productName}
                </div>
              </div>
              <div className="cartItems-spec-list-container cartItems-grid-view">
                <div>${data.price}</div>
                <div className="cartItems-quantity-div">
                  <span className="cartItems-quantity-div-buttons">
                    <HiPlusSm />
                  </span>
                  <span className="cartItems-quantity-div-number">
                    {data.qty}
                  </span>
                  <span className="cartItems-quantity-div-buttons">
                    <HiMinusSm />
                  </span>
                </div>
                <div>${data.price * data.qty}</div>
              </div>
            </div>
          );
        })}

        <div className="clear-and-continue-button-container cartItems-top-divider">
          <div className="clear-and-continue-button-style">
            CLEAR SHOPPING CART
          </div>
          <div className="clear-and-continue-button-style">
            CONTINUE SHOPPING
          </div>
        </div>

        <div className="coupon-and-checkout-container">
          <div className="coupon-and-note-container">
            <div className="coupon-container">
              <div className="coupon-title">Coupon</div>
              <div className="coupon-code-input-div">
                <input type="text" placeholder="Enter your coupon code here" />
                <button>Apply Coupon</button>
              </div>
            </div>
            {/* *********** */}
            <div className="checkout-note-container">
              <span>Note:</span>
              <span>
                Spend $1,740.00 more to reach FREE SHIPPING! to add more
                products to your cart and receive free shipping for order
                $2,000.00.
              </span>
            </div>
          </div>
          {/* ******************************************** */}
          <div className="checkout-box-container">
            <div className="checkout-box-css">
              <div className="checkout-total-details">
                <div className="subtotal-details-div">
                  <span>SUB TOTAL</span>
                  <span>$126.00</span>
                </div>
                <div className="grandtotal-details-div">
                  <span>GRAND TOTAL</span>
                  <span>$126.00</span>
                </div>
              </div>

              <div className="proceed-btn-container">
                <button className="checkout-box-proceed-btn" onClick={() => setOpenDialog(true)}>
                  PROCEED TO CHECKOUT
                </button>
                <CheckoutModal openDialog={openDialog} setOpenDialog={setOpenDialog}/>
              </div>
              <span className="checkout-box-msg">Checkout with Mutilple Adresses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
