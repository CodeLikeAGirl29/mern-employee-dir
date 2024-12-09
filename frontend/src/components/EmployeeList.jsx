import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    email: "",
  });

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("https://mern-employee-dir.onrender.com/employees"); // Update with your backend URL
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  // Delete an employee
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://mern-employee-dir.onrender.com/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id)); // Remove from state
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
      <div className="p-6">
        {employees.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {employees.map((employee) => (
              <li key={employee._id}>
                <p>
                  <strong>{employee.name}</strong> - {employee.position} ({employee.email})
                </p>
                <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No employees found</p>
        )}
      </div>
  );
};

export default EmployeeDirectory;
