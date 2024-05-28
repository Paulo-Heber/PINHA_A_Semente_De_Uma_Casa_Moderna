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
`

export const ProductsInCartContainer = styled.div`
display: flex;
border-block: 1px solid;
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
    margin-right:11%;
   }

& > :last-child{
  
    border:2px solid ${colors.secondaryColor};
    border-radius:100%;
    color:${colors.secondaryColor};
    padding:.7rem .9rem;
    font-size:60%;
}
`

export const FornitureInfos = styled.div`
display: flex;
flex-direction: column;
line-height:3.4rem;
width:23%;
margin-right:29.5%;
font-weight:bold;
font-size:3rem;
letter-spacing:.01rem;

& > :nth-child(5){
    color: ${colors.fourthColor};
}
`
