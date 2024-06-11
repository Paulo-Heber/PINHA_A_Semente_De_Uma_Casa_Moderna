import styled from "styled-components";
import { colors } from "../../components/variables/variables";

const HomePageConteiner = styled.div`
grid-template-columns:25.5rem 1fr;
grid-template-rows: 13rem 1fr;
display:grid;

grid-template-areas:
"header header "
"navegation products";
`

const ProductsSection = styled.div`
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
  
  const FeaturedSection = styled.div`
  width:100%;
  padding:3.2rem;
  display:flex;
  flex-direction: column;
  align-items:center;

  & > :nth-child(2){
  display:flex;
  gap:1rem;
  }
  `
  
const ProductCarousel = styled.div`
  display:flex;
  gap:1rem;
  margin-bottom:3rem;
`

  const FeaturedImg = styled.img`
  width:30rem;
  height:100%;
  `

  const ProductCardSection = styled.div`
  display:flex;
  padding:2rem;
  flex-wrap: wrap;
  justify-content:center;
  gap:2rem;
  `
  
export { HomePageConteiner, ProductsSection, ProductCarousel, FeaturedSection, FeaturedImg, ProductCardSection }