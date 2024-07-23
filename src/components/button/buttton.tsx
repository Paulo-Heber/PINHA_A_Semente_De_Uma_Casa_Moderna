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
export function Button(props: ButtonProps) {
    const { addToCart } = useCartContext();

    if (props.to) {
        return (
            <Link to={props.to}>
                <button>{props.label}</button>
            </Link>
        )
    } else if (props.label.toLowerCase() === 'adicionar ao carrinho') {

        return <button onClick={() => { console.log(`Esse é o id que foi passado pelo botão: ${props.itemId}`); addToCart(props.itemId) }}>{props.label}</button>
    } else {
        return <button>{props.label}</button>
    }
}
export function QuantityButtonSelector(props: ButtonProps) {
    const [quantityItems, setQuantityItems] = useState<number>(1);

    const IncrementItem = () => { modifyQuantityItems(quantityItems, setQuantityItems, '+'); };
    const DecrementItem = () => { modifyQuantityItems(quantityItems, setQuantityItems, '-'); }

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
    newQuantity < 0 ? setQuantityItems(0) : setQuantityItems(newQuantity);

}