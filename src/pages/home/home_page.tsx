import { Header } from "../../components/header/header.tsx";
import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";

import { Main } from "./home-page-style.tsx";
import { ProductCard } from "../../components/products-cards/product-card.tsx";
export function HomePage() {
    return (
        <>
            <Header />
            <Main>
                <Menu />
                <div className="productSection">
                    <ProductCard />
                </div>
            </Main>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </>
    )
}