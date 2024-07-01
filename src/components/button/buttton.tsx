import { Link } from "react-router-dom"
import { QuantityButtonContainer, QuantitySelector } from "../assembly-products-card/assembly-products-card-style";
import { useState } from "react";

interface ButtonProps {
    to?: string;
    label: any;
}
export function Button(props: ButtonProps) {
    return props.to ? (
        <Link to={props.to}>
            <button>{props.label}</button>
        </Link>
    ) : <button>{props.label}</button>
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

/*
Quero que quando apertar no botão de + ou - aconteça exatamente essa operação com o número entre eles

1. Tenho qyue fazer um useState que inicie como 1
2. Quando o usuário clicar em um dos botões deve chamar uma função
3. A função deve saber o botão que foi clicado 
4. Fazer a operação referente a esse botão
5. Atualizar o state com o novo número
6. Mostrar o novo número na tela
*/