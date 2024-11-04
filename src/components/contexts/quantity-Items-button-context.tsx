import { useState, createContext, ReactNode, useContext, Children } from "react";

interface QuantityItemsButtonContextType {
    quantityItems: number;
    IncrementItem: () => void;
    DecrementItem: () => void;
}

export const QuantityItemsButtonContext = createContext<QuantityItemsButtonContextType | undefined>(undefined);

interface QuantityItemsButtonContextProviderProps {
    children: ReactNode;
}

export const QuantityItemsButtonContextProvider = ({ children }: QuantityItemsButtonContextProviderProps) => {

    const [quantityItems, setQuantityItems] = useState<number>(1);

    const IncrementItem = () => { modifyQuantityItems('+') };
    const DecrementItem = () => { modifyQuantityItems('-') };

    const modifyQuantityItems = (operator: '+' | '-') => {
        setQuantityItems(prevQuantity => operator === '+' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1));
    }

    return (
        <QuantityItemsButtonContext.Provider value={{ quantityItems, IncrementItem, DecrementItem }}>
            {children}
        </QuantityItemsButtonContext.Provider>
    )
}

export const useQuantityItemButtonContext = () => { 
    const context = useContext(QuantityItemsButtonContext);
    if (!context) {
        throw new Error("useQuantityItemsButton deve ser usado dentro de um QuantityItemsButtonContextProvider");
    }
    return context;
}