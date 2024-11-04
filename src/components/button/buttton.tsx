import { Link } from "react-router-dom"
import { QuantityButtonContainer, QuantitySelector } from "../assembly-products-card/assembly-products-card-style";
import { useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import { useQuantityItemButtonContext } from "../contexts/quantity-Items-button-context";

interface ButtonProps {
    to?: string;
    buttonType?: string;
    label: any;
    itemId?: number;
}




export function Button(props: ButtonProps) {
    const { IncrementItem } = useQuantityItemButtonContext();
    const { addToCart, cartItems } = useCartContext();
    if (props.to) {
        return (
            <Link to={props.to}>
                <button>{props.label}</button>
            </Link>
        )
    } else if (props.label.toLowerCase() === 'adicionar ao carrinho') {
        return (
            <button onClick={() => {
                const idVerification = cartItems.find(cartIds => cartIds === props.itemId);
                idVerification ? IncrementItem : addToCart(props.itemId)
            }}> {props.label}
            </button >
        );
    } else {
        return <button>{props.label}</button>
    }
}
export function QuantityButtonSelector(props: ButtonProps) {
    const { IncrementItem, DecrementItem, quantityItems } = useQuantityItemButtonContext();

    return (
        <QuantityButtonContainer>
            <Button label={props.label} />
            <QuantitySelector>
                <p onClick={DecrementItem}>-</p>
                <p>{quantityItems}</p>
                <p onClick={IncrementItem}>+</p>
            </QuantitySelector>
        </QuantityButtonContainer>
    )
}

