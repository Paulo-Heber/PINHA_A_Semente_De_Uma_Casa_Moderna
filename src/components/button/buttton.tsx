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

let IncrementItem = () => { };
let DecrementItem = () => { };
export function Button(props: ButtonProps) {
    const { addToCart, cartItems } = useCartContext();

    if (props.to) {
        return (
            <Link to={props.to}>
                <button>{props.label}</button>
            </Link>
        )
    } else if (props.label.toLowerCase() === 'adicionar ao carrinho') {
        return <button onClick={() => {
            const idVerification = cartItems.find(cartIds => cartIds === props.itemId);
            if (idVerification != undefined) { IncrementItem() }
            else { addToCart(props.itemId) };
        }}> {props.label}</button >
    } else {
        return <button>{props.label}</button>
    }
}
export function QuantityButtonSelector(props: ButtonProps) {

    const [quantityItems, setQuantityItems] = useState<number>(1);
    IncrementItem = () => { modifyQuantityItems(quantityItems, setQuantityItems, '+'); };
    DecrementItem = () => { modifyQuantityItems(quantityItems, setQuantityItems, '-'); }

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

const modifyQuantityItems = (
    quantityItems: number,
    setQuantityItems: (value: number) => void,
    operator: '+' | '-'
): void => {
    const newQuantity = operator === '+' ? quantityItems + 1 : quantityItems - 1;
    newQuantity < 1 ? setQuantityItems(1) : setQuantityItems(newQuantity);

}