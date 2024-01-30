import SearchBox from './SearchBox';
import { NavBar, Container, LinkContainer, Link, NavDropdown, useContext, useNavigate,useLocation } from '../../imports.js'
import { Store } from '../../Store.jsx';
import { USER_SIGNOUT } from '../../actions.jsx';
import { Badge } from 'react-bootstrap';

const Header = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, cart: { cartItems } } = state;
    const navigate = useNavigate();
    const location = useLocation();
    const signOutHandler = () => {
        ctxDispatch({ type: USER_SIGNOUT });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('shippingAdress');
        localStorage.removeItem('paymentMethod');
    }
    return (
        <header>
            <NavBar bg="dark" variant="dark">
                <Container> 
                    <Link onClick={() => navigate(-1)}>{/*need to fix a problem, if you copy the url and open in a new browser and then press back*/}
                        {location.pathname !== '/' && <i className="fa fa-arrow-left text-white align-arrow-right"> Back</i>}
                    </Link>
                    <LinkContainer to="/">
                        <NavBar.Brand>
                            <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" width={80} alt='Amazon logo' />
                        </NavBar.Brand>
                    </LinkContainer>
                    <SearchBox />
                    <nav className='d-flex align-items-center justify-content-end me-2 ms-4'>
                        <Link to="/cart" className='nav-link'>
                            <i className='fa fa-shopping-cart text-white'></i>
                            {cartItems.length > 0 && (
                                <Badge pill bg='danger'>
                                    {cartItems.reduce((a, c) => a + c.quantity, 0)}
                                </Badge>
                            )}
                        </Link>
                    </nav>
                    {userInfo ? (
                        <NavDropdown className='text-white' title={userInfo.name}>
                            <NavDropdown.Divider />
                            <Link to={"/"} className='dropdown item' onClick={signOutHandler}>Sign-Out</Link>
                        </NavDropdown>
                    ) : <Link to="/signin" className='text-white nav-link'>
                        Sign-in
                    </Link>}
                </Container>
            </NavBar>
        </header>
    )
}

export default Header