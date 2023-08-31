import React, { useContext } from "react";

import {BsCartFill} from "react-icons/bs"
import "./CardButton.css"

import AppContext from '../../context/AppContext';

function CardButton() {

    const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)

    return (  
        <button type="button" 
        className="cart_button"
        onClick={() => setIsCartVisible(!isCartVisible)}
        > 
            <BsCartFill/>
            <span className="cart_status">{cartItems.length}</span>
        </button>
    );
}

export default CardButton; 
