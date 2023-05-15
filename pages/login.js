import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_ENDPOINT } from '@/config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    const remember = watch('remember');
    delete data.remember;

    console.log("POST" + JSON.stringify(data));
    fetch(`${API_ENDPOINT}/students/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(async data => {
        if (data.message !== 'Login failed') {
          localStorage.setItem('authenticatedUser', JSON.stringify(data));

          if (remember) {
            Cookies.set('authenticatedUser', JSON.stringify(data), {expires: 7});
          }

          router.push('/dashboard');
        } else {
          setLoginError('Invalid username or password');
        }
      })
      .catch(error => {
        console.error(error);
        if (error.message === "404") {
          setLoginError('Failed to login. Please check your credentials.');
        } else {
          setLoginError('An unexpected error occurred. Please try again.');
        }
      });
  };


  return (
    <div className="container w-80 mt-20 mx-auto">
      <h1 className="text-title">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="email" className="text-form-title">Email</label>
          <input type="email" id="email" {...register('email', { required: true })} className="grey-input"
                 placeholder="name@email.com"/>
          {errors.email && <span className="error">This field is required</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-form-title">Password</label>
          <input type="password" id="password" {...register('password', { required: true })} className="grey-input"
                 placeholder="Enter your password"/>
          {errors.password && <span className="error">This field is required</span>}
        </div>
        <div className="flex items-start mb-3 justify-center">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" {...register('remember')} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me</label>
        </div>

        {loginError && <span className="error">{loginError}</span>}

        <div className="flex justify-center">
          <button type="submit" className="blue-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
