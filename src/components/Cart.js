import React from 'react';

const cartItems = [
    { id: 1, name: 'Product 1', price: 10.0, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20.0, quantity: 2 },
];

function Cart() {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Checkout</button>
        </div>
    );
}

export default Cart;
