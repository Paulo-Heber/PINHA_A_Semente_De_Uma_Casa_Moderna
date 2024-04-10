import { Link } from "react-router-dom"

interface ButtonProps {
    to: string;
    label:any;
}
export function Button(props: ButtonProps) {
    return (
        <Link to={props.to}>
            <button>{props.label}</button>
        </Link>
    )
}


