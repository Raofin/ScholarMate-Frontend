import axios from 'axios';
import { useRouter } from 'next/router';
import { API_ENDPOINT } from '../config';

export async function getServerSideProps(context) {
  let { id } = context.query;
  id = id ?? 1;

  const response = await axios.get(`${ API_ENDPOINT }/courses/${ id }`);
  const course = response.data;

  return { props: { course } };
}

export default function CourseDetails({ course }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-4">{ course.name }</h1>
      <table className="table table-striped table-hover">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{ course.id }</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{ course.name }</td>
          </tr>
          <tr>
            <td>Code:</td>
            <td>{ course.code }</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{ course.description }</td>
          </tr>
          <tr>
            <td>Credits:</td>
            <td>{ course.credit }</td>
          </tr>
          <tr>
            <td>Department:</td>
            <td>{ course.department.name }</td>
          </tr>
          <tr>
            <td>Registrar:</td>
            <td>{ course.registrar.name }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
