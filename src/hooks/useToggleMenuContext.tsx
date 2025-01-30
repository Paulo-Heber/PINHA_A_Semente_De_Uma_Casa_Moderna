import { useContext } from "react";
import { ToggleMenuContext } from "../components/contexts/toggle-menu-context"


export function useToggleMenuContext() {
    const toggleMenu = useContext(ToggleMenuContext);

    if (toggleMenu === undefined) {
        throw new Error('Não está dentro do contexto do Menu');
    }
    return toggleMenu;
}