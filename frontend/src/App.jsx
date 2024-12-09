import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import EmployeeList from "./components/EmployeeList"
import Edit from "./components/Edit"
import Create from "./components/Create"

const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<EmployeeList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App