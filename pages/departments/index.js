import axios from 'axios';
import { API_ENDPOINT } from '@/config';

export async function getServerSideProps(context) {
  const response = await axios.get(`${ API_ENDPOINT }/departments`);
  const departments = response.data;

  return { props: { departments } };
}

export default function DepartmentTable({ departments }) {
  return (
    <>
      <h1 className="text-title">Departments List</h1>
      <div className="table-container">
        <table className="table-style-1">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Description</th>
              <th>Department Head</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { departments.map((department) => (
              <tr key={ department.id }>
                <td>{ department.name }</td>
                <td>{ department.description }</td>
                <td>{ department.head.name }</td>
                <td><a href={ `/departments/${ department.id }` }>View Details</a></td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </>
  );
}