import styled from "styled-components";
import { colors } from "../components/variables/variables";

export const ProductsInformationPageDetails = styled.div`
    grid-template-rows: 13rem 1fr;
    display:grid;

    grid-template-areas:
    "header"
    "products-information";
`

const ProductsConteiner = styled.div`
    grid-area:products-information;
    background-color:${colors.tertiaryColor};
    text-align:center;
    padding-inline:8rem;
    overflow-y:scroll;

    & > :first-child{
        font-size:5rem
        }
    
    &::-webkit-scrollbar {
        width: 1.2rem; 
        }
            
    &::-webkit-scrollbar-thumb {
        background-color:${colors.secondaryColor};
        border-radius: 10px;
        border: 3px solid ${colors.tertiaryColor};
        }
    `

const PorductsInformationConteiner = styled.div`
justify-content: space-evenly;
display:flex;
padding:1.6rem;
gap:3.2rem;
max-height: calc( 100vh - 19.2rem );

& > * {
    max-width:45%;
}
`

const ProductPreview = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between
`

const MainView = styled.img`
border-radius:.8rem;
height:69%;
`

const SecondaryViews = styled.div`
    justify-content: space-between;
    display:flex;
    height:27%;
    gap:2rem;

    & > * {
        flex:1;
        border-radius:.8rem;
        &:hover{
            cursor:pointer;
            opacity:80%;
        }

    }
`
const ProductDetailsContainer = styled.div`
`

const ProductDetails = styled.div`
    justify-content:space-around;
    flex-direction: column;
    display: flex;
    border-block: solid 1px;
    padding-block:1rem;
    height:69%;
    text-align: start;

    & > :first-child{
        font-size:3.5rem
        }

    & > :last-child{
         background-color:${colors.fourthColor};
         color:#ffffff;
         text-transform:uppercase;
         width:30.7rem;
         height:5.65rem;
         font-size:1.9rem;
         font-weight: bold;
         border:none;
        

         &:hover{
            cursor:pointer;
          
            
         }
         &:active{
            border-top:solid .5rem #076791;
            background-color:#0879ad;
         }
        }
    `

const AvailableColors = styled.div`
    display:flex;
    gap:1rem;

    & > * {
        border-radius:50%;
        border: solid 1px ${colors.secondaryColor};
        width:9%;
    }
`

const Price = styled.div`
    & > :first-child {
        color: ${colors.fourthColor};
        font-size:4.5rem;
    }

    & > :last-child {
        font-size:2rem;
    }
`;


export {
    ProductsConteiner,
    PorductsInformationConteiner,
    ProductPreview,
    ProductDetails,
    ProductDetailsContainer,
    MainView,
    SecondaryViews,
    AvailableColors,
    Price
}