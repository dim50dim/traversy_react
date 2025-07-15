import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>My Job Site</h1>
      </header>
      <main>
             <Navbar/>
        <Outlet />
   
      </main>
    </div>
  );
}

export default MainLayout;
