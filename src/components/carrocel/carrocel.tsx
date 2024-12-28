import { useState } from "react"
import { CaroucelContext } from "../contexts/caroucel-context"
import { CarrocelInputs } from "../input-radios/input-radio"
import { FeaturedProducts } from "../products-cards/product-card"
import { CarouselContainer, InputsContainer, ProductCarousel } from "../../styles/carrocel_style"

export const HighlightsCarousel = () => {
    const [caroucelId, setCaroucelId] = useState(0);

    return (
        <CaroucelContext.Provider value={{ caroucelId, setCaroucelId }}>
            <CarouselContainer>
                <ProductCarousel>
                    <FeaturedProducts />
                </ProductCarousel>
                <InputsContainer>
                    <CarrocelInputs />
                </InputsContainer>
            </CarouselContainer>
        </CaroucelContext.Provider>
    )
}

/* ATUALIZANDO CARROCEL
Tenho que fazer com que o input selecionado mostre 3 cards de items diferentes por vez
a diferença é que quando selecionar o input manualmente, vá para aqueles mesmo 3 items específicos

*/