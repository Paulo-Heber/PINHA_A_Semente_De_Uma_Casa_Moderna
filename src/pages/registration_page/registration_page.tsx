import { ContactInformation, FormContainer, LogContainer, RegistrationPageContainer, Slogan } from "../../styles/registration_page_style";

import { Button } from "../../components/button/buttton";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "../../components/header/header";


export function RegistrationPage() {
    return (
        <RegistrationPageContainer>
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
                        <label htmlFor="Name">Nome*</label>
                        <input type="text" />
                        <label htmlFor="fone">Telefone*</label>
                        <input type="text" />
                        <label htmlFor="email">Email*</label>
                        <input type="email" />
                        <label htmlFor="cpf">CPF*</label>
                        <input type="text" />
                        <label htmlFor="password">Senha*</label>
                        <input type="password" />
                        <label htmlFor="confirm-password">Confirmar Senha*</label>
                        <input type="password" />
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
        </RegistrationPageContainer>
    )
}