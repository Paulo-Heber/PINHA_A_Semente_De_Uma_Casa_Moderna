import styled from "styled-components";
import { colors } from "../variables/variables";
import { useEffect, useState } from "react";

type inputProps = {
  type: string,
  name: string,
  checked?: boolean;
};

export const CarrocelInputs = () => {
  const [maker, setMaker] = useState(0);

  const carrocelArray = [
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

  return (
    <>
      {carrocelArray.map((input, index) => (
        <StyledInputRadio key={index} name="carrocelInput" id={String(input.id)} checked={input.checked} />
      ))}
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
