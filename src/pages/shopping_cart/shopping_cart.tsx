import { Header } from "../../components/header/header";
import { ProductsInCart } from "../../components/products-in-cart/products_in_cart";
import { TotalPrice } from "../../components/total-price/total-price";
import { CartContainer, ShoppingCartContainer } from "./shopping_cart_style";

export function ShoppingCart() {
    return (
        <ShoppingCartContainer>
            <Header />
            <CartContainer>
                <h2>CARRINHO</h2>
                <ProductsInCart />
                <TotalPrice />
            </CartContainer>
        </ShoppingCartContainer>
    )
}