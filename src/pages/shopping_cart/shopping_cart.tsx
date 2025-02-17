import { Header } from "../../components/header/header";
import { ProductsInCart } from "../../components/products-in-cart/products_in_cart";
import { TotalPriceContainer } from "../../components/total-price/total-price";
import { useCartContext } from "../../hooks/useCartContext";
import { CartContainer, ShoppingCartContainer } from "../../styles/shopping_cart_style";

export function ShoppingCart() {
    const { cartItems } = useCartContext()
    const cartWithItems = cartItems.length > 0 ? true : false;

    return (
        <ShoppingCartContainer>
            <Header />
            <CartContainer>
                <h2>CARRINHO</h2>
                <ProductsInCart />
                {cartWithItems ? <TotalPriceContainer /> : null}
            </CartContainer>
        </ShoppingCartContainer>
    )
}