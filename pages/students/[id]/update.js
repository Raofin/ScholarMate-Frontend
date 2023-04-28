import axios from 'axios';
import {API_ENDPOINT} from '@/config';
import {DatetimeFormat} from "@/components/datetime-format";
import {useState} from "react";

export async function getServerSideProps(context) {
  const {params} = context;
  let {id} = params;
  id = id ?? 1;

  const response = await axios.get(`${API_ENDPOINT}/students/${id}`);
  const student = response.data;

  return {props: {student}};
}

export default function Index({student}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      phone: form.elements.phone.value,
      departmentId: parseInt(form.elements.department.value)
    };

    try {
      const response = await axios.patch(`${API_ENDPOINT}/students/update/${student.id}`, data);
      const updatedStudent = response.data;
      console.log(updatedStudent);
      window.location.href = `/students`;
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <h1 className="text-title">{student.name} Details</h1>
          <div className="table-container account-table">
            <table className="table-style-1">
              <tbody>
              <tr>
                <td>Student ID:</td>
                <td>{student.studentId}</td>
              </tr>
              <tr>
                <td>Student Name:</td>
                <td>
                  <input type="text" id="name" className="white-input"
                         defaultValue={student.name} required/>
                </td>
              </tr>
              <tr>
                <td>Email Address:</td>
                <td>
                  <input type="text" id="email" className="white-input"
                         defaultValue={student.email} required/>
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input type="text" id="password" className="white-input"
                         placeholder={"Enter your password"} required/>
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>
                  <input type="text" id="phone" className="white-input"
                         defaultValue={student.phone} required/>
                </td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>
                  <select id="department" className="white-input" required defaultValue={student.department}>
                    <option value="1">CSE</option>
                    <option value="2">EEE</option>
                    <option value="3">LLB</option>
                    <option value="4">ME</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Credits Completed:</td>
                <td>{student.creditsCompleted}</td>
              </tr>
              <tr>
                <td>CGPA:</td>
                <td>{student.cgpa}</td>
              </tr>
              <tr>
                <td>Join Date:</td>
                <td>{new Date(student.joinDate).toLocaleDateString('en-US', DatetimeFormat)}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="blue-button">
              Confirm
            </button>
          </div>
        </form>
      </>
  );
}

