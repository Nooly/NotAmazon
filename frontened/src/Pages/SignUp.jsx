import { axios, useState, Container, Form, Button, Link, useNavigate, toast, useContext } from '../imports.js';
import { USER_SIGNUP } from '../actions.jsx';
import Title from '../Components/Shared/Title.jsx';
import { getError } from '../utils.js';
import { Store } from '../store.jsx';


class PassError extends Error {
  constructor(message) {
    super(message); // Pass the message to the Error constructor
    this.name = 'PassError'; // Set the name of the error
  }
}

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch: ctxDispatch } = useContext(Store);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(password)
      console.log(confirmPassword)
      if (password != confirmPassword) throw new PassError("Passwords not matching!")
      else {
        const { data } = await axios.post("/api/v1/users/signup", { name: name, email: email, password: password, confirmPassword: confirmPassword });
        ctxDispatch({ type: USER_SIGNUP, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/signin");
      }
    } catch (error) {
      if (error instanceof PassError) {
        toast.error(error.message);
      } else {
        toast.error(getError(error));
      }
    }
  };

  return (
    <div>
      <Container className="small-container">
        <Title title="SignUp Page"></Title>
        <h1 className='my-3'>Sign Up</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control required onChange={(e) => setName(e.target.value)} placeholder="user">
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control required onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com">
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' onChange={(e) => setPassword(e.target.value)} placeholder="********">
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId='confirmPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' onChange={(e) => setconfirmPassword(e.target.value)} placeholder="********">
            </Form.Control>
          </Form.Group>
          <div className='mb-3'>
            <Button type='submit'>Sign Up </Button>
          </div>
          <div className='mb-3'>
            Already, have an account?{" "}
            <Link to="/signin">Sign In</Link>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default SignUp;