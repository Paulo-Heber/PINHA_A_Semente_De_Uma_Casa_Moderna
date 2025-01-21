import styled from "styled-components"
import { colors } from "../components/variables/variables"

const Head = styled.header`
    grid-area: header;
    background-color:${colors.primaryColor};
    display:flex;
    justify-content: space-between;
    width: 100%;
    padding:1.8rem 2.9rem;
    flex:1; 

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
    margin-inline:3rem 0;
    flex:1;
    margin-inline:1.5rem;
    
    &> input {
        border: solid .2rem ${colors.secondaryColor};
        background-color:${colors.tertiaryColor};
        border-radius:4rem;
        padding-left:3rem;
        font-size:2rem;
        height:4.8rem;
        display:flex;
        flex:1;
       
    }

    &>:last-child {
        position:absolute;
        right:1.5rem;
        font-size:2.5rem;
        color:gray;
    }

`
const UserSpace = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
width:150px;


&>*{
font-size:4rem;

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


const CartIcon = styled.div<{ $sumitems: number }>`
position: relative;

&>:first-child{
    color:${colors.tertiaryColor};
    border-radius:50%;
    background-color: ${(props) => (props.$sumitems > 0 ? 'red' : 'transparent')};
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