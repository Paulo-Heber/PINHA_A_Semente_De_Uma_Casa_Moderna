import { createContext, useState } from "react";

interface ToggleMenuTypes {
    toggleMenu: boolean;
    handleMenuToggle: (state: boolean) => void;
}

export const ToggleMenuContext = createContext<ToggleMenuTypes | undefined>(undefined);

interface ToggleMenuProps {
    children: React.ReactNode;
}
export const ToggleMenuContextProvider: React.FC<ToggleMenuProps> = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(true);

    function handleMenuToggle(state: boolean) {
        state ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (<ToggleMenuContext.Provider value={{ toggleMenu, handleMenuToggle }}>{children}</ToggleMenuContext.Provider>)
}   