import { createContext, useState } from "react";

export interface CartItem {
    item: {
        id: number;
        quantity: number;
        color: string;
    }
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number) => void;
    updateCartItem: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems([...cartItems, item]);
    }

    const updateCartItem = (updateItem: CartItem) => {
        setCartItems(cart => {
            const index = cart.findIndex(cartItems => cartItems.item.id === updateItem.item.id);

            const updatedCart = [...cart];
            updatedCart[index] = {
                ...updatedCart[index],
                item: {
                    ...updatedCart[index].item,
                    ...updateItem.item
                }
            }
            return updatedCart;
        });
    }



    const removeFromCart = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
            {children}
        </CartContext.Provider>
    )
}