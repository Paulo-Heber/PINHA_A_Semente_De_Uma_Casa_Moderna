import { ColorMaterialContainer, FornitureInfos, ProductsInCartContainer } from '../../pages/shopping_cart/shopping_cart_style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { Button, QuantityButtonSelector } from '../button/buttton'

import { useCartContext } from '../../hooks/useCartContext'

import bedImg from '../../img/cama.jpg'
import { productsData } from '../banco-de-dados/banco-de-dados'


export const ProductsInCart = () => {
    const { removeFromCart, cartItems } = useCartContext()
    if (cartItems.length === 0) {
        return (
            <>
                <p>O carrinho está vazio, volte e escolha algo do teu interece</p>
                <Button to='/' label={'Voltar para a Home'} />
            </>
        )
        // Mostrar uma mensagem caso o carrinho esteja vazio.  
        // Implementar um botão para voltar para a tela inicial do app.  
        // Usar o hook useCartContext para acessar os items do carrinho.  
        // Remover o item do carrinho com o index passado como argumento.
        // Renderizar um botão de remover item caso o carrinho não esteja vazio. 

        // Adicionar um botão de finalizar pedido caso o carrinho não esteja vazio.  
        // Mostrar a soma dos preços dos items do carrinho.  
        // Mostrar a quantidade de items no carrinho.
    }

    interface ItemOfCart {
        img: string,
        name: string,
        id: number,
        paymentMethod: string[],
        colorMaterial: string,
        price: number,
        termPrice: number,
        quantity: number
    };

    /*
    Ao clicar no botão de adicionar ao carrinho, tenho que pegar o id do card que foi clicado e enviar esse id para fazer com que o return a baixo renderize o item no carrinho referent ao id passado
    */
    return (
        <>
            {cartItems.map((itemId: number, cartItemsIndex: number) => {
                console.log(`esse é o itemid: ${itemId}`);

                return (
                    <>
                        {productsData.map((itemData) => {
                            if (itemData.id === itemId) {
                                return (
                                    < ProductsInCartContainer >
                                        <img src={bedImg} alt="img do produto no carrinho" />
                                        <FornitureInfos>
                                            <p>{itemData.name}</p>
                                            <p>id:{itemData.id}</p>
                                            <select>
                                                {itemData.paymentMethod.map((payMethod: string) => { return <option>{payMethod}</option> })}
                                            </select>
                                            <ColorMaterialContainer>
                                                <p>Cor:</p>
                                                <span></span>
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
            })}
        </>
    )
}
