import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App.jsx";
import WorldTraveled from "./pages/WorldTravel.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    },
    {
    path: "/WorldTravel",
    element: <WorldTraveled/>,
    },
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

//ReactDOM.render(<App />, document.getElementById("root"));

