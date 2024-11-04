import { ColorMaterialContainer, FornitureInfos, MaterialBoxColor, ProductsInCartContainer } from '../../pages/shopping_cart/shopping_cart_style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Button, QuantityButtonSelector } from '../button/buttton'

import { useCartContext } from '../../hooks/useCartContext'

import bedImg from '../../img/cama.jpg'
import { mdfColors, productsData } from '../banco-de-dados/banco-de-dados'
import { useState } from 'react'



export const ProductsInCart = () => {

    const { removeFromCart, cartItems } = useCartContext()
    const [colorSelected, setColorSelected] = useState(new Array(productsData.length).fill('#ffffff'));
    const [showColorOptions, setShowColorOptions] = useState(new Array(productsData.length).fill(false));

    const renderColorsContainer = (itemId: number) => {

        const updateColorsOptions = (itemId: number, newOption: boolean) => {
            const newShowColorOption = [...showColorOptions];
            newShowColorOption[itemId] = newOption;
            setShowColorOptions(newShowColorOption);
        }

        const updateColorsSelected = (colorId: number, newColor: string) => {
            const newColorSelected = [...colorSelected];
            newColorSelected[colorId] = newColor;
            setColorSelected(newColorSelected);
        }

        if (showColorOptions[itemId] === false) {
            return (
                <MaterialBoxColor
                    mdfColor={colorSelected[itemId]}
                    onClick={() => {
                        updateColorsOptions(itemId, true);
                    }} />)
        }
        else if (showColorOptions[itemId] === true) {
            return mdfColors.map((color: string, index: number) => {
                return <MaterialBoxColor
                    key={index}
                    mdfColor={color}
                    onClick={() => { updateColorsSelected(itemId, color); updateColorsOptions(itemId, false); }}
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
            {cartItems.map((itemId: number, cartItemsIndex: number) => {
                const itemData = productsData.find(item => item.id === itemId);
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
                                    {renderColorsContainer(itemId)}
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

/* ---- COISAS A SE FAZER ---------
1. Mostrar a quantidade de items no carrinho.
2. Quando mudar a quantidade de items a serem comprados, atualizar o preço de acordo
3. Concertar o bug de apagar os itens do carrinho.
4. Quando adicionar mais de um mesmo item no carrinho, atualizar apenas o botão de quantidade e não
criar mais um card de produto

Quando clicar no botão de adicionar ao carrinho, VERIFICAR se ja tem algum produto com o mesmo id,
se sim, somar um ao valor do botão de quantidade

    1. Verificar: Utilizando o find no array cartItems ( cartIds ) comparar se o props.itemId === cartIds enviado pelo botão tiver um id correspondente caso tenha, no cartItens, chamar a função IncrementItem
*/

