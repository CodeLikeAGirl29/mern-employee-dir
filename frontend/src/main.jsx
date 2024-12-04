import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import EmployeeList from "./components/EmployeeList"; // Import the EmployeeList component
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default child route for "/"
        element: <EmployeeList />, // Use EmployeeList as the default component
      },
      {
        path: "records",
        element: <RecordList />,
      },
      {
        path: "edit/:id",
        element: <Record />,
      },
      {
        path: "create",
        element: <Record />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
