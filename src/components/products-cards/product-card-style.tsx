import styled from "styled-components";
import { colors } from "../variables/variables";
import { productCardDataType } from "./product-card";

export const FornitureImg = styled.img`
    width:32rem;
    height:25rem;
    display:flex;
    border:solid 3px #575151;
    box-shadow: 10px 10px 10px 0px #232323;
`

export const FeaturedProductsContainer = styled.div<productCardDataType >`
    position: relative;
    height:43rem;
      background-color: ${(props) => props.backgroundColor || 'yellow'};`

export const FeaturedProductInformation = styled.div`
    background-color:#242323;
    position: absolute;
    bottom:0;
    width:100%;
    height:35%;
    color:#ffffff;
    padding:1.5rem;
    font-size:1.9rem;
    display:flex;
    justify-content: space-between;
    letter-spacing:.1rem;
    flex-direction:column;

    & > :last-child{
    background-color:${colors.secondaryColor};
    border:none;
    color:#ffffff;
    padding:1rem;
    width:50%;
    }
    `