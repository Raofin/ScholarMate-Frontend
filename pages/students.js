import axios from 'axios';
import { API_ENDPOINT } from '@/config';

export async function getServerSideProps(context) {
  const response = await axios.get(`${ API_ENDPOINT }/students`);
  const students = response.data;

  return { props: { students } };
}

export default function StudentTable({ students }) {
  return (
    <div className="table-container">
      <table className="table-1">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Department</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          { students.map((student) => (
            <tr key={ student.id }>
              <td>{ student.studentId }</td>
              <td>{ student.name }</td>
              <td>{ student.email }</td>
              <td>{ student.department.name }</td>
              <td><a href={ `/StudentDetails?id=${ student.id }` } className="btn btn-primary">View Details</a></td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}