import axios from 'axios';
import { API_ENDPOINT } from '@/config';

export async function getServerSideProps(context) {
  const response = await axios.get(`${ API_ENDPOINT }/students`);
  const students = response.data;

  return { props: { students } };
}

export async function deleteStudent(id) {
  try {
    const response = await axios.delete(`${ API_ENDPOINT }/students/${ id }`);
    console.log(response);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}


export default function StudentTable({ students }) {
  return (
    <>
      <h1 className="text-title">Student List</h1>
      <div className="table-container">
        <table className="table-style-1">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email Address</th>
              <th className={"text-center"}>Department</th>
              <th colSpan="3" className={"text-center"}>Actions</th>
            </tr>
          </thead>
          <tbody>
            { students.map((student) => (
              <tr key={ student.id }>
                <td>{ student.studentId }</td>
                <td>{ student.name }</td>
                <td>{ student.email }</td>
                <td className={"text-center"}>{ student.department.name }</td>
                <td className={"!px-1 text-center"}><a href={ `/students/${ student.id }` }>View Details</a></td>
                <td className={"!px-1"}><a href={ `/students/${ student.id }/update` }>Edit</a></td>
                <td className={"!px-1"}><a href="" onClick={() => deleteStudent(student.id)}>Delete</a></td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </>
  );
}