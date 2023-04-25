import axios from 'axios';
import { API_ENDPOINT } from '@/config';
import { DatetimeFormat } from "@/components/datetime-format";

export async function getServerSideProps(context) {
  const { params } = context;
  let { id } = params;
  id = id ?? 1;

  const response = await axios.get(`${ API_ENDPOINT }/students/${ id }`);
  const student = response.data;

  return { props: { student } };
}

export default function Id({ student }) {
  return (
    <>
      <h1 className="text-title">{ student.name } Details</h1>
      <div className="table-container">
        <table className="table-style-1">
          <tbody>
            <tr>
              <td>Student ID:</td>
              <td>{ student.studentId }</td>
            </tr>
            <tr>
              <td>Student Name:</td>
              <td>{ student.name }</td>
            </tr>
            <tr>
              <td>Email Address:</td>
              <td>{ student.email }</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
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
              <td>{ new Date(student.joinDate).toLocaleDateString('en-US', DatetimeFormat) }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}