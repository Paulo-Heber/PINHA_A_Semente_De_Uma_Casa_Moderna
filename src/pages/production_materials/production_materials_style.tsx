import styled from "styled-components";
import { colors } from "../../components/variables/variables";

export const ProductionMaterialsConteiner = styled.div`
grid-template-columns:1fr 17.7%;
grid-template-rows:20.3vh calc(100vh - 20.3vh);
display:grid;
grid-template-areas:
"header header "
"materials summary";


`
export const Materials = styled.div`
    grid-area:materials;
    background-color:${colors.tertiaryColor};
    text-align:center;
    letter-spacing:.256rem;
    & > :first-child{
        font-size:3rem;
        margin-block:2rem;
    }
`



