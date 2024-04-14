import { Header } from "../../components/header/header.tsx";
import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";

export function HomePage() {
    return (
        <>
            <Header />
            <Menu />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </>
    )
}