import axios from 'axios';
import { API_ENDPOINT } from './config';

export async function getServerSideProps(context) {
  const response = await axios.get(`${API_ENDPOINT}/students`);
  const students = response.data;

  return { props: { students } };
}

export default function StudentTable({ students }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-4">Student List</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td><a href={`/StudentDetails?id=${ student.id }`}>View Details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}