import axios from "axios";
//  link get  /   params
const  baseURL= "http://localhost:5000";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});
export const postAPI = (url, data) => {
    return instance.post(url, data);
  };



  export const get_all_job = async (page) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.get(baseURL + "/api/v1/getalljob?page="+page, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };