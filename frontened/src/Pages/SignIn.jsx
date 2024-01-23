import { axios, useState, Container, Form, Button, Link } from '../imports.js';
import Title from '../Components/Shared/Title.jsx';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/users/signin", { email: email, password: password });
            console.log(data);
        } catch (error) {
            console.log(error.response.data.message);
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
                        <Button type='submit'>Sign In</Button>
                    </div>
                    <div className='mb-3'>
                        New Customer?
                        <Link to="/signup">Create new account</Link>
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