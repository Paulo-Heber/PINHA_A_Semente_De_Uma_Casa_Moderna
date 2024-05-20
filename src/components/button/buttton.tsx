import { Link } from "react-router-dom"

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


