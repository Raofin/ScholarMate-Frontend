import axios from "axios";
import {API_ENDPOINT} from "@/config";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {DatetimeFormat} from "@/components/datetime-format";


export default function MyCoursesPage() {
  const [student, setStudent] = useState(null);
  const router = useRouter();
  const [enrolledCourses, setCourse] = useState(null);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (authenticatedUser) {
      setStudent(JSON.parse(authenticatedUser));
    } else {
      router.replace('/login');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/students/my-courses/` + student.email);
        const courseData = response.data;
        setCourse(courseData); // set the obtained course data to the state variable
        console.log(enrolledCourses);
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
      <h1 className="text-title">My Courses</h1>
      <div className="table-container">
        <table className="table-style-1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Code</th>
              <th>Credit</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            { enrolledCourses?.map((course) => (
              <tr key={ course.id }>
                <td>{ course.id - 10}</td>
                <td>{ course.course.name }</td>
                <td>{ course.course.code }</td>
                <td>{ course.course.credit }</td>
                <td><a href={ `/courses/${ course.id - 10 }` }>View Details</a></td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </>
  );
}