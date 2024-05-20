import styled from "styled-components";
import { colors } from "../variables/variables";

export const ScrollbarStyle = styled.div`
  &::-webkit-scrollbar {
    width: 1.2rem; 
  }

  &::-webkit-scrollbar-track {
    background: #151515;
  }

  &::-webkit-scrollbar-thumb {
    background-color:${colors.tertiaryColor};
    border-radius: 10px;
    border: 3px solid #151515;
  }
`

