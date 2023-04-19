import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserList from "./pages/Userlist";
import AlbumPage from "./pages/Album";

const router = createBrowserRouter([
  {
    path: "/Userlist",
    element: <UserList/>
  },
  {
    path: "/Album",
    element: <AlbumPage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);