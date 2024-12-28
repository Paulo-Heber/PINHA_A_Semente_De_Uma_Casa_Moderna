import styled from "styled-components";
import { colors } from "../components/variables/variables";

export const HomePageConteiner = styled.div`
grid-template-columns:25.5rem 1fr;
grid-template-rows: 13rem 1fr;
display:grid;

grid-template-areas:
"header header "
"navegation products";
`

export const ProductsSection = styled.div`
background-color: ${colors.tertiaryColor};
grid-area:products;

display:flex;
max-height:79.7vh;
flex-direction: column;

overflow-y:auto;

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
  `

