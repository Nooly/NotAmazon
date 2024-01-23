import SearchBox from './SearchBox';
import { NavBar, Container, LinkContainer, Link, NavDropdown, useContext } from '../../imports.js'
import { Store } from '../../Store.jsx';

const Header = () => {
    const { state } = useContext(Store);
    const { userInfo } = state;
    return (
        <header>
            <NavBar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <NavBar.Brand>
                            <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" width={80} alt='Amazon logo' />
                        </NavBar.Brand>
                    </LinkContainer>
                    <SearchBox />
                    <nav className='d-flex align-items-center justify-content-end me-2 ms-4'>
                        <Link to="/cart" className='nav-link'>
                            <i className='fa fa-shopping-cart text-white'></i>
                        </Link>
                    </nav>
                    {userInfo ? (
                        <NavDropdown className='text-white' title={userInfo.name}>
                            <NavDropdown.Divider />
                            <Link to={"/signout"} className='dropdown item'>Sign-Out</Link>
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