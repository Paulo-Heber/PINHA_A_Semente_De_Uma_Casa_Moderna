import styled from "styled-components";

const MenuConteiner = styled.div`
grid-area:navegation;
background-color:#151515;
color:#ffffff;
display:flex;
flex-direction:column;
padding:1.5rem; 
height:calc(100vh - 9rem);
gap:5px;
top:9rem;
`

const Title = styled.h2`
  align-self: center;
`

const MenuFilters = styled.div`
display:flex;
flex-direction:column;
min-width:100%;
text-aling-center;
`
const Rooms = styled.li`
display:flex;
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