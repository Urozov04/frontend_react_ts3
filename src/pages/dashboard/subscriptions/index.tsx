import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Subscriptions = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
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
          Football
        </NavLink>
        <NavLink
          to={"box"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 underline"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Box
        </NavLink>
        <NavLink
          to={"movie"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 underline"
              : "text-gray-600 hover:text-gray-800"
          }
        >
          Movie
        </NavLink>
      </div>

      <div className="flex justify-center items-center min-h-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Subscriptions);
