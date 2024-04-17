import bedImg from '../../img/cama.jpg'

type productCardInfos = {
    name: string;
    price: number;
    value: string;
    img: string;
}

const productCardInfos:productCardInfos= {
    name: 'oi',
    price: 15,
    value: 'ased',
    img: 'oi'
}

export const ProductCard = () => {
    return (
        <img src={bedImg} alt="imagen do móvel" />
    )
}