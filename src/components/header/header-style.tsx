import styled from "styled-components"
import { colors } from "../variables/variables"

const Head = styled.header`
    grid-area: header;
    background-color:${colors.primaryColor};
    display:flex;
    justify-content: space-between;
    width: 100%;
    padding:1.8rem 2.9rem;

    & > a{
        &>*{
            background:transparent;
            border:none;
        }
    }
`
const Logo = styled.div`
    box-shadow:0px 0px 0px 3px ${colors.secondaryColor};
    background-color:${colors.secondaryColor};
    border: 3px solid ${colors.primaryColor};
    align-items: center;
    border-radius:1.5rem;
    display:flex;
    width: 31rem;
    height:9.4rem;
    padding:20px;
    color:${colors.tertiaryColor};
    text-align:start;
    font-size:4rem;
`
const Badge = styled.img`
    max-block-size: 4.58rem;
    margin-right:15px;
`

const LogoText = styled.div`
    & > :first-child{
        text-transform:uppercase;
        margin-bottom:.4rem;
        font-size:2rem;
    }

    & > :last-child{
        font-size:1.2rem;
        letter-spacing:.18rem;
    }
`

const Searce = styled.div`
    align-items: center;
    position: relative;
    display:flex;

    &> input {
        border: solid .2rem ${colors.secondaryColor};
        background-color:${colors.tertiaryColor};
        border-radius:4rem;
        padding-left:3rem;
        font-size:3rem;
        width:42.3rem;
        height:4.8rem;
        display:flex;
    }

    &> button {
        background:transparent;
        position:absolute;
        border:none;
        right:10px;
    }

`
const UserSpace = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
width:150px;
&>*{
  &>*{
    font-size: 4rem ;
    color:${colors.tertiaryColor};
    border:none;
    background:transparent;
    transition: font-size 0.3s ease;
  &:hover{
    font-size:50px;
    cursor:pointer;
  }
}
`

export {
    Head,
    Logo,
    Badge,
    LogoText,
    Searce,
    UserSpace
}