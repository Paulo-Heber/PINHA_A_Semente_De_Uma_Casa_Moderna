import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bedImg from '../../img/cama.jpg'
import { ColorMaterialContainer, FornitureInfos, ProductsInCartContainer } from '../../pages/shopping_cart/shopping_cart_style'
import { Button, QuantityButtonSelector } from '../button/buttton'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../hooks/useCartContext'

export const ProductsInCart = () => {

    const { removeFromCart, cartItems } = useCartContext()

    if (cartItems.length === 0) {
        return (
            <>
                <p>Carrinho vazio</p>
                <Button label={'Voltar para a Home'} />
            </>
        )
        // Mostrar uma mensagem caso o carrinho esteja vazio.  
        // Implementar um botão para voltar para a tela inicial do app.  
        // Usar o hook useCartContext para acessar os items do carrinho.  
        // Remover o item do carrinho com o index passado como argumento.
        // Renderizar um botão de remover item caso o carrinho não esteja vazio.  
        // Adicionar um botão de finalizar pedido caso o carrinho não esteja vazio.  
        // Renderizar um botão de finalizar pedido caso o carrinho esteja vazio.  
        // Mostrar a soma dos preços dos items do carrinho.  
        // Mostrar a quantidade de items no carrinho.
    }
    return (
        <>
            {cartItems.map((/*item: any,*/ index: number) => {
                return (
                    <>
                        < ProductsInCartContainer >
                            <img src={bedImg} alt="img do produto no carrinho" />
                            <FornitureInfos>
                                <p>Nome do móvel</p>
                                <p>id</p>
                                <p>Forma de pagamento</p>
                                <ColorMaterialContainer>
                                    <p>Cor:</p>
                                    <span></span>
                                </ColorMaterialContainer>
                                <p>R$ 15,00</p>
                                <p>Ou 15x de R$ 1,00</p>
                                <QuantityButtonSelector label="FINALIZAR PEDIDO" />
                            </FornitureInfos>
                            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeFromCart(index)} />
                        </ProductsInCartContainer >
                    </>
                )
            })}
        </>
    )
}
