import { Link } from "react-router-dom"
import { QuantityButtonContainer, QuantitySelector } from "../assembly-products-card/assembly-products-card-style";
import { useState } from "react";
import { useCartContext } from "../../hooks/useCartContext";

interface ButtonProps {
    to?: string;
    buttonType?: string;
    label: any;
    itemId?: number;

}

function useChangeQuantity() {

    const [quantityItems, setQuantityItems] = useState<number>(1);

    const IncrementItem = () => { modifyQuantityItems('+') };
    const DecrementItem = () => { modifyQuantityItems('-') };

    const modifyQuantityItems = (operator: '+' | '-') => {
        setQuantityItems(prevQuantity => operator === '+' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)); 
    }

    return { quantityItems, setQuantityItems, IncrementItem, DecrementItem };
}


export function Button(props: ButtonProps) {
    const { addToCart, cartItems } = useCartContext();
    const { IncrementItem } = useChangeQuantity();

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
    const { IncrementItem, DecrementItem, quantityItems } = useChangeQuantity();

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

