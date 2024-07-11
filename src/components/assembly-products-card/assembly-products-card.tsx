import { AssemblyProductsConteiner, AssemblyProductsInfos } from "./assembly-products-card-style"
import bedImg from '../../img/cama.jpg'
import { QuantityButtonSelector } from "../button/buttton"

export const AssemblyProductsCard = () => {
    return (
        <AssemblyProductsConteiner>
            <img src={bedImg} alt="" />
            <AssemblyProductsInfos>
                <p>Nome do material</p>
                <p>R$ 12,00 A vista</p>
                <p>ou 3 x 4,20</p>
                <QuantityButtonSelector label="Adicionar ao carrinho" />
            </AssemblyProductsInfos>
        </AssemblyProductsConteiner>
    )
}