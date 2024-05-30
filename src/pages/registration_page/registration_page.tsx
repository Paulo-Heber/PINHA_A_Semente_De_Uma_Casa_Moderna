import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido";
import { FormContainer, LogContainer, LogoContainer, RegistrationPageContainer, Slogan } from "./registration_page_style";
import WoodChair from "../../img/wood-chair.png";

export function RegistrationPage() {
    return (
        <RegistrationPageContainer>
            <Slogan />
            <LogContainer>
                <LogoContainer />
                <FormContainer />
            </LogContainer>
        </RegistrationPageContainer>
    )
}