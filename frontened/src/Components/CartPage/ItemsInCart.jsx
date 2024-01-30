import { React, PropTypes, Link, ListGroup, Button, Row, Col } from "../../imports.js"
import MessageBox from "../Shared/MessageBox.jsx";

const ItemsInCart = ({ cartItems, updateCartHandler }) => {
    return (
        <div>
            {cartItems.length === 0 ? <MessageBox>Your cart is empty <Link to={"/"}>Go back to your home page.</Link></MessageBox> :
                <ListGroup>
                    {cartItems.map((item) => (
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={8}>
                                    <img src={item.image} alt={item.title} className="img-fluid rounded img-thumbnail"></img>
                                    <Link to={`/product/${item.token}`}>{item.title}</Link>
                                </Col>
                                <Col md={2}>
                                    <Button onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1} variant="light">
                                        <i className="fa fa-minus-circle"></i>
                                    </Button>
                                    <span> {item.quantity} </span>
                                    <Button onClick={() => updateCartHandler(item, item.quantity + 1)} variant="light">
                                        <i className="fa fa-plus-circle"></i>
                                    </Button>
                                </Col>
                                <Col md={1}>{item.price}$</Col>
                                <Col md={1}></Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>}
        </div>
    )
}

ItemsInCart.protoTypes = { cartItems: PropTypes.array, updateCartHandler: PropTypes.func }

export default ItemsInCart;