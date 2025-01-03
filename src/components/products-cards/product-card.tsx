import { Link } from 'react-router-dom';
import bedImg from '../../img/cama.jpg'
import { FeaturedProductInformation, FeaturedProductsContainer, FornitureImg } from '../../styles/product-card-style';
import { FeaturedImg } from '../../styles/home-page-style';
import { Button } from '../button/buttton';
import { useCaroucelContext } from '../../hooks/useCaroucelContext';
import { productsData } from '../../services/banco-de-dados';

export type productCardDataType = {
    id?: number,
    img?: string;
    name?: string;
    price?: number;
    quantity?: number
    termPrice?: number,
    description?: string;
    colorMaterial?: string,
    paymentMethod?: string[],
}

export type mdfColors = {
    $mdfColor: string;
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

    const productDataGrouping = [];
    for (let i = 0; i < Math.ceil(productsData.length / productDataRange); i++) {
        const startCut = i * productDataRange;
        const endCut = startCut + productDataRange;
        productDataGrouping.push(productsData.slice(startCut, endCut));
    }

    const productsRender = (productData: typeof productsData) => (
        productData.slice(0, 3).map((data, index) => {
            return (
                <Link to='/' key={index}>
                    <FeaturedProductsContainer >
                        <FeaturedImg src={''} />
                        <FeaturedProductInformation>
                            <h2>{data.name}</h2>
                            <p> {data.description}</p>
                            <Button label="Adicionar ao carrinho" itemId={data.id} />
                        </FeaturedProductInformation>
                    </FeaturedProductsContainer>
                </Link>
            )
        })
    )

    return (
        <>
            {productsRender(productDataGrouping[caroucelId])}
        </>
    )
}