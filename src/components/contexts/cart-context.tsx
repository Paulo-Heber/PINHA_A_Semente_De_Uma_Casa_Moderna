import { createContext, useState } from "react";

interface CartContextType {
    cartItems: any[];
    addToCart: (item: any) => void;
    removeFromCart: (index: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    const addToCart = (item: any) => {
        setCartItems([...cartItems, item]);
        console.log(`esse é o item no carrinho ${item}`);

    }

    const removeFromCart = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}


