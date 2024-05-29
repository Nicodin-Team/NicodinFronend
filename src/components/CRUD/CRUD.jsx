import React , {useState,useEffect}  from "react";

import styles from "./Crud.module.css";
import {create,deleteOne,getAll,getUser,update} from "../../services/announcement";
import AddAnnouncements from "./AddAnnouncement";
import { useAuth } from "../../context/AuthContext";
// import { Button ,Typography } from "@mui/material";

function Crud() {
  const {accessToken} = useAuth();
  const [data, setData] = useState([]);
  const[openAdd,setOpenAdd] = useState(false);
  const[openEdit,setOpenEdit] = useState(false);
  const[selectedData,setSelectedData] = useState({});
  const [userId,setUserId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAll({page:1,search:''})
        if(accessToken){
          const userResponse = await getUser({authToken: accessToken})
          // setUserId(userResponse.data.data.id)
          console.log(userResponse)
        }
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    
    fetchData();
  }, [accessToken]);

  const handleClose = () => {
    setOpenAdd(false);
    setOpenEdit(false);
    setSelectedData({})
  }
  // const handleUpdateClick = (item) =>{
  //   setSelectedData(item);setOpenEdit(true)
  // }
  // const handleDeleteClick = (item) =>{
  //   setSelectedData(item);handleDelete()
  // }
  const handleUpdate = async (values) =>{
    try {
      const response = await update({data:{title:values.title , description:values.description , active:selectedData.active , user:selectedData.user }, id:selectedData.id , authToken:accessToken })
      console.log(response)
      const res = await getAll({page:1,search:''})
      setData(res.data)
    } catch (error) {
      alert(error.response.data.detail)
    }
  }

  const handleCreate = async (values) =>{
    console.log(values)
    try {
      await create({data:{title:values.title , description:values.description , active:false , user:userId}})//replace real userid
      const res = await getAll({page:1,search:''})
      setData(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }


  const handleDelete = async () =>{
    try {
      console.log(selectedData)
      const response = await deleteOne({id:selectedData.id, authToken: accessToken})
      console.log(response)
      const res = await getAll({page:1,search:''})
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
   if(data){
    return (
    <>
      <div className={styles.Announcementpage}>
      <div className={styles.announcementcontainer}>
        <div className="d-flex mmad">
          <button type="button" className="btn btn-success my-3" onClick={() => {setOpenAdd(true)}}>
            Create Stream
          </button>
        </div>
        <div className="announcement-container">
          <div className={styles.announcementList}>
            {data.map((item) => (
              <div key={item.id} className={styles.announcementItem}>
                
                <h4 className={styles.jobtitle}>{item.title}</h4>
                <h3 className={styles.jobDescription}>{item.description}</h3>
                <h4 className={styles.jobActive}>{item.active}</h4>
                {/* <h4 className={styles.jobUser}>{item.User}</h4> */}
                <h4 className={styles.jobCreatedAt}>{item.created_at}</h4>

                    <div className={`${styles.row} row justify-content-end`}> 
                        <div className={`${styles.col} col-1`}> 
                          <button
                            type="button"
                            className={`${styles.updateButton} btn btn-warning `} 
                            onClick={() => {
                              setSelectedData(item);
                              setOpenEdit(true);
                            }}
                          >
                            update
                          </button>
                        </div>
                        <div className={`${styles.col} col-1 `}> 
                          <button
                            type="button"
                            className={`${styles.deleteButton} btn btn-danger `} 
                            onClick={() => {
                              setSelectedData(item);
                              handleDelete();
                            }}
                          >
                            delete
                          </button>
                        </div>
                  </div>
                </div>
            ))}
          </div>
      </div>
      </div>
      <AddAnnouncements open={openAdd} handleClose={handleClose} handleSave={handleCreate} data={{title:'' , active:false , description:'' , user:1}}/>
      <AddAnnouncements open={openEdit} handleClose={handleClose} handleSave={handleUpdate} data={selectedData}/>
  </div>
  </>
);
   }
  }

export default Crud;
