import { createContext, Dispatch, SetStateAction } from 'react';

interface CaroucelContextType {
    caroucelId: number;
    setCaroucelId: Dispatch<SetStateAction<number>>;
}

const defaultContextValue: CaroucelContextType = {
    caroucelId: 0,
    setCaroucelId: () => {},
  };

export const CaroucelContext = createContext<CaroucelContextType>(defaultContextValue);

