import styled from "styled-components"
import { colors } from "../components/variables/variables"

export const LogoContainer = styled.div`
    background-color:transparent;
    border: 3px solid ${colors.secondaryColor};
    border-radius:1.5rem;
    width: 31.5rem;
    height:9.9rem;
    padding:3px;
    color:${colors.tertiaryColor};
    text-align:start;
    font-size:4rem;
    
    & > * {
        background-color:${colors.secondaryColor}; 
        width:100%;
        height:100%;
        display:flex;
        border-radius:1rem;
        align-items: center;
        justify-content: center;
    }
`
export const Badge = styled.img`
    max-block-size: 4.58rem;
    margin-right:13px;
`

export const LogoText = styled.div`
    & > :first-child{
        text-transform:uppercase;
        margin-bottom:.3rem;
        font-size:2rem;
    }

    & > :last-child{
        font-size:1.2rem;
        letter-spacing:.18rem;
    }
`
