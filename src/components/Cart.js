import React from "react";
import "./Cart.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// 

function Cart()
{
    return (
        
            <div className = "icons-cart">
                <ShoppingCartIcon className="ShoppingCartIcon"></ShoppingCartIcon>
                <span className = "counter">0</span>
            </div>
        
            
    )
}
export default Cart;