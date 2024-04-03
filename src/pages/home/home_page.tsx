import { Link } from "react-router-dom";
import { Header } from "../../components/header/header.tsx";

export function HomePage() {
    return (
        <>
            <Header />
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