import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://teamup.liara.run/announcements/announcements";

const EmployeeService = () => {
  const getEmployees = async () => {
    try {
      const response = await axios.get(EMPLOYEE_API_BASE_URL);
      return response.data; 
    } catch (error) {
      console.log("Error fetching employees:", error);
      
    }
  };

  const createEmployee = async (employee) => {
    try {
      const response = await axios.post(EMPLOYEE_API_BASE_URL, employee);
      return response.data; 
    } catch (error) {
      console.log("Error creating employee:", error);
      
    }
  };

  const getEmployeeById = async (employeeId) => {
    try {
      const response = await axios.get(
        `${EMPLOYEE_API_BASE_URL}/${employeeId}`
      );
      return response.data; 
    } catch (error) {
      console.log("Error fetching employee:", error);
      
    }
  };

  const updateEmployee = async (employee, employeeId) => {
    try {
      const response = await axios.put(
        `${EMPLOYEE_API_BASE_URL}/${employeeId}`,
        employee
      );
      return response.data; 
    } catch (error) {
      console.log("Error updating employee:", error);
      
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
      return true; 
    } catch (error) {
      console.log("Error deleting employee:", error);
      
    }
  };

  return {
    getEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
  };
};

export default EmployeeService;
