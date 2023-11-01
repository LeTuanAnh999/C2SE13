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

  // ứng tuyển công việc
  export const postapplyjobapi= async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/applyjob", data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };
  

  
  export const getlistpostapplyjobapi= async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/listapplyjob", data, { headers});
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };
  

  // chi tiết công việc

  export const chitietcongviecapi= async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/getchitietcongviec", data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };


  // tìm kiếm công việc
  export const timkiemcongviecapi= async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.get(baseURL + "/api/v1/tim-viec?"+data, { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };


  // công ty nổi bật

  export const congtynoibatapi= async () => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.get(baseURL + "/api/v1/getcongtynoibat", { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };

