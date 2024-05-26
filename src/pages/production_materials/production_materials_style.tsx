import styled from "styled-components";
import { colors } from "../../components/variables/variables";

export const ProductionMaterialsPage = styled.div`
    grid-template-columns: 17.7% 1fr;
    grid-template-rows:20.3vh calc(100vh - 20.3vh);
    display:grid;
    grid-template-areas:
    "header header "
    "navegation materials ";
`
export const MaterialsContainer = styled.div`
    grid-area:materials;
    background-color:${colors.tertiaryColor};
    text-align:center;
    letter-spacing:.256rem;
    overflow-y: scroll;

    & > :first-child{
        font-size:3rem;
        margin-block:2rem;
    }
`



