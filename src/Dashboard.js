import { useState } from "react";

export default function Dashboard({ employees }) {
  const [selectedEmployees, setSelectedEmployees] = useState(employees);

  return (
    <>
      <h1>Employees</h1>
      <table>
        <tr>
          <th></th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Email</th>
        </tr>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>
              <img src={employee.picture.thumbnail} alt={employee.name} />
            </td>
            <td>{employee.name.last}</td>
            <td>{employee.name.first}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}