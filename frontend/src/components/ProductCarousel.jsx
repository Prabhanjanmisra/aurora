import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import Loader from "./Loader";
import Message from "./Message";

const ProductCarousel = () => {
    const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? <Loader /> : error ? <Message variant='danger'>{error?.data?.message || error.error}</Message> : (
    <Carousel pause='hover' className='bg-dark mb-4'>
        {products.map(product => (
            <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} style={{width: '50%'}} />
                    <Carousel.Caption className='carousel-caption'>
                        <h2>{product.name} (${product.price})</h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default ProductCarousel