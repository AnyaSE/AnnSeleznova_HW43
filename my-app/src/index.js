import { createBrowserRouter, Route, Router, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Album from "./pages/Album";
import UserList from "./pages/Userlist";

const routes = [
  {
    path: "/userlist",
    element: <UserList/>,
  },
  {
    path: "/album",
    element: <Album/>,
  },
];

const router = createBrowserRouter({
  routeConfig: routes,
});

ReactDOM.render(
  <Router router={router}>
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
    </Routes>
  </Router>,
  document.getElementById("root")
);