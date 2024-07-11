import { useContext } from "react";
import { CartContext } from "../components/contexts/cart-context";


export function useCartContext() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('Não está dentro do contexto do carrinho');
    }
    return context;
}