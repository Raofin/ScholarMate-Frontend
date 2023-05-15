import axios from "axios";
import {API_ENDPOINT} from "@/config";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {DatetimeFormat} from "@/components/datetime-format";

export default function MyAccountPage() {

  const [student, setStudent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (authenticatedUser) {
      setStudent(JSON.parse(authenticatedUser));
    } else {
      router.replace('/login');
    }
  }, []);

  return (
      <>
      <h1 className="text-title">My Account</h1>
      <div className="table-container account-table">
        <table className="table-style-1">
          <tbody>
            <tr>
              <td>Student ID:</td>
              <td>{ student?.studentId }</td>
            </tr>
            <tr>
              <td>Student Name:</td>
              <td>{ student?.name }</td>
            </tr>
            <tr>
              <td>Email Address:</td>
              <td>{ student?.email }</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{ student?.phone }</td>
            </tr>
            <tr>
              <td>Credits Completed:</td>
              <td>{ student?.creditsCompleted }</td>
            </tr>
            <tr>
              <td>CGPA:</td>
              <td>{ student?.cgpa }</td>
            </tr>
            <tr>
              <td>Department:</td>
              <td>{ student?.department?.name }</td>
            </tr>
            <tr>
              <td>Join Date:</td>
              <td>{ new Date(student?.joinDate).toLocaleDateString('en-US', DatetimeFormat) }</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <a href={ `/students/${ student?.id }/update` } className="blue-button">
          update
        </a>
      </div>
    </>
  );
}