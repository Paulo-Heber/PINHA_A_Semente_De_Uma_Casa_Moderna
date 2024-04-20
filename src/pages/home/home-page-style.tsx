import styled from "styled-components";

const HomePageConteiner = styled.div`
display:grid;

grid-template-areas:
"header header "
"navegation products";

grid-template-columns:17.3rem 1fr;
grid-template-rows: 9rem 1fr;
`

const ProductsSection = styled.div`
grid-area:products;
padding:2rem 1rem;
background-color:#e4dbdb;
flex:1;
display:flex;
flex-wrap: wrap;
gap:1.5rem;
justify-content: center;
max-height:calc(100vh - 9rem);   
overflow-y:auto;
`

export { HomePageConteiner, ProductsSection }