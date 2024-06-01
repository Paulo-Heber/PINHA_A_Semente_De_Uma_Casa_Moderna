import logoImg from "../../img/logo.png"
import { } from "../../pages/registration_page/registration_page_style"
import { LogoContainer, Badge, LogoText } from "./logo_style"
export function Logo() {
    return (
        <LogoContainer>
            <div>
                <Badge src={logoImg} alt="logo" />
                <LogoText>
                    <h1>pinha</h1>
                    <p>A Semente da casa moderna</p>
                </LogoText>
            </div>
        </LogoContainer>
    )
} 