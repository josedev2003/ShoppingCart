import React, { useState } from "react";
import AppContext from "./AppContext";

import propTypes from 'prop-types';

function Provider({children}) {
    
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState(false); 
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(true);
   
    const value = {
        products, 
        setProducts,
        loading,
        setLoading,
        cartItems, 
        setCartItems,
        isCartVisible, 
        setIsCartVisible
    };

    return ( 
        <AppContext.Provider value={ value } >
            {children}
        </AppContext.Provider>
     );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;