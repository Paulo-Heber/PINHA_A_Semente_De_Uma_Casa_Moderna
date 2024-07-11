import styled from "styled-components";
import { colors } from "../../components/variables/variables";

export const ShoppingCartContainer = styled.div`
height:100vh;
display: grid;

grid-template-areas:
"header"
"cart-container";

grid-template-rows: 13rem 1fr;
font-size:8rem;
letter-spacing:.05rem;
`

export const CartContainer = styled.div`
  grid-area:cart-container;
  background-color:${colors.tertiaryColor};
  text-align:center;
  padding:2.7rem 7.7rem 0 7.7rem;
  overflow-y:scroll;

  &::-webkit-scrollbar {
    width: 1.2rem; 
  }

  &::-webkit-scrollbar-track {
    background: ${colors.tertiaryColor};
  }
    
  &::-webkit-scrollbar-thumb {
    background-color:${colors.secondaryColor};
    border-radius: 10px;
    border: 3px solid ${colors.tertiaryColor};
  }
`

export const ProductsInCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-height:29rem;
  border-top: 1px solid;
  font-size:5rem;
  margin-top:1.2%;
  height:59.4%;
  padding-block:2.5rem;
  text-align:start;
 

& > :first-child{
  width:32.6%;
  height:93%;
  border:solid 4px  #575151;
  box-shadow:11px 11px 10px .1px #151515;
}

& > :last-child{
  border:2px solid ${colors.secondaryColor};
  border-radius:100%;
  color:${colors.secondaryColor};
  padding:.7rem .9rem;
  font-size:55%;
  transition: .2s ease-in-out;
}

& > :last-child:hover{
  cursor:pointer;
  border-color:red;
  color:red;
  font-size:57%;
}

& > :last-child:active{
  font-size:53%;
}
`

export const FornitureInfos = styled.div`
  display: flex;
  flex-direction: column;
  line-height:3rem;
  width:23%;
  margin-right:18%;
  font-weight:bold;
  font-size:3rem;
  letter-spacing:.01rem;

& > :nth-child(5){
    color: ${colors.fourthColor};
    font-size:2.5rem;
}
& > :nth-child(6){
    font-size:1.6rem;
    color:#575151;
}
`

export const ColorMaterialContainer = styled.div`
display:flex;
font-size:3rem;
align-items:center;

& > :last-child{
    margin-left:2rem;
    border: 2px solid ${colors.secondaryColor};
    width:11%;
    background-color:#549854;
    border-radius:.5rem;
    height:95%;
}
`