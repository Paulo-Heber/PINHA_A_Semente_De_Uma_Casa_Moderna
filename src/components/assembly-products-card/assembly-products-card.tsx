import { AssemblyProductsConteiner, AssemblyProductsInfos, QuantityButtonContainer, QuantitySelector } from "./assembly-products-card-style"
import bedImg from '../../img/cama.jpg'
import { Button } from "../button/buttton"

export const AssemblyProductsCard = () => {
    return (
        <AssemblyProductsConteiner>
            <img src={bedImg} alt="" />
            <AssemblyProductsInfos>
                <p>Nome do material</p>
                <p>R$ 12,00 A vista</p>
                <p>ou 3 x 4,20</p>
                <QuantityButtonContainer>
                    <Button label="Adicionar ao carrinho" />
                    <QuantitySelector>
                        <p>-</p>
                        <p>0</p>
                        <p>+</p>
                    </QuantitySelector>
                </QuantityButtonContainer>
            </AssemblyProductsInfos>
        </AssemblyProductsConteiner>
    )
}