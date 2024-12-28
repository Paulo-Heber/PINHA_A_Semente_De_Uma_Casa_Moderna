import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { productsData } from "../../services/banco-de-dados";
import { TotalPrice } from "../../styles/shopping_cart_style";

export const TotalPriceContainer = () => {
    const { cartItems } = useCartContext()
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((accumulator, itemId) => {
            const itemData = productsData.find((item) => item.id === itemId.item.id);

            return itemData ? accumulator + itemData.price * itemId.item.quantity : accumulator;
        }, 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems]);

    return (
        <>

            <TotalPrice>
                <p>Total:</p>
                <p>R$ {totalPrice.toFixed(2)}</p>
            </TotalPrice>
        </>
    )
}
