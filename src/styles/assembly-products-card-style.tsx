import styled from "styled-components"
import { colors } from "../components/variables/variables"

export const AssemblyProductsConteiner = styled.div`
    margin-left:7.7rem;
    width:55%;
    height:31%;
    display:flex;
    margin-bottom:1.9rem;

& > :first-child{
    width:54%;
    height:90%;
    box-shadow: 10px 14px 10px ${colors.secondaryColor};
    border:solid 3px ${colors.secondaryColor};
}
`

export const AssemblyProductsInfos = styled.div`
    flex:1;
    font-size:2.69rem;
    text-align:start;
    padding-left:6.2%;
    display:flex;
    flex-direction:column;
    gap:.9rem;
    letter-spacing:.1rem;

& > :nth-child(2){
    color:${colors.fourthColor};
    font-weight:bold;
}

    `

export const QuantityButtonContainer = styled.div`
    background-color:${colors.secondaryColor};
    display:flex;
    height:30%;
    border-radius:.5rem;
    margin-top:.8rem;
    align-items:center;
   
    
    & > * {
        color:${colors.tertiaryColor};
         font-weight:bold;
    }

    & > :first-child{
        width:63%;
        border:none;
        background:none;
        font-size:1.35rem;
        padding-left:.3rem;
        height:100%;
        border-right:solid 1px #333333;
        cursor:pointer;
    }

    & > :first-child:hover {
       background-color:#333333;
       border-radius:.5rem 0 0 .5rem;
    }

    & > :first-child:active {
        border-top:solid .3rem #4c4c4c;
    }
    `

export const QuantitySelector = styled.div`
    background-color:#575151;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:.5rem;
    height:47%;
    gap:.8rem;
    width:29%;
    margin-left:1rem;
    font-size:2.3rem;
    font-weight:bold;

    & > :nth-child(odd){
        height:100%;
        border-radius:.5rem;
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > :nth-child(odd):hover{
        background-color:#787878;
        cursor:pointer;
    }
    
    & > :nth-child(odd):active{
        border-top:solid 3px  #3c3c3c;
    }

`