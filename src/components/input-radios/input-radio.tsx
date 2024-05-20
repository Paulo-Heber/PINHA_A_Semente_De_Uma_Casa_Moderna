import styled from "styled-components";
import { colors } from "../variables/variables";

type inputProps = {
    type:string,
    name:string,
    checked?:boolean;
};

export const InputRadio:React.FC<inputProps> = ({type, name, checked}) => {
    return <StyledInputRadio type={type} name={name} />;
}


const StyledInputRadio = styled.input.attrs({ type: 'radio' })`
  /* Especificação das propriedades de estilo */
  margin-right: 5px; /* Exemplo de margem para separação */
  width: 20px; /* Largura do botão de rádio */
  height: 20px; /* Altura do botão de rádio */

  /* Estilo do círculo do botão de rádio */
  &:checked {
    background-color: #90ff; /* Cor de fundo quando selecionado */
    border-radius: 50%; /* Para criar um círculo */
  }


`;