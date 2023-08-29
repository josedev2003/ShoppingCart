import React from "react";

import {BsFillCartPlusFill} from "react-icons/bs"

import "./ProductCard.css"

function ProductCard() {
    return ( 

        <section className="product-card">
       
            <img src="" alt="product" 
            className="card__image" />

                <div className="card__infos">
                    <h2 className="card__price">R$ 200.20</h2>
                    <h2 className="card__title">manual do dev</h2>
                </div>

                <button type="button"  className="card__button">
                    <BsFillCartPlusFill/>
                </button>

        </section>

     );
}

export default ProductCard;