import { Link } from "react-router-dom";

export function ProductionMaterials() {
    return (
        <>
            <h1>página de material de produção</h1>
            <Link to="/" />
            <Link to="/environments" />
            <Link to="/log_page" />
            <Link to="/product_information" />
            <Link to="/registration_page" />
            <Link to="/shopping_cart" />
        </>
    )
}