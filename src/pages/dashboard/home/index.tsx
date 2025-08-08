import React from 'react'
import { FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-blue-700">
      <FaHome className="text-red-700" />
      <p>Home</p>
      <div>
        <NavLink end={true} to={""}>
          Football
        </NavLink>
        <NavLink to={"box"}>
          Box
        </NavLink>
        <NavLink to={"movie"}>
          Movie
        </NavLink>
      </div>
      <Outlet/>
    </div>
  );
}

export default React.memo(Home)