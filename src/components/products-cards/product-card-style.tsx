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

export const FeaturedProductsContainer = styled.div`
    position: relative;
    height:43rem;
`

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

    & > :nth-child(2){
    margin-block: .5rem;
    overflow: hidden;
    }

    & > :last-child{
    background-color:${colors.secondaryColor};
    border:none;
    color:#ffffff;
    padding:1rem;
    width:50%;
    transition:.1s ease-in-out;
    }

    & > :last-child:hover{
    background-color:#333333;
    cursor:pointer;
    }

     & > :last-child:active {
     box-shadow: inset 0px 2.5px 0px 0px #4c4c4c; 
    }
    `