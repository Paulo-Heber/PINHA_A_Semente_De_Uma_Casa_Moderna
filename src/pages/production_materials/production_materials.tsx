import { Navegation } from "../../components/a-ser-excluido/navegacao-documento-excluido";
import { AssemblyProductsCard } from "../../components/assembly-products-card/assembly-products-card";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/navigation-menu/menu";

import { MaterialsContainer, ProductionMaterialsPage } from "./production_materials_style";

export function ProductionMaterials() {
    return (
        <ProductionMaterialsPage>
            <Header />
            <MaterialsContainer>
                <h2>Ferragens e utensílios de montagem</h2>
                <AssemblyProductsCard />
                <AssemblyProductsCard />
                <AssemblyProductsCard />
                <AssemblyProductsCard />
                <AssemblyProductsCard />
                <AssemblyProductsCard />
            </MaterialsContainer>
            <Menu/>
        </ProductionMaterialsPage>
    )
}
{/* --------------------SERÁ EXCLUIDO-------------- */ }
{/* <Navegation /> */ }
{/* --------------------SERÁ EXCLUIDO-------------- */ }