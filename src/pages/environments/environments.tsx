import styled from "styled-components";
import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido";
import { Header } from "../../components/header/header";

export function Environments() {
    return (
        <>
            <Header />
            <H1>
            📝ENVIRONMENTS se refere ao meio ambiente, nesse contexto é melhor usar SPACES ou ROOMS 🙃
            </H1>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </>
    )
}
const H1 = styled.h1`
background:red;
height:50vh;
display:flex;
align-items: center;
`