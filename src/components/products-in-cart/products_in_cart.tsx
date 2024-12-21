import { ColorMaterialContainer, FornitureInfos, MaterialBoxColor, ProductsInCartContainer } from '../../pages/shopping_cart/shopping_cart_style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Button, QuantityButtonSelector } from '../button/buttton'

import { useCartContext } from '../../hooks/useCartContext'

import bedImg from '../../img/cama.jpg'
import { mdfColors, productsData } from '../banco-de-dados/banco-de-dados'
import { useState } from 'react'
import { CartItem } from '../contexts/cart-context'

const findCartItemIndex = (cartItems: CartItem[], itemId: number) =>
    cartItems.findIndex(cartData => cartData.item.id === itemId)

export const ProductsInCart = () => {
    const { removeFromCart, cartItems, updateCartItem } = useCartContext()
    const [showColorOptions, setShowColorOptions] = useState(new Array(productsData.length).fill(false));

    const renderColorsContainer = (itemId: number) => {
        const index = findCartItemIndex(cartItems, itemId);

        const updateColorsOptions = (newOption: boolean) => {
            const newShowColorOption = [...showColorOptions];
            newShowColorOption[index] = newOption;
            setShowColorOptions(newShowColorOption);
        }

        const updateColorsSelected = (newColor: string) => {
            updateCartItem({
                item: {
                    id: itemId,
                    quantity: cartItems[index].item.quantity,
                    color: newColor
                }
            });
        }

        if (showColorOptions[index] === false) {
            return (
                <MaterialBoxColor
                    mdfColor={cartItems[index].item.color}
                    onClick={() => {
                        updateColorsOptions(true);
                    }} />)
        }
        else if (showColorOptions[index] === true) {
            return mdfColors.map((color: string, index: number) => {
                return <MaterialBoxColor
                    key={index}
                    mdfColor={color}
                    onClick={() => {
                        updateColorsSelected(color);
                        updateColorsOptions(false);
                    }}
                />
            })
        }
    }

    if (cartItems.length === 0) {
        return (
            <>
                <p>O carrinho está vazio, volte e escolha algo do teu interece</p>
                <Button to='/' label={'Voltar para a Home'} />
            </>
        )
    }

    return (
        <>
            {cartItems.map((cartData: CartItem, cartItemsIndex: number) => {
                const itemData = productsData.find(item => item.id === cartData.item.id);
                if (itemData) {
                    return (
                        < ProductsInCartContainer key={itemData.id}>
                            <img src={bedImg} alt="img do produto no carrinho" />
                            <FornitureInfos>
                                <p>{itemData.name}</p>
                                <p>id:{itemData.id}</p>
                                <select>
                                    {itemData.paymentMethod.map((payMethod: string, index: number) => {
                                        return <option key={index}>{payMethod}</option>
                                    })}
                                </select>
                                <ColorMaterialContainer>
                                    <p>Cor:</p>
                                    {renderColorsContainer(cartData.item.id)}
                                </ColorMaterialContainer>
                                <p>R$ {itemData.price}</p>
                                <p>a prazo Ou 15x de R$ 1,00</p>
                                <QuantityButtonSelector
                                    label="FINALIZAR PEDIDO"
                                    itemId={cartData.item.id}
                                />
                            </FornitureInfos>
                            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeFromCart(cartItemsIndex)} />
                        </ProductsInCartContainer >
                    )
                }

            })}
        </>
    )
}

