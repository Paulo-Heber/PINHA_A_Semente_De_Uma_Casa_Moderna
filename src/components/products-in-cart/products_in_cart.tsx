import { ColorMaterialContainer, FornitureInfos, MaterialBoxColor, ProductsInCartContainer } from '../../pages/shopping_cart/shopping_cart_style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Button, QuantityButtonSelector } from '../button/buttton'

import { useCartContext } from '../../hooks/useCartContext'

import bedImg from '../../img/cama.jpg'
import { materialsData, mdfColors, productsData } from '../banco-de-dados/banco-de-dados'
import { useState } from 'react'


export const ProductsInCart = () => {

    const { removeFromCart, cartItems } = useCartContext()

    const [colorSelected, setColorSelected] = useState('#ffffff')
    const [showColorOptions, setShowColorOptions] = useState(false)

    const renderColorsContainer = () => {
        if (showColorOptions === false) { return <MaterialBoxColor mdfColor={colorSelected} onClick={() => setShowColorOptions(true)} /> }
        else if (showColorOptions === true) {
            return mdfColors.map((color: string, index: number) => {
                return <MaterialBoxColor 
                            key={index} 
                            mdfColor={color} 
                            onClick={() => { setColorSelected(color); setShowColorOptions(false) }}
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
        // Mostrar a quantidade de items no carrinho.
    }

    return (
        <>
            {cartItems.map((itemId: number, cartItemsIndex: number) => {
                const itemData = productsData.find(item => item.id === itemId);
                const materialData = materialsData.find(item => item.id === itemId);
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
                                    {/**/}
                                    {renderColorsContainer()}
                                </ColorMaterialContainer>
                                <p>R$ {itemData.price}</p>
                                <p>a prazo Ou 15x de R$ 1,00</p>
                                <QuantityButtonSelector label="FINALIZAR PEDIDO" />
                            </FornitureInfos>
                            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeFromCart(cartItemsIndex)} />
                        </ProductsInCartContainer >
                    )
                }

            })}
        </>
    )
}
