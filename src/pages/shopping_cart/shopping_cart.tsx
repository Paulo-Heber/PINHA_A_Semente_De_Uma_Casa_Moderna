import { Link } from "react-router-dom";

export function ShoppingCart() {
    return (
        <>
            <h1>carrinho</h1>
            <Link to="/" />
            <Link to="/environments" />
            <Link to="/log_page" />
            <Link to="/product_information" />
            <Link to="/production_materials" />
            <Link to="/registration_page" />
        </>
    )
}