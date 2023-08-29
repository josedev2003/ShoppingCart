import React from "react";

import {BsCartFill} from "react-icons/bs"
import "./CardButton.css"

function CardButton() {
    return (  
        <button type="button" className="cart_button" > 
            <BsCartFill/>
            <span className="cart_status">1</span>
        </button>
    );
}

export default CardButton
