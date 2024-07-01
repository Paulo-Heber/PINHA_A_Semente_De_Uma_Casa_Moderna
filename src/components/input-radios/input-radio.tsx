import styled from "styled-components";
import { colors } from "../variables/variables";
import { useEffect, useState } from "react";
import { useCaroucelContext } from "../../hooks/useCaroucelContext";

// exportar o tamanho do array do carrocel para utilizar para ter a quantidade de vezes que o for dos pordutos serã lidos
let carrocelArray = [];
export const CarrocelInputs = () => {
  const [maker, setMaker] = useState(0);
  const { setCaroucelId } = useCaroucelContext();

  carrocelArray = [
    { id: 0, checked: maker === 0 },
    { id: 1, checked: maker === 1 },
    { id: 2, checked: maker === 2 },
    { id: 3, checked: maker === 3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMaker(prevMaker => (prevMaker + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCaroucelId(maker);
  }, [maker]);

  return (
    <>
      {carrocelArray.map((input, index) => {
        return < StyledInputRadio
          key={index}
          name="carrocelInput"
          id={String(input.id)}
          checked={input.checked}
          readOnly />
      })}
    </>
  )

}


const StyledInputRadio = styled.input.attrs({ type: 'radio' })`
  appearance:none;
  width: 2rem; 
  height: .5rem; 
  border-radius:5rem; 
  background-color: #fff;

  &:checked {
    background-color: ${colors.primaryColor};
  }

  &:hover{
    cursor:pointer
  }
`;
