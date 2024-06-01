import styled from "styled-components";
import WoodChair from "../../img/wood-chair.png"
import { colors } from "../../components/variables/variables";
export const RegistrationPageContainer = styled.div`
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
    `

export const LogContainer = styled.div`
    width:50%;
    background:linear-gradient(to bottom, ${colors.primaryColor} 13.4%, ${colors.tertiaryColor} 13.4%);
    flex-direction:column;
    display:flex;   
    padding:4.3rem 6rem;
    `

export const FormContainer = styled.form`
flex-direction:column;
align-items:center;
display:flex;
height:80%;

    & > input {
        width:70%;
        height:10%;
    }

    & > button {
        width:70%;
        height:12%;
        background-color:${colors.primaryColor};
        color:${colors.tertiaryColor};
        font-weight:bold;
        border-radius:.6rem;
        border:none;
        margin:.5rem 0;
        font-size:1.4rem;
    }

    & > :last-child{
        color:${colors.primaryColor};
        font-size:3rem;
    text-decoration:underline;
    }
`

export const ContactInformation = styled.div`
    align-items:center;
    flex-direction:column;
    font-size:3rem;
    display:flex;
    color:${colors.primaryColor};

    & > :first-child{
        font-weight:bold;
    }
    
    & > :nth-child(2){
        margin-block:.5 rem
    }

    & > :last-child{
        font-size:3.4rem;
        display:flex;
        gap:1rem;
    }
`