import { Link } from "react-router-dom";

export function RegistrationPage() {
    return (
        <>
            <h1>página de registro</h1>
            <Link to="/" />
            <Link to="/environments" />
            <Link to="/log_page" />
            <Link to="/product_information" />
            <Link to="/production_materials" />
            <Link to="/shopping_cart" />
        </>
    )
}