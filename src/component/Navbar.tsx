import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Student</Navbar.Brand>
                <Nav className="me-auto">

                    <Nav.Link href="/list">List</Nav.Link>

                </Nav>
            </Container>
        </Navbar>



    );
}

export default NavBar;