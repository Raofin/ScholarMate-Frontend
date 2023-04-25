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
    <div className="container w-80 mt-20 mx-auto">
      <h1 className="text-title">Register</h1>
      <form>
        <div className="mb-5">
          <label htmlFor="name" className="text-form-title">Name</label>
          <input type="text" id="name" className="grey-input"
                 placeholder="Enter your name here" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-form-title">Email</label>
          <input type="email" id="email" className="grey-input"
                 placeholder="name@email.com" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-form-title">Password</label>
          <input type="password" id="password" className="grey-input"
                 placeholder="Enter your password" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="text-form-title">Phone Number</label>
          <input type="tel" id="phone" className="grey-input"
                 placeholder="Your phone number" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="department" className="text-form-title">Department</label>
          <select id="department" className="grey-input" required>
            <option value="">Select department</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="LLB">LLB</option>
            <option value="ME">ME</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="blue-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
