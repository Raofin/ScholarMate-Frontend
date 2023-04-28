import axios from "axios";
import { API_ENDPOINT } from "@/config";

export async function getServerSideProps(context) {
  const { params } = context;
  let { id } = params;
  id = id ?? 1;

  const response = await axios.get(`${ API_ENDPOINT }/students/${ id }`);
  const student = response.data;

  return { props: { student } };
}

function MyAccountPage() {
  return (
    <>
      <h1>View Account</h1>
      <table>
        <tbody>
          <tr>
            <td>Student Name</td>
            <td>
              <input type="text" id="name" className="grey-input" required/>
            </td>
          </tr>
          <tr>

          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MyAccountPage;
