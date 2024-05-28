import { Link } from "react-router-dom"
import { QuantityButtonContainer, QuantitySelector } from "../assembly-products-card/assembly-products-card-style";

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
    return (
        <QuantityButtonContainer>
            <Button  label={props.label}/>
            <QuantitySelector>
                <p>-</p>
                <p>0</p>
                <p>+</p>
            </QuantitySelector>
        </QuantityButtonContainer>
    )
}