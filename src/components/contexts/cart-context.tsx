import { createContext, useState } from "react";

interface CartContextType {
    cartItems: number[];
    addToCart: (item: any) => void;
    removeFromCart: (index: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    const addToCart = (itemId: number) => {
        setCartItems([...cartItems, itemId]);
    }
    console.log(`esse é o id que está no carrinho:${cartItems}`);

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


