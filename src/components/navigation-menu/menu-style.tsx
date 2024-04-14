import styled from "styled-components";

const MenuConteiner = styled.div`
background-color:#151515;
max-width:17.3rem;
color:#ffffff;
display:flex;
flex-direction:column;
padding:1.5rem; 
height:100vh;
gap:5px;
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
padding:1rem;
display:flex;

&:hover {
  border-left:solid .2rem #ffffff;
  background-color: #272727;
  cursor:pointer;
}
`

const RoomsLabel = styled.label`
flex:1;

&:hover {
  cursor:pointer;
}
`

const RoomSelector = styled.input`
display:none;
`

export { MenuConteiner, MenuFilters, Title, RoomSelector, RoomsLabel, Rooms }