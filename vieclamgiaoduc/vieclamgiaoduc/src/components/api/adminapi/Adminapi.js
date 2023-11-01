import axios from "axios";
//  link get  /   params
const  baseURL= "http://localhost:5000";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});
export const postAPI = (url, data) => {
    return instance.post(url, data);
  };





  export const signadmin = async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
      };
  
      return axios.post(baseURL + "/api/v1/signadmin", data, { headers });
    } catch (error) {
      console.log("Error api:", error);
    }
  };
  export const  verify_token_admin = async (token) => {
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

  // get du lieu moi nhat
  export const  getdulieumoinhat = async (token) => {
    try {
      const headers = {
        'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
       

      };
      // console.log(headers)
      return axios.get(baseURL + "/api/v1/getdulieuanamoinhat", { headers });
    } catch (error) {
      console.log("lỗi api:", error);
    }
  };


  // nganh nghe
    // get du lieu moi nhat
    export const  getdulieutheonganhnghe = async (token) => {
      try {
        const headers = {
          'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
         
  
        };
        // console.log(headers)
        return axios.get(baseURL + "/api/v1/getdulieutheonganhnghe", { headers });
      } catch (error) {
        console.log("lỗi api:", error);
      }
    };

    //luong
    export const  getdulieutheoluong = async (token) => {
      try {
        const headers = {
          'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
         
  
        };
        // console.log(headers)
        return axios.get(baseURL + "/api/v1/getdulieutheoluong", { headers });
      } catch (error) {
        console.log("lỗi api:", error);
      }
    };
    // tăng trưởng

    export const  getdulieutheotangtruong= async () => {
      try {
        const headers = {
          'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
         
  
        };
        // console.log(headers)
        return axios.get(baseURL + "/api/v1/getdulieutheotangtruong", { headers });
      } catch (error) {
        console.log("lỗi api:", error);
      }
    };

        // congviec

    export const  getdulieuthongke= async () => {
          try {
            const headers = {
              'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
             
      
            };
            // console.log(headers)
            return axios.get(baseURL + "/api/v1/getdulieucongviec", { headers });
          } catch (error) {
            console.log("lỗi api:", error);
          }
        };

    
  
    
        export const  capnhatdulieuvieclam= async () => {
          try {
            const headers = {
              'Content-Type': 'application/json' ,// Thêm tiêu đề Content-Type
             
      
            };
            // console.log(headers)
            return axios.get(baseURL + "/apiv1/getdatagiaoduc", { headers });
          } catch (error) {
            console.log("lỗi api:", error);
          }
        };
