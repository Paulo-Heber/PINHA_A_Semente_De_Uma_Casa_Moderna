import { Link } from "react-router-dom";

export function Environments() {
    return (
        <>
            <h1>página de ambientes</h1>
            <Link to="/" />
            <Link to="/log_page" />
            <Link to="/product_information" />
            <Link to="/product_materials" />
            <Link to="/registration_page" />
            <Link to="/shopping_cart" />
        </>
    )
}