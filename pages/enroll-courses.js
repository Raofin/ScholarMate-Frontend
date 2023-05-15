import axios from 'axios';
import {API_ENDPOINT} from '@/config';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {deleteStudent} from "@/pages/students";

export async function enroll(email, courseId) {
  try {
    const response = await axios.post(`${API_ENDPOINT}/students/enroll-course/${email}/${courseId}`);
    console.log(response);
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export default function CourseTable() {
  const [student, setStudent] = useState(null);
  const [courses, setCourse] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (!authenticatedUser) {
      router.replace('/login');
    } else {
      setStudent(JSON.parse(authenticatedUser));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/courses`);
        setCourse(response.data); // set the obtained course data to the state variable
      } catch (error) {
        console.error(error);
      }
    };

    if (student) {
      fetchData();
    }
  }, [student]);


  return (
      <>
        <h1 className="text-title">Course List</h1>
        <div className="table-container">
          <table className="table-style-1">
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
            {courses?.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.code}</td>
                  <td>{course.credit}</td>
                  <td>{course.department.name}</td>
                  <td>{course.registrar.name}</td>
                  {/*<td><a href={ `/enroll-course/ /${ course.id }` }>View Details</a></td>*/}
                  <td className={"!px-1"}><a href="" onClick={() => enroll(student.email, course.id)}>Enroll</a></td>

                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
  );
}
