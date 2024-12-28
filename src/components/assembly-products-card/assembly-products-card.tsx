import { AssemblyProductsConteiner, AssemblyProductsInfos } from "../../styles/assembly-products-card-style"
import { QuantityButtonSelector } from "../button/buttton"
import { productsMaterialsData } from "../../services/banco-de-dados"
export const AssemblyProductsCard = () => {
    const renderProductsMaterial = () => {
        return productsMaterialsData.map((material) => (
            <AssemblyProductsConteiner key={material.id}>
                <img src={material.img} alt="" />
                <AssemblyProductsInfos>
                    <p>{material.name}</p>
                    <p>{material.price}</p>

                    <QuantityButtonSelector label="Adicionar ao carrinho" itemId={material.id} />
                </AssemblyProductsInfos>
            </AssemblyProductsConteiner>
        ))
    }
    return renderProductsMaterial()
}