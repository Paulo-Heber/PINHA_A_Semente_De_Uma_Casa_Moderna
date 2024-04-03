import { Link } from "react-router-dom";
import { Head } from "../../components/head.tsx";

export function HomePage() {
    return (
        <>
            <Head />
            <h1>Essa é a página inicial</h1>
            <Link to="/log_page" />
            <Link to="/environments" />
            <Link to="/product_information" />
            <Link to="/product_materials" />
            <Link to="/registration_page" />
            <Link to="/shopping_cart" />
        </>
    )
}