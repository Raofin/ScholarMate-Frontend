import axios from 'axios';
import { useRouter } from 'next/router';
import { API_ENDPOINT } from './config';

export async function getServerSideProps(context) {
  let { id } = context.query;
  id = id ?? 1;

  const response = await axios.get(`${ API_ENDPOINT }/students/${ id }`);
  const student = response.data;

  return { props: { student } };
}

export default function StudentDetails({ student }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-4">{ student.name } Deatils</h1>
      <table className="table table-striped table-hover">
        <tbody>
        <tr>
          <td>ID:</td>
          <td>{ student.studentId }</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{ student.name }</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{ student.email }</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>{ student.phone }</td>
        </tr>
        <tr>
          <td>Credits Completed:</td>
          <td>{ student.creditsCompleted }</td>
        </tr>
        <tr>
          <td>CGPA:</td>
          <td>{ student.cgpa }</td>
        </tr>
        <tr>
          <td>Department:</td>
          <td>{ student.department.name }</td>
        </tr>
        <tr>
          <td>Join Date:</td>
          <td>{ student.joinDate }</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}