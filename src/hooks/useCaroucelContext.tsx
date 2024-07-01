import { useContext } from "react";
import { CaroucelContext } from "../components/contexts/caroucel-context";

export function useCaroucelContext() {
    const context = useContext(CaroucelContext);

    if (context === undefined) {
        throw new Error('Não está dentro do contexto do caroucel');
    }
    return context;
}