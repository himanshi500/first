import React from 'react';

function Product({ product }) {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;
