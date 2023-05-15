import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('authenticatedUser')) {
      localStorage.setItem('authenticatedUser', Cookies.get('authenticatedUser'));
    }

    if (!localStorage.getItem('authenticatedUser')) {
      router.replace('/login'); // Redirect to login page
    }
  }, []);

  return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
        <h1 className="text-center text-4xl font-black text-white">Welcome to the Dashboard!</h1>
        <h2 className="text-2xl font-black"><a href="/my-account">My Account</a></h2>
        <h2 className="text-2xl font-black"><a href="/enroll-courses">Enroll Courses</a></h2>
        <h2 className="text-2xl font-black"><a href="/my-courses">My Courses</a></h2>
      </div>
  );
}

export default DashboardPage;
