import axios from "axios";
//  link get  /   params
const  baseURL= "http://localhost:5000";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});
export const postAPI = (url, data) => {
    return instance.post(url, data);
  };



  export const registerCandidate = async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/registercandidate", data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };

  export const SignCandidateapi = async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/signcandidate", data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };

  export const  verify_token = async (token) => {
    try {
      const headers = {
        'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
        'Authorization': 'Bearer ' +token,

      };
      // console.log(headers)
      return axios.get(baseURL + "/api/v1/verify_token", { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };












  // export const getdatacharttongquanthitruong= async()=>{
  //   try{
  //     const {data} = await axios.get(baseURL + "apiv4/chart/tongquanthitruong");
  //     return data;
  //   }
  //   catch(error){
  //     console.log("lỗi api");
  //   }
  // };

  // export const postmatch_id = (data) => {
    
  //   return instance.post(baseURL +"apiv4/admin/update/marketanalytics/match_id", data);

  // };


  

