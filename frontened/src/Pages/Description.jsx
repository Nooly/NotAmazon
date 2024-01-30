import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from '../actions';
import CartDescription from '../Components/DescriptionPage/CartDescription.jsx';
import ProductDescription from '../Components/DescriptionPage/ProductDescription.jsx';
import Loading from '../Components/Shared/Loading.jsx';
import MessageBox from '../Components/Shared/MessageBox.jsx';
import Title from '../Components/Shared/Title.jsx';
import { axios, Col, React, Row, useContext, useEffect, useNavigate, useParams, useReducer } from '../imports.js';
import descriptionReducer from '../Reducers/descriptionReducer.jsx';
import { Store } from '../Store.jsx';
import { addToCartHandler, getError } from '../utils.js';

const initialState = { loading: true, error: "", data: [] };

export const Description = () => {
    const params = useParams();
    const { token } = params;
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const { cartItems } = cart;

    const [{ loading, error, data }, dispatch] = useReducer(descriptionReducer, initialState);


    useEffect(() => {

        const getProduct = async () => {

            dispatch({ type: GET_REQUEST })

            try {

                const { data } = await axios.get(`/api/v1/products/token/${token}`);
                dispatch({ type: GET_SUCCESS, payload: data });

            } catch (error) {

                dispatch({ type: GET_FAIL, payload: getError(error) });

            }

        }

        getProduct();

    }, [token]);

    const addToCart = async () => {
        await addToCartHandler(data, cartItems, ctxDispatch);
        navigate("/cart");
    }

    return (
        <div><Title title={data.title}></Title>
            {loading ? <Loading /> : error ? <MessageBox variant="danger">{error}</MessageBox> : (
                <div>
                    <Row>
                        <Col md={6}>
                            <img width={400} src={data.image} alt={data.title} />
                        </Col>
                        <Col md={3}>
                            <ProductDescription {...data} /> {/* data is product, maybe rename */}
                        </Col>
                        <Col md={3}>
                            <CartDescription addToCart={addToCart} product={data} />
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}
