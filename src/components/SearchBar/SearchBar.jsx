import React from "react";
import { useState } from "react";

import {BiSearchAlt} from "react-icons/bi";

import "./SearchBar.css";

function SearchBar() {
    
    const [searchValue, setSearchValue] = useState('');
    
    
    
    return (  

        <form className="search_bar">
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