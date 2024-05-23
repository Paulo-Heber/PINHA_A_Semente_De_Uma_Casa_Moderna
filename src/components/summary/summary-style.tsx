import styled from "styled-components";
import { colors } from "../variables/variables";

export const SummaryContainer = styled.div`
    grid-area:summary;
    background-color:${colors.secondaryColor};
    color:#ffffff;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:4rem 1rem;
    gap:1.7rem;
    
    & > :first-child{
        font-size:2.21rem;
    }
`

export const MaterialList = styled.ul`
    flex-direction:column;
    font-size:2.2rem;
    align-items:center;
    display:flex;
    height:80%;
    width:95%;
    gap:2.1rem;
    
    & > * {
        padding:1.5rem;
        width:100%;
        transition:.2s;
        text-align:center;
    }

    & > *:hover {
        cursor:pointer;
        font-size:1.8rem;
        background-color:#272727;
        border-left:2px solid
    }
`