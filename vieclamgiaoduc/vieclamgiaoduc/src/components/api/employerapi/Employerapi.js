import axios from "axios";
//  link get  /   params
const  baseURL= "http://localhost:5000";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});
export const postAPI = (url, data) => {
    return instance.post(url, data);
  };



  export const registeremployer = async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/registeremployer", data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };

  export const singemployer = async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/signemployer", data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };
  export const  verify_token_employer = async (token) => {
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
//đăng tin

export const postnewapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/postnews", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};