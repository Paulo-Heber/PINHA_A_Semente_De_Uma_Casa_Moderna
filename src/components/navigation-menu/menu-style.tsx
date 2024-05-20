import styled from "styled-components";
import { colors } from "../variables/variables";

const MenuConteiner = styled.div`
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
   display:none;
  }
  `

const Title = styled.h2`
  align-self: center;
  margin-bottom:.4rem;
  font-size:2rem;
`

const MenuFilters = styled.div`
display:flex;
flex-direction:column;
min-width:100%;
text-aling-center;
`
const Rooms = styled.li`
display:flex;
margin-bottom:1.6rem;
color:#ffffff;
font-size:3.2rem;
`
const RoomsLabel = styled.label<{ checked: boolean }>`
  flex: 1;
  padding:1rem;
  background-color: ${(props) => (props.checked ? "#272727" : "#151515")}; 
  border-left: solid .2rem ${(props) => (props.checked ? "#ffffff" : "#151515")}; 
  cursor: pointer;

  &:hover {
    border-left:solid .2rem #ffffff;
    background-color: #272727;
    cursor:pointer;
  }
`;

const RoomSelector = styled.input`
display:none;
`




export { MenuConteiner, MenuFilters, Title, RoomSelector, RoomsLabel, Rooms }