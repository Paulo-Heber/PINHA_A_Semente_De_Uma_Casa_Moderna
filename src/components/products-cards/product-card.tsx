import { Link } from 'react-router-dom';
import bedImg from '../../img/cama.jpg'
import { FeaturedProductInformation, FeaturedProductsContainer, FornitureImg } from './product-card-style';
import { FeaturedImg } from '../../pages/home/home-page-style';
import { Button } from '../button/buttton';
import { useCaroucelContext } from '../../hooks/useCaroucelContext';

export type productCardDataType = {
    name?: string;
    price?: number;
    img?: string;
    description?: string;
    backgroundColor?: string;
}

export const ProductCard = () => {
    return (
        <Link to='/product_information'>
            <FornitureImg src={bedImg} alt="imagen do móvel" />
        </Link>
    )
}

export const FeaturedProducts = () => {
    const { caroucelId } = useCaroucelContext();
    const productDataRange = 3;

    const featuredProductsData = [
        {
            name: 'a',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'red'
        },
        {
            name: 'a',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'green'
        },
        {
            name: 'a',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'blue'
        },
        {
            name: 'b',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'gray'
        },
        {
            name: 'b',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'orange'
        },
        {
            name: 'b',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'purple'
        },
        {
            name: 'c',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'pink'
        },
        {
            name: 'c',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: 'withe'
        },
        {
            name: 'c',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: '#156487'
        },
        {
            name: 'd',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: '#465873'
        },
        {
            name: 'd',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: '#123456'
        },
        {
            name: 'd',
            description: 'uma cama em mdf cinza',
            img: { bedImg },
            price: 800.00,
            carrocelcartcolor: '#987654'
        },
    ]

    let productDataGrouping = [];
    for (let i = 0; i < Math.ceil(featuredProductsData.length / productDataRange); i++) {
        const startCut = i * productDataRange;
        const endCut = startCut + productDataRange;
        productDataGrouping.push(featuredProductsData.slice(startCut, endCut));
    }

    const productsRender = (productData: typeof featuredProductsData) => (
        productData.slice(0, 3).map((data, index) => (
            <Link to='/' key={index}>
                <FeaturedProductsContainer backgroundColor={data.carrocelcartcolor}>
                    <FeaturedImg src={''} />
                    <FeaturedProductInformation>
                        <h2>{data.name}</h2>
                        <p> {data.description}</p>
                        <Button label="Adicionar ao carrinho" />
                    </FeaturedProductInformation>
                </FeaturedProductsContainer>
            </Link>
        ))
    )

    return (
        <>
            {productsRender(productDataGrouping[caroucelId])}
        </>
    )
}