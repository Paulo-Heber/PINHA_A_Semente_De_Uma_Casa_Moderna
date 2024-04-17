import { Header } from "../../components/header/header.tsx";
import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido.tsx";
import { Menu } from "../../components/navigation-menu/menu.tsx";
import { Suggested } from "../../components/suggested/suggested.tsx";
import { Main } from "./home-page-style.tsx";
export function HomePage() {
    return (
        <>
            <Header />
            <Main>
                <Menu />
                <Suggested />
            </Main>
            {/* --------------------SERÁ EXCLUIDO-------------- */}
            <Navegation />
            {/* --------------------SERÁ EXCLUIDO-------------- */}
        </>
    )
}