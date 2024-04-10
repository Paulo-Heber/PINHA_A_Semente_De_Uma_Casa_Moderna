import { Button } from "../button/buttton";

export function Navegation() {
    return (
        <>
            <Button to="/" label={`ir para home` }/>
            <Button to="/log_page" label={"ir para log_page"} />
            <Button to="/environments" label={"ir para environments"}/>
            <Button to="/product_information"label={"ir para product_information"} />
            <Button to="/production_materials" label={"ir para production_materials"} />
            <Button to="/registration_page" label={"ir para registration_page"}/>
            <Button to="/shopping_cart" label={"ir para "} />
        </>
    )
}
