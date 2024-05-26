import styled from "styled-components";
import { colors } from "../variables/variables";

export const MenuConteiner = styled.div`
  grid-area:navegation;
  background-color:${colors.secondaryColor};
  color:#ffffff;
  display:flex;
  flex-direction:column;
  padding:4.2rem 1.5rem; 
  max-height:79.7vh;
  gap:2rem;
  top:9rem;
  overflow-y:scroll;

  &::-webkit-scrollbar {
    width: 1.2rem; 
  }

  &::-webkit-scrollbar-track {
    background: #272727;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color:${colors.secondaryColor};
    border-radius: 10px;
    border: 3px solid ${colors.tertiaryColor};
  }
  `

export const Title = styled.h2`
  align-self: center;
  margin-bottom:.4rem;
  font-size:2rem;
`

export const MenuFilters = styled.div`
display:flex;
flex-direction:column;
min-width:100%;
text-aling-center;
`
export const Rooms = styled.li`
display:flex;
margin-bottom:1rem;
color:#ffffff;
font-size:3.2rem;
`
export const RoomsLabel = styled.label<{ checked: boolean }>`
  flex: 1;
  padding:1.5rem;
  background-color: ${(props) => (props.checked ? "#272727" : "#151515")}; 
  border-left: solid .2rem ${(props) => (props.checked ? "#ffffff" : "#151515")}; 
  cursor: pointer;
  transition:.2s;

  &:hover {
    border-left:solid .2rem #ffffff;
    background-color: #272727;
    cursor:pointer;
    font-size:1.7rem;
  }
`;

export const FilterSelector = styled.input`
display:none;
`

export const MaterialList = styled.ul`
    flex-direction:column;
    font-size:3.2rem;
    align-items:center;
    display:flex;
    height:80%;
    width:95%;
    gap:2.1rem;
    
    
    & > * {
        padding:1.5rem;
        width:100%;
        transition:.2s;
    }

    & > *:hover {
        cursor:pointer;
        font-size:1.7rem;
        background-color:#272727;
        border-left:2px solid;
    }
`