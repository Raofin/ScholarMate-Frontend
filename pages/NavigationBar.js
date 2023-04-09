import {Navbar, Nav} from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar className="navbar navbar-dark bg-primary justify-content-center">
      <div className="mx-md-5 my-2 d-flex">
        <Navbar.Brand href="/">ScholarMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/SignIn">Sign In</Nav.Link>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            <Nav.Link href="/Others">Others Routes</Nav.Link>
            <Nav.Link href="/Students">Students</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
