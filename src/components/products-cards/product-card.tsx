import { Link } from 'react-router-dom';
import bedImg from '../../img/cama.jpg'
import { FornitureImg } from './product-card-style';

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