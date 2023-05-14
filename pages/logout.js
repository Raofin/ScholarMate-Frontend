import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie';
import { destroyCookie } from 'nookies';

function Logout() {
  const router = useRouter();

  useEffect(() => {
    destroyCookie(null, 'cookieName', {
      path: '/',
    });
    router.replace('/login'); // Redirect to login page
  }, []);

  return null;
}

export default Logout;
