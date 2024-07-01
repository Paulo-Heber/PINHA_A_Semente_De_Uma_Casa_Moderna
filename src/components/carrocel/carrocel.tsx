import { useState } from "react"
import { CaroucelContext } from "../contexts/caroucel-context"
import { CarrocelInputs } from "../input-radios/input-radio"
import { FeaturedProducts } from "../products-cards/product-card"
import { CarouselContainer, InputsContainer, ProductCarousel } from "./carrocel_style"

export const HighlightsCarousel = () => {
    const [caroucelId, setCaroucelId] = useState(0);
    
    return (
        <CaroucelContext.Provider value={{caroucelId, setCaroucelId}}>
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