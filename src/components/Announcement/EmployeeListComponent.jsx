import React from 'react';

const EmployeeListComponent = ({ employees, setEmployees }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeItem
          key={employee.id}
          employee={employee}
          setEmployees={setEmployees}
        />
      ))}
    </div>
  );
};

const EmployeeItem = ({ employee, setEmployees }) => {
  return (
    <div className="employee-item">
      {/* Display employee details here, such as name, title, etc. */}
      <button onClick={() => deleteEmployee(employee.id, setEmployees)}>حذف</button>
    </div>
  );
};

const deleteEmployee = async (id, setEmployees) => {
  try {
    await EmployeeService.deleteEmployee(id);
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};

export default EmployeeListComponent;
