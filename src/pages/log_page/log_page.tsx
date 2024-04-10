import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido";
import { Header } from "../../components/header/header";

export function LogPage() {
    return (
        <>
            <Header />
            <h1>página de loguin</h1>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </>
    )
}