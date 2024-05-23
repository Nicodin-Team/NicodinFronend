import axios from "axios";
import { baseUrl } from "."

export const getList = async ()=>{
    const url = `${baseUrl}/announcements/mine/`;
    const config = {}
    try {
        const response = await axios.get(url,config);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const deleteOne = async ({id})=>{
    const url = `${baseUrl}/accounts/announcements/${id}/`;
    const config = {
        headers : {
            Authentization : `Bearer ${token}`
        }
    }
    try {
        const response = await axios.delete(url,config);
        return response;
    } catch (error) {
        console.log(error)
    }
}