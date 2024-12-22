import styled from "styled-components";
import { colors } from "../variables/variables";
import { useEffect, useMemo, useState } from "react";
import { useCaroucelContext } from "../../hooks/useCaroucelContext";


export const CarrocelInputs = () => {
  const [maker, setMaker] = useState(0);
  const { setCaroucelId } = useCaroucelContext();

  const carrocelArray = useMemo(() => [
    { id: 0, checked: maker === 0 },
    { id: 1, checked: maker === 1 },
    { id: 2, checked: maker === 2 },
    { id: 3, checked: maker === 3 },
  ], [maker]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMaker(prevMaker => (prevMaker + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [maker]);

  useEffect(() => {
    setCaroucelId(maker);
  }, [maker, setCaroucelId]);

  return (
    <>
      {carrocelArray.map((input) => {
        return < StyledInputRadio
          key={input.id}
          name="carrocelInput"
          checked={input.checked}
          onClick={() => setMaker(input.id)}
        />
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
