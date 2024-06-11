import { Link } from 'react-router-dom';
import bedImg from '../../img/cama.jpg'
import { FeaturedProductInformation, FeaturedProductsContainer, FornitureImg } from './product-card-style';
import { FeaturedImg } from '../../pages/home/home-page-style';
import { Button } from '../button/buttton';

type productCardInfos = {
    name: string;
    price: number;
    value: string;
    img: string;
}

const productCardInfos: productCardInfos = {
    name: 'oi',
    price: 15,
    value: 'ased',
    img: 'oi'
}

export const ProductCard = () => {
    return (
        <Link to='/product_information'>
            <FornitureImg src={bedImg} alt="imagen do móvel" />
        </Link>
    )
}

export const FeaturedProducts= () => {
    return (
        <Link to='/'>
            <FeaturedProductsContainer>
                <FeaturedImg src={bedImg} />
                <FeaturedProductInformation>
                    <h2>nome do móvel</h2>
                    <p> É a descrição do móvel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam vero rem eius.</p>
                    <Button label="Adicionar ao carrinho"/>
                </FeaturedProductInformation>
            </FeaturedProductsContainer>
        </Link>
    )
}