import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home/home_page";
import { Environments } from "./environments/environments";
import { LogPage } from "./log_page/log_page";
import { ProductInformation } from "./product_information/product_information";
import { ProductionMaterials } from "./production_materials/production_materials";
import { RegistrationPage } from "./registration_page/registration_page";
import { ShoppingCart } from "./shopping_cart/shopping_cart";


const router = createBrowserRouter([{ path: "*", Component: Root }])

export function RootRouter() { return <RouterProvider router={router} /> }
function Root() {
    return (
        <>
            <Routes>
                <Route path="/production_materials" element={<ProductionMaterials />} />
                <Route path="/product_information" element={<ProductInformation />} />
                <Route path="/registration_page" element={<RegistrationPage />} />
                <Route path="/shopping_cart" element={<ShoppingCart />} />
                <Route path="/environments" element={<Environments />} />
                <Route path="/log_page" element={<LogPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}