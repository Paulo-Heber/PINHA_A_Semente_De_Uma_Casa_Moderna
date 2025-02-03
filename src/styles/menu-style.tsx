import styled from "styled-components";
import { colors } from "../components/variables/variables";

export const MenuConteiner = styled.div<{ $togglemenuprop: boolean }>`
  grid-area:navegation;
  background-color:${colors.secondaryColor};
  color:#ffffff;
  display:flex;
  max-height:calc(100vh - 13rem);
  flex-direction:column;
  transition:padding ease 1s;
  padding:${(props) => (props.$togglemenuprop ? "4.2rem 0" : "0")}; 
  gap:2rem;  
  position:relative;
  border-right:5px solid #272727;

  
  & > :last-child{
  color: ${colors.tertiaryColor};
  font-size:1.3rem;
  padding:.3rem;
  background-color:#272727;
  z-index:1;
  position: absolute;
  top:35%;
  right:-1.9rem;
  border-radius:0 3rem 3rem 0;
  border:none;
  height:20rem;
  cursor:pointer;
  transition:ease;
  

  &:hover{
     background-color:${colors.secondaryColor};
     transition:0s;
     font-size:1.8rem;
    }

    &:active{
     background-color:#272727;
    }
     
&>*{
    rotate:${(props) => (props.$togglemenuprop ? "0" : "180deg")}; 
    transition:ease .5s;
}

`

export const Title = styled.h2`
  align-self: center;
  margin-bottom:.4rem;
  font-size:2rem;
  `
export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  font-size:2.5rem;
  overflow-x: hidden;
  

  &>*{
   padding-inline : 1rem;
   }
  
  &::-webkit-scrollbar {
    width: 1.2rem; 
  }

  &::-webkit-scrollbar-thumb {
    background-color:${colors.tertiaryColor};
    margin-left:5rem;
    border-radius: 10px;
    border: 3px solid ${colors.secondaryColor};
  }
  `

export const MenuFilters = styled.div`
  display:flex;
 
  flex-direction:column;
  min-width:100%;
  text-aling-center;

`
export const Rooms = styled.li`
  display:flex;
  color:#ffffff;
  font-size:3.2rem;
`
export const RoomsLabel = styled.label<{ checked: boolean }>`
  flex: 1;
  padding-block:1.2rem;
  background-color: ${(props) => (props.checked ? "#272727" : "#151515")}; 
  border-bottom: solid .2rem ${(props) => (props.checked ? "#ffffff" : "#151515")}; 
  cursor: pointer;
  margin-bottom:.5rem;
  transition:.2s;
  border-radius:1rem;

  &:hover {
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