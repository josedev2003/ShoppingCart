import React from "react";
import { useState, useContext } from 'react';

import {BiSearchAlt} from "react-icons/bi";

import fetchProducts from "../../api/fetchProducts"
import "./SearchBar.css";
import AppContext from "../../context/AppContext";

function SearchBar() {
    const { setProducts, setLoading } = useContext(AppContext)
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event) =>{
        event.preventDefault();
        setLoading(true)
        
        const products = await fetchProducts(searchValue); 
        
        setProducts(products);
        setLoading(false)
        setSearchValue('');
    };
    
    
    return (  

        <form className="search_bar" onSubmit={handleSearch}>
        <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar Produtos" 
        className="search_input"
        onChange={({target}) => setSearchValue(target.value)}
        required />

        <button type="submit" className="search_button">
            <BiSearchAlt/>
        </button>
    </form>
    );
}
export default SearchBar;