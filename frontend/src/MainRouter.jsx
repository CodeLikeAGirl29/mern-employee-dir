import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import EmployeeList from "./components/EmployeeList";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<EmployeeList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRouter;
