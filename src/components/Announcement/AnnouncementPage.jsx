import React ,{useState,useEffect} from "react";
import "./AnnouncementPage.css";
import { getList } from "./services/accounts";
import { useHistory } from 'react-router-use-history';
import EmployeeService from '../Announcement/EmployeeService';


// const CompanyName = ({ name }) => <h3 className="job-company">{name}</h3>;

const Description = ({ name }) => <h3 className="job-description">{name}</h3>;

const Title = ({ name }) => <h4 className="title">{name}</h4>;

const Active = ({ name }) => <h4 className="job-active">{name}</h4>;

const User = ({ name }) => <h4 className="job-user">{name}</h4>;

const Created_at = ({ name }) => <h4 className="job-created_at">{name}</h4>;

const data = await getList();
console.log(data);

const hiringAds = [
  {
    id: 1,
    User:"mmad",
    Title: "Software Engineer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  {
    id: 2,
    User:"mmad",
    Title: "Web Developer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  {
    id: 3,
    User:"mmad",
    Title: "Web Developer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  {
    id: 4,
    User:"mmad",
    Title: "IT specialist",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  {
    id: 5,
    User:"mmad",
    Title: "AI engineer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },

  {
    id: 6,
    User:"mmad",
    Title: "Software Engineer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },

  {
    id: 7,
    User:"mmad",
    Title: "Web Developer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },

  {
    id: 8,
    User:"mmad",
    Title: "Web Developer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },

  {
    id: 9,
    User:"mmad",
    Title: "IT specialist",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },

  {
    id: 10,
    User:"mmad",
    Title: "AI engineer",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  {
    id: 11,
    User:"mmad",
    Title: "employeee",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  {
    id: 12,
    User:"mmad",
    Title: "modir",
    Description: "4+ years of experience",
    Active:"true",
    Created_at: "2024-05-21"
  },
  
]

function AnnouncementPage() {
  const [employees, setEmployees] = useState([]); 
  const history = useHistory();
  
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await EmployeeService.getEmployees();
      setEmployees(response.data);
    };
  
    fetchEmployees();
  }, []);
  
  const addEmployee = () => {
    history.push('/add-employee');
  };

  
  const editEmployee = (id) => {
    history.push(`/update-employee/${id}`);
  };

  
  // async function deleteEmployee(id) {
  //   try {
  //     await EmployeeService.deleteEmployee(id);
  //     setEmployees(employees.filter((employee) => employee.id !== id));
  //   } catch (error) {
  //     console.log('Error deleting employee:', error);
      
  //   }
  // }
  const deleteEmployee = async (id, setEmployees) => {
    try {
      await EmployeeService.deleteEmployee(id);
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };  

  

    return (
      <div className="Announcement-page">
        <div className="announcement-container">
          <div className="d-flex mmad">
            <button type="button" className="btn btn-success my-3" onClick={addEmployee}>
              Create Stream
            </button>
          </div>
          <div className="announcement-container">
            <div className="announcement-list">
              {hiringAds.map((ad) => (
                <div key={ad.id} className="announcement-item">
                  <User name={ad.User} />
                  {/* <CompanyName name={ad.companyName} /> */}
                  <Description name={ad.Description} />
                  <Title name={ad.Title} />
                  <Active name={ad.Active} />
                  <Created_at name={ad.Created_at} />
    
                  <div className="row msn">
                    <div className="col-1 mary">
                      <button type="button" className="btn btn-warning" onClick={ ()=> editEmployee(ad.id) }>
                        update
                      </button>
                    </div>
                    <div className="col-1 mary">
                      <button type="button" className="btn btn-danger" onClick={ ()=> deleteEmployee(ad.id) } >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      </div>
      </div>
    );

  }

export default AnnouncementPage;
