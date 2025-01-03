import { Header } from "../../components/header/header";
import { AvailableColors, MainView, PorductsInformationConteiner, Price, ProductDetails, ProductDetailsContainer, ProductPreview, ProductsConteiner, ProductsInformationPageDetails, SecondaryViews } from "../../styles/product-information-style";
import cama from '../../img/cama.jpg'
import { Button } from "../../components/button/buttton";

export function ProductInformation() {
    return (
        <ProductsInformationPageDetails>
            <Header />
            <ProductsConteiner>
                <h1>Aqui ficará o nome do móvel vindo da API</h1>
                <PorductsInformationConteiner>

                    <ProductPreview>
                        <MainView src={cama} alt="imagem grandona" />
                        <SecondaryViews>
                            <img src={cama} alt="mini imagens" />
                            <img src={cama} alt="mini imagens" />
                            <img src={cama} alt="mini imagens" />
                            <img src={cama} alt="mini imagens" />
                        </SecondaryViews>
                    </ProductPreview>
                    <ProductDetailsContainer>
                        <ProductDetails>
                            <h2 className="titulo">cores disponiveis</h2>
                            <AvailableColors className="cores">
                                <img src={cama} alt="imagem da cor (vem da api)" />
                                <img src={cama} alt="imagem da cor (vem da api)" />
                                <img src={cama} alt="imagem da cor (vem da api)" />
                                <img src={cama} alt="imagem da cor (vem da api)" />
                            </AvailableColors>
                            <Price className="preco">
                                <h3 className="precoMaior">R$ 00.000,00</h3>
                                <p>Ou em até 10x de R$ 000,00</p>
                            </Price>
                            <Button label={'adicionar ao carrinho'} />
                        </ProductDetails>
                    </ProductDetailsContainer>

                </PorductsInformationConteiner>
                {/* --------------------SERÁ EXCLUIDO-------------- */}
                {/* <Navegation /> */}
                {/* --------------------SERÁ EXCLUIDO-------------- */}
            </ProductsConteiner>
        </ProductsInformationPageDetails>

    )
}