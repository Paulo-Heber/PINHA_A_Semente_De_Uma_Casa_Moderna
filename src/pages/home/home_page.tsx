import { Header } from "../../components/header/header.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";

import { HomePageConteiner, ProductCardSection, ProductsSection } from "../../styles/home-page-style.tsx";
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

/*PARA O FILTRO
Tenho que verificar se a room do item é igual a room do selectedFilter
a room do item vem do productsData
Dentro do ProductsSection deve ter uma [ul] com ProductCards dentro:

 <ProductCardSection> 
    <ul> {productCards} </ul>
 </ProductCardSection>

Esse produsctCards tem que ser uma const que receba um map
const productCards = productsData.map((movel, index) =>{
if(movel.filters.room === selectedFilter){
    return <li key=index> <ProductCard/> </li>
    } else {
      return <li key=index> <ProductCard/> </li>
     }
})

CONCERTAR A LOGICA AINDA


 que tenham a room do item igual a room do selectedFilter
Caso não tenha nenhum filtro selecionado,Retornar uma ul que chame uma função que retorne um map com retorno de li's

*/