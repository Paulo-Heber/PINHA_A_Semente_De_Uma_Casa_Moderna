import { Header } from "../../components/header/header.tsx";
import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido.tsx";

export function HomePage() {
    return (
        <>
            <Header />
            <h1>Essa é a página inicial</h1>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </>
    )
}