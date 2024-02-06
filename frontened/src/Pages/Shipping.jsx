import { CheckOutSteps } from '../Components/Shared/CheckOutSteps.jsx';
import Title from '../Components/Shared/Title.jsx';
import { Store } from '../Store.jsx';
import { SAVE_SHIPPING_ADDRESS } from '../actions.jsx';
import { Button, Container, Form, React, useContext, useEffect, useNavigate, useState } from '../imports.js'

export const Shipping = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, cart } = state;
    const { cartItems } = cart;

    useEffect(() => {
        if (cartItems.length === 0) navigate("/");
        if (!userInfo) navigate("/signin?redirect=/shipping");
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        ctxDispatch({type: SAVE_SHIPPING_ADDRESS, payload: data})
        navigate("/payment");
    }

    return (
        <div><Title title="Shipping"></Title>
            <CheckOutSteps step1 step2 />
            <Container className='small-container'>
                <h1 className='my-3'>Shipping Address</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className='mb-3'><Form.Label>Full Name</Form.Label><Form.Control name='fullName' required></Form.Control></Form.Group>
                    <Form.Group className='mb-3'><Form.Label>Address</Form.Label><Form.Control name='address' required></Form.Control></Form.Group>
                    <Form.Group className='mb-3'><Form.Label>City</Form.Label><Form.Control name='city' required></Form.Control></Form.Group>
                    <Form.Group className='mb-3'><Form.Label>Postal Code</Form.Label><Form.Control name='postalCode' required></Form.Control></Form.Group>
                    <Form.Group className='mb-3'><Form.Label>Country</Form.Label><Form.Control name='country' required></Form.Control></Form.Group>
                    <div className='mb-3'><Button type='submit' variant='primary'>Submit</Button></div>
                </Form>
            </Container>
        </div>
    )
}
