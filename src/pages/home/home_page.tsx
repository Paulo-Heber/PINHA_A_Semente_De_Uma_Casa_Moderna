import { Header } from "../../components/header/header.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";

import { HomePageConteiner, ProductCardSection, ProductsSection } from "./home-page-style.tsx";
import { ProductCard } from "../../components/products-cards/product-card.tsx";

import { HighlightsCarousel } from "../../components/carrocel/carrocel.tsx";
export function HomePage() {
    return (
        <HomePageConteiner>
            <Header />
            <Menu />
            <ProductsSection>
                <HighlightsCarousel />
                <ProductCardSection>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductCardSection>
            </ProductsSection>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            {/* <Navegation /> */}
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </HomePageConteiner>
    )
}