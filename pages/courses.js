import axios from 'axios';
import { API_ENDPOINT } from './config';

export async function getServerSideProps(context) {
  const response = await axios.get(`${ API_ENDPOINT }/courses`);
  const courses = response.data;

  return { props: { courses } };
}

export default function CourseTable({ courses }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-4">Course List</h1>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Code</th>
          <th>Credit</th>
          <th>Department</th>
          <th>Registrar</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        { courses.map((course) => (
          <tr key={ course.id }>
            <td>{ course.id }</td>
            <td>{ course.name }</td>
            <td>{ course.code }</td>
            <td>{ course.credit }</td>
            <td>{ course.department.name }</td>
            <td>{ course.registrar.name }</td>
            <td><a href={ `/CourseDetails?id=${ course.id }` } className="btn btn-primary">View Details</a></td>
          </tr>
        )) }
        </tbody>
      </table>
    </div>
  );
}
