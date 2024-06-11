import { Header } from "../../components/header/header.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";

import { FeaturedSection, HomePageConteiner, ProductCardSection, ProductCarousel, ProductsSection } from "./home-page-style.tsx";
import { FeaturedProducts, ProductCard } from "../../components/products-cards/product-card.tsx";
import { CarrocelInputs } from "../../components/input-radios/input-radio.tsx";
export function HomePage() {
    return (
        <HomePageConteiner>
            <Header />
            <Menu />
            <ProductsSection>
                <FeaturedSection>
                    <ProductCarousel>
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                    </ProductCarousel>
                    <div>
                        <CarrocelInputs />
                    </div>
                </FeaturedSection>
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