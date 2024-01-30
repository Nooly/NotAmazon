import { Button, Card, ListGroup, PropTypes, React } from '../../imports.js'

const Checkout = ({ cartItems, checkOutHandler }) => {
    return (
        <Card>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                        <h3>Subtotal: {("(")}{cartItems.reduce((a, c) => a + c.quantity, 0)} {" "}
                            {cartItems.length === 1 ? "item" : "items"} {(" )")} {(" ")}
                            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='d-grid'>
                            <Button type='button' disabled={cartItems.length === 0} variant='primary' onClick={checkOutHandler}>Checkout</Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

Checkout.propTypes = { cartItems: PropTypes.array, checkOutHandler: PropTypes.func };

export default Checkout;