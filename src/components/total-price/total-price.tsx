/*
Tenho que fazer um map de todos os produtos no carrinho e somar os preços de cada um em um useState, tenho que fazer um useEffect para ele ser rodado toda vez que o cart mude

1. 

tenho que utilizar o reduce no cartitem, e utilizar o find para encontrar o elemento dentro do products data com o mesmo id que está no cartItens, somar o consummer com o termprice do elemento com id igual.
*/

import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { productsData } from "../banco-de-dados/banco-de-dados";

export const TotalPrice = () => {
    const { cartItems } = useCartContext()
    const [totalPrice, setTotalPrice] = useState<number>(0);

    if (cartItems.length != 0) {
        return (
            <>
                {cartItems.map((itemId: number, cartItemsIndex: number) => {


                    return (
                        <>
                            {productsData.map((itemData) => {
                                if (itemData.id === itemId) {
                                    useEffect(() => {
                                        const newTotalPrice = cartItems.reduce((accumulator, itemId) => {
                                            const itemData = productsData.find((item) => item.id === itemId)
                                            return itemData ? accumulator + itemData.price : accumulator;
                                        }, 0)
                                        setTotalPrice(newTotalPrice)
                                    }, [cartItems]);
                                }
                            })}
                        </>
                    )
                })}
                <p>Total: R$ {totalPrice.toFixed(2)}</p>
            </>
        )
    }
}