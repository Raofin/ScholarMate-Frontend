import axios from 'axios';
import { API_ENDPOINT } from '@/config';

export async function getServerSideProps(context) {
  const { params } = context;
  let { id } = params;
  id = id ?? 1;

  const response = await axios.get(`${ API_ENDPOINT }/courses/${ id }`);
  const course = response.data;

  return { props: { course } };
}

export default function CourseDetails({ course }) {
  return (
    <>
      <h1 className="text-title">{ course.name } Details</h1>
      <div className="table-container">
        <table className="table-style-1">
          <tbody>
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
              <td className="whitespace-pre-wrap">{ course.description }</td>
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
    </>
  );
}