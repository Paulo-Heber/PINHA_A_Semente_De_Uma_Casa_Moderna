import { FormContainer, LogContainer, LogPageContainer, Slogan } from "./log_page_style";

import { Logo } from "../../components/Logo/logo";
import { Button } from "../../components/button/buttton";

import { Link } from "react-router-dom";



export function LogPage() {
    return (
        <LogPageContainer>
            <Slogan>
                <h1>
                    "O ambiente reflete o estado da nossa mente.
                    Crie um espaço que inspira paz, conforto e harmonia."
                </h1>
            </Slogan>
            <LogContainer>
                <Logo />
                <FormContainer>
                    <div>
                        <label htmlFor="cpf">CPF*</label>
                        <input type="text" placeholder="_ _ _ . _ _ _ . _ _ _ - _ _" />
                        <label htmlFor="password">Senha*</label>
                        <input type="password" placeholder="***********"/>
                    </div>
                    <Button label='ENTRAR' />
                    <Link to="/registration_page">
                        <p>Cadatre-se</p>
                    </Link>
                </FormContainer>
            </LogContainer>
        </LogPageContainer>
    )
}