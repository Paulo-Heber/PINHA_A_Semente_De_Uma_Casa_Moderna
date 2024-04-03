import { Link } from "react-router-dom"

interface ButtonProps {
    to: string;
}

export function Button(props: ButtonProps) {
    return (
        <Link to={props.to}>
            <button>ir para {props.to}</button>
        </Link>
    )
}


