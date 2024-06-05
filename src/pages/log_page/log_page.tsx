import { ContactInformation, FormContainer, LogContainer, LogPageContainer, Slogan } from "./log_page_style";

import { Logo } from "../../components/Logo/logo";
import { Button } from "../../components/button/buttton";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";


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
                    <Button label='FINALIZAR CADASTRO' />
                    <Link to="/log_page">
                        <p>Já possui cadastro?</p>
                    </Link>
                </FormContainer>
                <ContactInformation>
                    <p>pinhamoderna@gmail.com</p>
                    <a href="https://api.whatsapp.com/send/?phone=5588998602285&text&type=phone_number&app_absent=0" target="_blank">(88) 99860-2285</a>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                </ContactInformation>
            </LogContainer>
        </LogPageContainer>
    )
}