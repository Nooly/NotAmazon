import Rating from '../Shared/Rating';
import { PropTypes, Card, Button, Link } from '../../imports.js';

const Product = ({ product }) => {
  return (
    <Card className='product-card mb-4'>
      <Link to={`/product/${product.token}`}>
        <Card.Img variant='top' src={product.image} alt={product.title} />
      </Link>
      <Card.Body className='card-body'>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating rating={product.rating.rate} numReviews={product.rating.count} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? <Button variant='light' disabled>Out of Stock</Button> :
          <Button className='btn-primary'>Add to Cart</Button>}
      </Card.Body>
    </Card>
  )
}

Product.propTypes = { product: PropTypes.object }
export default Product