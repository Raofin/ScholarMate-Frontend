import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!Cookies.get('authenticatedUser')) {
      router.replace('/login'); // Redirect to login page
    }
  }, []);

  return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
        <h1 className="text-center text-4xl font-black text-white">Welcome to the Dashboard!</h1>
      </div>
  );
}

export default DashboardPage;
