import axios from 'axios';
import { API_ENDPOINT } from './config';

export async function getServerSideProps(context) {
  const response = await axios.get(`${ API_ENDPOINT }/departments`);
  const departments = response.data;

  return { props: { departments } };
}

export default function DepartmentTable({ departments }) {
  return (
    <div className="container mx-auto">
      <h1 className="my-4">Department List</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Department Head</th>
          </tr>
        </thead>
        <tbody>
          { departments.map((department) => (
            <tr key={ department.id }>
              <td>{ department.name }</td>
              <td>{ department.description }</td>
              <td>{ department.head.name }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}
