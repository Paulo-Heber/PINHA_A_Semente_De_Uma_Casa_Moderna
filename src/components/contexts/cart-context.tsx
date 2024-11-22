import { createContext, useState } from "react";

export interface CartItem {
    item: {
        id: number;
        quantity: number;
    }
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number) => void;
    updateItemQuantity: (item: CartItem) => void;
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

    const updateItemQuantity = (updateItem: CartItem) => {
        setCartItems(cart => {
            const index = cart.findIndex(cartItems => cartItems.item.id === updateItem.item.id);

            const updateQuantity = [...cart];
            updateQuantity[index] = { ...updateQuantity, item: { id: updateItem.item.id, quantity: updateItem.item.quantity } }
            return updateQuantity;
        });
    }

    const removeFromCart = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}


/**/