import Checkout from "../Components/CartPage/Checkout.jsx";
import ItemsInCart from "../Components/CartPage/ItemsInCart.jsx";
import Title from "../Components/Shared/Title.jsx";
import { Store } from "../Store.jsx";
import { ADD_TO_CART } from "../actions.jsx";
import { Col, React, Row, axios, toast, useContext } from "../imports.js"
import { getError } from "../utils.js";

const Cart = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const { cartItems } = cart;

    const updateCartHandler = async (product,quantity) => {

        try {
            const { data } = await axios.get(`/api/v1/products/${product._id}`);
            if (data.countInStock < quantity) {
                alert('Sorry, Product is out of stock');
                return;
            }

            ctxDispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });

        } catch (err) {
            toast.error((getError(err)));
        }
    }

    return (
        <div><Title title="Shopping cart"></Title>
            <Row>
                <Col md={8}><ItemsInCart cartItems={cartItems} updateCartHandler={updateCartHandler} /></Col>
                <Col md={4}><Checkout cartItems={cartItems} /></Col>
            </Row>
        </div>
    )
}

export default Cart;