import { Link } from "react-router-dom"
import { QuantityButtonContainer, QuantitySelector } from "../assembly-products-card/assembly-products-card-style";
import { useCartContext } from "../../hooks/useCartContext";
import { CartItem } from "../contexts/cart-context";

interface ButtonProps {
    to?: string;
    buttonType?: string;
    label: any;
    itemId?: number;
}

const findCartItemIndex = (cartItems: CartItem[], itemId: number) => cartItems.findIndex(cartData => cartData.item.id === itemId)

const isItemInCart = (cartItems: CartItem[], itemId: number) => findCartItemIndex(cartItems, itemId) !== -1;

export function Button({ to, label, itemId }: ButtonProps) {
    const { addToCart, updateCartItem, cartItems } = useCartContext();

    const handleAddToCart = () => {
        if (itemId == null) return;

        if (!isItemInCart(cartItems, itemId)) {
            addToCart({
                item: {
                    id: itemId,
                    quantity: 1,
                    color: '#ffffff'
                }
            });
        } else {
            const itemIndex = findCartItemIndex(cartItems, itemId);
            updateCartItem({
                item: {
                    id: itemId,
                    quantity: cartItems[itemIndex].item.quantity + 1,
                    color: cartItems[itemIndex].item.color
                }
            })
        }

    }

    if (to) {
        return (
            <Link to={to}>
                <button>{label}</button>
            </Link>
        );
    }

    if (label.toLowerCase() === 'adicionar ao carrinho') return <button onClick={() => handleAddToCart()}> {label}</button >

    return <button>{label}</button>

}
export function QuantityButtonSelector({ label, itemId }: ButtonProps) {
    const { cartItems, updateCartItem } = useCartContext();

    if (itemId == undefined) {
        console.error('Erro: itemId não foi fornecido para o QuantityButtonSelector.');
        return null;
    }

    const itemIndex = findCartItemIndex(cartItems, itemId);

    if (itemIndex === -1) {
        console.warn(`Aviso: itemId ${itemId} não encontrado no carrinho.`);
        return (
            <QuantityButtonContainer>
                <Button label={label} />
                <QuantitySelector>
                    <p>-</p>
                    <p>0</p>
                    <p>+</p>
                </QuantitySelector>
            </QuantityButtonContainer>
        );
    }

    const updateCartItemQuantity = (action: '+' | '-') => {

        const currentQuantity = cartItems[itemIndex].item.quantity;
        const newQuantity = action === '+' ? currentQuantity + 1 : Math.max(1, currentQuantity - 1);

        updateCartItem({
            item: {
                id: itemId,
                quantity: newQuantity,
                color: cartItems[itemIndex].item.color
            }
        })
    }

    return (
        <QuantityButtonContainer>
            <Button label={label} />
            <QuantitySelector>
                <p onClick={() => updateCartItemQuantity('-')}>-</p>
                <p>{cartItems[itemIndex].item.quantity}</p>
                <p onClick={() => updateCartItemQuantity('+')}>+</p>
            </QuantitySelector>
        </QuantityButtonContainer>
    )
}

