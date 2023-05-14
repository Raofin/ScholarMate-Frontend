import { API_ENDPOINT } from "@/config";
import Cookies from 'js-cookie';
import {useRouter} from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value
    };

    fetch(`${ API_ENDPOINT }/students/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message !== "Login failed") {
          localStorage.setItem('authenticatedUser', JSON.stringify(data));

          if (form.elements.remember.checked) {
            Cookies.set('authenticatedUser', JSON.stringify(data), {expires: 7});
          }

          router.push('/dashboard');
        } else {
          console.log("Login Failed");
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container w-80 mt-20 mx-auto">
      <h1 className="text-title">Login</h1>
      <form onSubmit={ handleSubmit }>
        <div className="mb-5">
          <label htmlFor="email" className="text-form-title">Email</label>
          <input type="email" id="email" className="grey-input"
                 placeholder="name@email.com" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-form-title">Password</label>
          <input type="password" id="password" className="grey-input"
                 placeholder="Enter your password" required/>
        </div>
        <div className="flex items-start mb-3 justify-center">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value=""
                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me</label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="blue-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}