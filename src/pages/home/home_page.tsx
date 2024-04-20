import { Header } from "../../components/header/header.tsx";
import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";

import { HomePageConteiner, ProductsSection } from "./home-page-style.tsx";
import { ProductCard } from "../../components/products-cards/product-card.tsx";
export function HomePage() {
    return (
        <HomePageConteiner>
            <Header />
            <Menu />
            <ProductsSection>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductsSection>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </HomePageConteiner>
    )
}