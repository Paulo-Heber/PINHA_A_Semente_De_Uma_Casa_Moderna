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
        transition: font-size 1s ease;
    &:hover{
    cursor:pointer;
    scale:1.1;
    }
    }
    `
const CartIcon = styled.div`
position: relative;

&>:first-child{
    color:${colors.tertiaryColor};
    border-radius:50%;
    background-color: red;
    position:absolute;
    width:1.5rem;
    height:1.5rem;
    right:-3px;
    top:-8px;
    font-size:1.5rem;
}
    &>:last-child{
        width:50px;
        height:34px;
    }
 
`

export {
    Head,
    Searce,
    UserSpace,
    CartIcon
}