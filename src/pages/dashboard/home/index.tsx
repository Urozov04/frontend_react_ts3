import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Home</h2>
      <div className="flex gap-5 py-5">
        <NavLink
          end
          to={""}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 underline"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Family
        </NavLink>
        <NavLink
          to={"google"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 underline"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Google
        </NavLink>
        <NavLink
          to={"member"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 underline"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Member
        </NavLink>
      </div>

      <div className="flex justify-center items-center min-h-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Home);
