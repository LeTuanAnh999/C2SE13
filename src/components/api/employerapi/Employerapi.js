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

    console.log(token)
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


// lấy dữ liệu  đăng tin
export const getpostnewapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/getdanhsachcv-employer", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};
// yeeu cau hien thi

export const yeucaunewapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/yeucauhienthi", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};

//get list yeucaughienthi
export const postlistyeucaunewapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/getlistyeucauhienthi", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};



//get list yeucaughienthi
export const postlistdanhsachungvienapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/danhsachcvfornhatuyendung", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};
//tải cv
export const taicvnapi = async (data) => {
  try {
    const response = await axios.post(baseURL + "/api/v1/taicv", data, {
    
      headers: {
        Accept: 'application/octet-stream',
        'Content-Type': 'application/json',
      },
    });


    return response
   
    
  } catch (error) {
    console.log("Lỗi API:", error);
  }
};


// trạng thái ứng viên
export const trangthaiungvienapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/trangthaiungviens", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};


// lấy thông tin 
export const postthongtinnhatuyendungapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/laythongtinnhatuyendung", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};


export const getthongtinnhatuyendungapi2 = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.get(baseURL + "/api/v1/laythongtinnhatuyendung2", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};
// UPDATE thông tin 
export const postupdatethongtinnhatuyendungapi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/updatethongtintuyendung", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};

export const postupdatethongtinnhatuyendungapi2 = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/updatethongtintuyendung2", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};




export const posthongtinungtuyenmoi = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.post(baseURL + "/api/v1/getlistthongtinungtuyenmoi", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};



export const laylistgoiy= async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json' // Thêm tiêu đề Content-Type
    };

    return axios.get(baseURL + "/api/v1/getlistgoiy", data, { headers });
  } catch (error) {
    console.log("lỗi api:", error);
  }
};