import { Container, Form, Button } from 'react-bootstrap';
import { API_ENDPOINT } from './config';
import axios from 'axios';

export default function SignupPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const generatedStudentId = `23-${ randomNumber }-2`;
    const form = event.target;
    const data = {
      studentId: generatedStudentId,
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      phone: form.elements.phone.value,
      creditsCompleted: 0,
      cgpa: 0,
      joinDate: new Date(),
      departmentId: parseInt(form.elements.department.value)
    };

    fetch(`${ API_ENDPOINT }/students/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => window.location.href = '/Students')
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Container className="mt-4 w-25 p-3">
        <Form onSubmit={ handleSubmit }>
          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone"/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="mb-0">Department</Form.Label>
            <Form.Control as="select" name="department">
              <option value="">Select Department...</option>
              <option value="1">CSE</option>
              <option value="2">EEE</option>
              <option value="3">LLB</option>
              <option value="4">ME</option>
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
