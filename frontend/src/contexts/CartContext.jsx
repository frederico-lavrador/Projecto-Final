import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {

    return useContext(CartContext);

};

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {

        setCart((prevCart) => {

            const existingBook = prevCart.find(item => item.isbn === book.isbn);

            if (existingBook) {
                
                return prevCart.map(item =>
                    item.isbn === book.isbn
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

            } else {

                return [...prevCart, { ...book, quantity: 1 }];

            }

        });

    };

    const updateQuantity = (isbn, quantity) => {

        setCart((prevCart) =>
            prevCart.map(item =>
                item.isbn === isbn
                    ? { ...item, quantity }
                    : item
            )
        );

    };

    const removeFromCart = (isbn) => {

        setCart((prevCart) => prevCart.filter(item => item.isbn !== isbn));

    };

    const calculateTotal = () => {

        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    };

    return (

        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, calculateTotal }}>
            {children}
        </CartContext.Provider>

    )

}