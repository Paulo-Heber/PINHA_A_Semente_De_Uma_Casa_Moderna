import { MaterialList, SummaryContainer } from "./summary-style";

const RetornoDaAPI = {
    nome: ["Material1","Material2","Material3","Material4","Material5"]
}

export const Summary = () => {
    let UtensiliosDeMontagem = RetornoDaAPI.nome.map((material) =>{return <li>{material}</li>});

    return (
        <SummaryContainer>
            <h2>Sumário</h2>
            <MaterialList>
                {UtensiliosDeMontagem}
            </MaterialList>
        </SummaryContainer>
    )
}