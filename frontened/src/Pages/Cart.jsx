import Checkout from "../Components/CartPage/Checkout.jsx";
import ItemsInCart from "../Components/CartPage/ItemsInCart.jsx";
import Title from "../Components/Shared/Title.jsx";
import { Store } from "../Store.jsx";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions.jsx";
import { Col, React, Row, axios, toast, useContext, useNavigate } from "../imports.js"
import { getError } from "../utils.js";

const Cart = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const { cartItems } = cart;
    const navigate = useNavigate();

    const checkOutHandler = () =>{
        navigate("/signin?redirect=/shipping");
    }

    const updateCartHandler = async (product, quantity) => {

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
    const removeItemHandler = async (product) => {
        ctxDispatch({ type: REMOVE_FROM_CART, payload: product });
    }

    return (
        <div><Title title="Shopping cart"></Title>
            <Row>
                <Col md={8}><ItemsInCart cartItems={cartItems} updateCartHandler={updateCartHandler} removeItemHandler={removeItemHandler}/></Col>
                <Col md={4}><Checkout cartItems={cartItems} checkOutHandler={checkOutHandler}/></Col>
            </Row>
        </div>
    )
}

export default Cart;