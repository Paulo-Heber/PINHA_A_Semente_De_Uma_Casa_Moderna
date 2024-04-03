import { Link } from "react-router-dom";

export function LogPage() {
    return (
        <>
            <h1>página de loguin</h1>
            <Link to="/" />
            <Link to="/environments" />
            <Link to="/product_information" />
            <Link to="/product_materials" />
            <Link to="/registration_page" />
            <Link to="/shopping_cart" />
        </>
    )
}