import { Analytics } from '@vercel/analytics/react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
         <Outlet />
        <Analytics />
    </>
  );
}

export default App;
