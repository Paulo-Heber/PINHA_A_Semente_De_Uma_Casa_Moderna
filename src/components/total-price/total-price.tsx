import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { productsData } from "../banco-de-dados/banco-de-dados";

export const TotalPrice = () => {
    const { cartItems } = useCartContext()
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((accumulator, itemId) => {
            const itemData = productsData.find((item) => item.id === itemId)
            return itemData ? accumulator + itemData.price : accumulator;
        }, 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems]);

    return (
        <>
            <p>Total: R$ {totalPrice.toFixed(2)}</p>
        </>
    )
}