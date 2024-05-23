import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido";
import { AssemblyProductsCard } from "../../components/assembly-products-card/assembly-products-card";
import { Header } from "../../components/header/header";
import { Summary } from "../../components/summary/summary";

import { Materials, ProductionMaterialsConteiner } from "./production_materials_style";

export function ProductionMaterials() {
    return (
        <ProductionMaterialsConteiner>
            <Header />
            <Materials>
                <h2>Ferragens e utensílios de montagem</h2>
                <AssemblyProductsCard />
            </Materials>
            <Summary />
        </ProductionMaterialsConteiner>
    )
}
{/* --------------------SERÁ EXCLUIDO-------------- */ }
{/* <Navegation /> */ }
{/* --------------------SERÁ EXCLUIDO-------------- */ }