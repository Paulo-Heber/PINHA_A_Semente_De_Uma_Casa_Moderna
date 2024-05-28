import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bedImg from '../../img/cama.jpg'
import { FornitureInfos, ProductsInCartContainer } from '../../pages/shopping_cart/shopping_cart_style'
import { QuantityButtonSelector } from '../button/buttton'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const ProductsInCart = () => {
    return (
        <ProductsInCartContainer>

            <img src={bedImg} alt="img do produto no carrinho" />

            <FornitureInfos>
                <p>Nome do móvel</p>
                <p>id</p>
                <p>Forma de pagamento</p>
                <div>
                    <p>cor:</p>
                    <span></span>   
                </div>
                <p>R$ 15,00</p>
                <p>Ou 15x de R$ 1,00</p>
                <QuantityButtonSelector label="Finalizar Pedido" />
            </FornitureInfos>
            
            <FontAwesomeIcon icon={faTrashAlt} />

        </ProductsInCartContainer>
    )
}