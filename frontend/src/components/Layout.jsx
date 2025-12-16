import { Analytics } from '@vercel/analytics/react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
         <Outlet />
        <Analytics />
    </>
  );
}

export default Layout;

