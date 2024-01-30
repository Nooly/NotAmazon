import  Checkout  from "../Components/CartPage/Checkout.jsx";
import  ItemsInCart  from "../Components/CartPage/ItemsInCart.jsx";
import Title from "../Components/Shared/Title.jsx";
import { Store } from "../Store.jsx";
import { Col, React, Row, useContext } from "../imports.js"

const Cart = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const { cartItems } = cart;

    const updateCartHandler = async () => {

    }

    return (
        <div><Title title="Shopping cart"></Title>
            <Row>
                <Col md={8}><ItemsInCart cartItems={cartItems} updateCartHandler={updateCartHandler} /></Col>
                <Col md={4}><Checkout cartItems={cartItems}/></Col>
            </Row>
        </div>
    )
}

export default Cart;