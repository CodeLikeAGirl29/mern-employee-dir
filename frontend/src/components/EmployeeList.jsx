import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5050/employees") // Replace with production URL if deployed
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-gray-500">Loading employees...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <ul className="list-disc list-inside space-y-2">
        {employees.map((employee) => (
          <li key={employee.id} className="text-lg">
            <span className="font-semibold">{employee.name}</span> -{" "}
            {employee.position} ({employee.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
