import {Container, Form, Button} from 'react-bootstrap';

function SigninPage() {
  return (
    <Container className="mt-4 w-25 p-3">
      <Form>
        <Form.Group>
          <Form.Label className="mb-0">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="mb-0">Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="mt-3">
            Sign In
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default SigninPage;
