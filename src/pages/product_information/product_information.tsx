import { Header } from "../../components/header/header";
import { AvailableColors, MainView, PorductsInformationConteiner, Price, ProductDetails, ProductDetailsContainer, ProductPreview, ProductsConteiner, SecondaryViews } from "./product-information-style";
import cama from '../../img/cama.jpg'

export function ProductInformation() {
    return (
        <>
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
                            <h2 className="titul">cores disponiveis</h2>
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
                            <button>adicionar ao carrinho</button>
                        </ProductDetails>
                    </ProductDetailsContainer>
                </PorductsInformationConteiner>
                {/* --------------------SERÁ EXCLUIDO-------------- */}
                {/* <Navegation /> */}
                {/* --------------------SERÁ EXCLUIDO-------------- */}
            </ProductsConteiner>
        </>

    )
}