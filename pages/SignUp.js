import {Container, Form, Button} from 'react-bootstrap';

function SignupPage() {
  return (
    <div>
      <Container className="mt-4 w-25 p-3">
        <Form>
          <Form.Group>
            <Form.Label className="mb-0">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Department</Form.Label>
            <Form.Control as="select">
              <option value="">Select Department...</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="LLB">LLB</option>
              <option value="ME">ME</option>
            </Form.Control>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="mt-3">
              Sign Up
            </Button>
          </div>
        </Form>
      </Container>

    </div>
  );
}

export default SignupPage;
