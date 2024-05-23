import React, { useState, useEffect } from "react";
import {
  
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "reactstrap";
import Button from 'react-bootstrap/Button';
import './UpdateEmployee.module.css';
import EmployeeService from './EmployeeService';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-use-history';

function UpdateEmployeeComponent() {
  const [id, setId] = useState(useParams()); // Get ID from route params
  const [User, setUser] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Active, setActive] = useState("");
  const [Created_at, setCreated_at] = useState(new Date());
  
  const history = useHistory();

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await EmployeeService.getEmployeeById(id);
      const employee = response.data;
      setUser(employee.User);
      setTitle(employee.Title);
      setDescription(employee.Description);
      setActive(employee.Active);
      setCreated_at(employee.Created_at);
      
    };

    fetchEmployee();
  }, [id]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "User":
        setUser(value);
        break;
      case "Title":
        setTitle(value);
        break;
      case "Description":
        setDescription(value);
        break;
      case "Active":
      setActive(value);
      break;
      case "Created_at":
      setCreated_at(value);
      break;
      default:
        break;
    }
  };

  const update = async (e) => {
    e.preventDefault();
   
    try {
      const employee = { User, Title, Description, Active, Created_at };
      await EmployeeService.updateEmployee(employee, id);
      history.push("/employees");
    } catch (error) {
      console.log("Error updating employee:", error);
    }
  };

  const cancel = () => {
    history.push("/crud");
  };

  return (
    <div>
      <Container>
        
          <Card>
            
              <h3>Update Employee</h3>
              <CardBody>
                <Form>
                  <FormGroup style={{ padding: "1em"}}>
                    <label style={{display:'flex',color:'red'}}>User:</label>
                    <input
                      name="User"
                      className="form-control"
                      value={User}
                      onChange={changeHandler}
                    />
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label style={{display:'flex',color:'red'}}>Title:</label>
                    <input
                      name="Title"
                      className="form-control"
                      value={Title}
                      onChange={changeHandler}
                    />
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label style={{display:'flex',color:'red'}}>Description:</label>
                    <input
                      name="Description"
                      className="form-control"
                      value={Description}
                      onChange={changeHandler}
                    />
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label style={{display:'flex',color:'red'}}>Active:</label>
                    <input
                      name="Active"
                      className="form-control"
                      value={Active}
                      onChange={changeHandler}
                    />
                  </FormGroup>
                  <FormGroup style={{ padding: "1em" }}>
                    <label style={{display:'flex',color:'red'}}>Created_at:</label>
                    <input
                      name="Created_at"
                      className="form-control"
                      value={Created_at.toISOString().substring(0, 10)}
                      onChange={changeHandler}
                    />
                  </FormGroup>
                  
                  
                    <Button type="button" className="btn btn-warning" onClick={update} style={{ display: 'inline-block', marginRight:'10px' }}>
                      Save
                    </Button>
                    <Button type="button" className="btn btn-danger " onClick={cancel} style={{ display: 'inline-block', marginRight:'910px'}}>
                      Cancel
                    </Button>
                    
                    
                </Form>
              </CardBody>
          </Card>
        
      </Container>
    </div>
  );
}

export default UpdateEmployeeComponent;
