import styled from "styled-components";
import { colors } from "../components/variables/variables";

export const HomePageConteiner = styled.div<{ $togglemenuprop: boolean }>`
grid-template-columns:${(prop) => (prop.$togglemenuprop ? "15rem 1fr" : ".5rem 1fr")} ;
grid-template-rows: 13rem 1fr;
display:grid;
transition:ease 1s;
grid-template-areas:
"header header "
"navegation products";

@media(max-width:480px){
  grid-template-rows:${(prop) => (prop.$togglemenuprop ? "13rem 1fr" : "9rem 1fr")} ;
}
`

export const ProductsSection = styled.div`
background-color: ${colors.tertiaryColor};
grid-area:products;
align-items: center;
max-height:calc(100vh - 13rem);
overflow-y: scroll;
display:flex;
flex-direction: column;

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

export const FeaturedImg = styled.img`
  width:30rem;
  height:100%;
  `

export const ProductCardSection = styled.div`
  display:flex;
  padding:2rem;
  flex-wrap: wrap;
  justify-content:center;
  gap:2rem;
  max-width:110rem;

  `

