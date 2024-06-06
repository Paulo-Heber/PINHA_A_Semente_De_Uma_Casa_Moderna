import styled from "styled-components";
import WoodChair from "../../img/wood-chair.jpg"
import { colors } from "../../components/variables/variables";

export const LogPageContainer = styled.div`
display:flex;
height:100vh;
`

export const Slogan = styled.div`
    display:flex;
    width:50%;
    justify-content:center;
    align-items:center;
    color:white;
    background-image:url(${WoodChair});
    background-repeat:no-repeat;
    background-size:cover;
    font-size:5.4rem;
    padding:7rem;
    `

export const LogContainer = styled.div`
    width:50%;
    background:linear-gradient(to bottom, ${colors.primaryColor} 13.4%, ${colors.tertiaryColor} 13.4%);
    flex-direction:column;
    display:flex;   
    padding:4.3rem 6rem 1.5rem 6rem;
    `

export const FormContainer = styled.form`
    flex-direction:column;
    align-items:center;
    height:100%;
    display:flex;
    justify-content: center;
    flex:1;

    & > :first-child{
        display:flex;
        flex-direction:column;
        width:70%;
        justify-content:center;

        & > input {
            width:100%;
            height:4.4rem;
            border-radius:.4rem;
            border:1px solid;
            font-size:1.5rem;
            padding:1rem;
            margin-bottom:1.5rem;
            
        }

        & > label {
            font-size:1.5rem;
        }
    }


    & > button {
        width:70%;
        height:10%;
        background-color:${colors.primaryColor};
        color:${colors.tertiaryColor};
        font-weight:bold;
        border-radius:.6rem;
        border:none;
        font-size:1.4rem;
        margin-bottom:1.5rem;
    }

    & > button:hover {
        cursor: pointer;
        background-color:#77390f;
    }
    & > button:active {
        border-top: 4px solid #77390f;
        
    }

    & > :last-child{
        color:${colors.primaryColor};
        font-size:2.5rem;
        text-decoration:underline;
    }
`
