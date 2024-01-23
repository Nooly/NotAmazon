import { axios, useState, Container, Form, Button, Link, useNavigate, toast, useContext } from '../imports.js';
import Title from '../Components/Shared/Title.jsx';
import { getError } from '../utils.js';
import { USER_SIGNIN } from '../actions.jsx';
import { Store } from '../store.jsx';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { dispatch: ctxDispatch } = useContext(Store);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/users/signin", { email: email, password: password });
            ctxDispatch({ type: USER_SIGNIN, payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/");

        } catch (error) {
            toast.error(getError(error));
        }

    };

    return (
        <div>
            <Container className="small-container">
                <Title title="SignIn Page"></Title>
                <h1 className='my-3'>Sign In</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control required onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={(e) => setPassword(e.target.value)} placeholder="********">
                        </Form.Control>
                    </Form.Group>
                    <div className='mb-3'>
                        <Button type='submit'>Sign In </Button>
                    </div>
                    <div className='mb-3'>
                        New Customer?{" "}
                        <Link to="/signup">Create a new account</Link>
                    </div>
                    <div className='mb-3'>
                        Forgot Password?{" "}
                        <Link to="/forgot">Reset password</Link>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default SignIn;