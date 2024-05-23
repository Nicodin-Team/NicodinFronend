import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "reactstrap";
import EmployeeService from './EmployeeService';
import { useHistory } from 'react-router-use-history';

function CreateEmployeeComponent() {
  const [User, setUser] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Active, setActive] = useState("");
  const [Created_at, setCreated_at] = useState(new Date());
  const history = useHistory();

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

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      const employee = { User, Title, Description, Active, Created_at };
      await EmployeeService.createEmployee(employee);
      history.push("/employees");
    } catch (error) {
      console.error("Error saving employee:", error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  const cancel = () => {
    history.push("/crud");
  };

  return (
    <div>
      <Container>
        <Row>
          <Card>
            <Col>
              <h3>Add Employee</h3>
              <CardBody>
                <Form>
                <FormGroup style={{ padding: "1em" }}>
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
                  <Button type="button" className="btn btn-warning" onClick={saveEmployee} style={{ display: 'inline-block', marginRight:'10px' }}>
                      Save
                    </Button>
                    <Button type="button" className="btn btn-danger " onClick={cancel} style={{ display: 'inline-block', marginRight:'910px'}}>
                      Cancel
                    </Button>
                </Form>
              </CardBody>
            </Col>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default CreateEmployeeComponent;
