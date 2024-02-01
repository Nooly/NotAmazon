import { Store } from '../Store.jsx';
import { React, useContext, useEffect, useNavigate, useState } from '../imports.js'
import { getError } from '../utils.js';

const SubmitOrder = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cart.paymentMethod) navigate("/payment");;
    }, [])

    const submitOrderHandler = async () => {
        try {
            setLoading(true);
            // post request addOrder
            // delete cartItems from state and localStorage
            // go o OrderDetails page /id of order
        } catch (error) {
            toast.error(getError(error));
        }
        finally{
            setLoading(false);
        }
    };

    const round2 = (number) => Math.round((number*100+Number.EPSILON)/100); // check what EPSILON is

    cart.itemsPrice = round2(
        cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
      );
      cart.taxPrice = round2(cart.itemsPrice * 0.17);
      cart.shippingPrice =
        cart.itemsPrice > 50
          ? round2(cart.itemsPrice * 0.1)
          : round2(cart.itemsPrice * 0.02);
      cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    return (
        <div>

        </div>
    )
}

export default SubmitOrder;