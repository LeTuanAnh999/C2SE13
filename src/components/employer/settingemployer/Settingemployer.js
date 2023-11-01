import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { Button, Modal, Upload,message } from 'antd';
import "./style.css"
import logo from "./noavatar-2.18f0212.svg"
import { postthongtinnhatuyendungapi } from '../../api/employerapi/Employerapi';
import { postupdatethongtinnhatuyendungapi } from '../../api/employerapi/Employerapi';
import { postupdatethongtinnhatuyendungapi2 } from '../../api/employerapi/Employerapi';
import { useState } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const { TabPane } = Tabs;

function Settingemployer(props) {

  console.log(props)
  
  const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [base64Image, setBase64Image] = useState(null);
  const beforeUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Data = event.target.result;
      setBase64Image(base64Data);
    };

    reader.readAsDataURL(file);

    // Prevent the default upload behavior
    return false;
  };

  const [base64Image2, setBase64Image2] = useState(null);
  const beforeUpload2 = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Data2 = event.target.result;
      setBase64Image2(base64Data2);
    };

    reader.readAsDataURL(file);

    // Prevent the default upload behavior
    return false;
  };



  const [base64Image3, setBase64Image3] = useState(null);
  const beforeUpload3 = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Data3 = event.target.result;
      setBase64Image3(base64Data3);
    };

    reader.readAsDataURL(file);

    // Prevent the default upload behavior
    return false;
  };
  const [dataem,setdataem] = useState({})
   const fecththongtin = async()=>{

    const user_id = window.localStorage.getItem("employerid")
    const data = new FormData()
    data.append("user_id",user_id)
    const  result = await  postthongtinnhatuyendungapi(data)
    console.log("aaaa",result)
    setdataem(result.data.data[0])
   }
  




  const handleChangename = (event)=>{
   
      // Update the dataem state with the new value
      setdataem({
        ...dataem,
        name: event.target.value,
      });
    
  }
  const handleChangephone = (event)=>{
    setdataem({
      ...dataem,
      phone: event.target.value,
    });
  }
  const handleChangegioitinh = (event)=>{
    setdataem({
      ...dataem,
      gender: event.target.value,
    });
  }
  const handleChangskye = (event)=>{
    setdataem({
      ...dataem,
      skype: event.target.value,
    });
  }

  const handleChangeworklocation = (event)=>{
    setdataem({
      ...dataem,
      worklocation: event.target.value,
    });
  }

  const handleChangequymo = (event)=>{
    setdataem({
      ...dataem,
      quymo: event.target.value,
    });
  }

  const handleChangegioithieucongty= (event)=>{
    setdataem({
      ...dataem,
      gioithieucty: event.target.value,
    });
  }

  const handleChangeptencongty= (event)=>{
    setdataem({
      ...dataem,
      name_cty: event.target.value,
    });
  }
  const huythongtin =()=>{

  }
  const savethongtin = async()=>{
    
    const data = new FormData();
     data.append("user_id", dataem.user_id)
    data.append("name", dataem.name)
    data.append("gender",dataem.gender);
    data.append("phone", dataem.phone);
    data.append("imagebase64", base64Image)
  
    
    
    const result = await postupdatethongtinnhatuyendungapi(data);
    if(result.data.data="ok"){
      messageApi.open({
        type: 'success',
        content: 'Thành Công',
        style: {
          marginTop: '20vh',
        },
      });
      fecththongtin()
    }
  }

  const savethongtinemployer = async()=>{
    
    // console.log(base64Image3)
    // console.log(dataem.quymo, dataem.gioithieucty)
    const data = new FormData();
     data.append("user_id", dataem.user_id)
    data.append("name_cty", dataem.name_cty)
    data.append("worklocation",dataem.worklocation);
    data.append("skype", dataem.skype);
    if(base64Image2 == null || base64Image2 == "null"){
      data.append("imagebase642", dataem.image)
    }
    else{
    data.append("imagebase642", base64Image2)}

    if(base64Image3 == null || base64Image3 == "null"){
      data.append("imagebase64banner", dataem.image_banner)
    }else{
    data.append("imagebase64banner", base64Image3)}
    data.append("gioithieucty", dataem.gioithieucty)
    data.append("quymo", dataem.quymo)

    const result = await postupdatethongtinnhatuyendungapi2(data);
    if(result.data.data="ok"){
      messageApi.open({
        type: 'success',
        content: 'Thành Công',
        style: {
          marginTop: '20vh',
        },
      });
      fecththongtin()
    }
  }


  useEffect(()=>{
      fecththongtin()
  },[])
  return (
    <>
     {contextHolder}
    <Modal title="Đổi avatar" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <>

      <Upload
          showUploadList={false}
          beforeUpload={beforeUpload}
        >
          <Button>Upload Image</Button>
        </Upload>
        {base64Image && (
          <img src={base64Image} className='mt-2' alt="Uploaded Avatar" style={{ maxWidth: '100%' }} />
        )}
        </>
      </Modal>
           <div data-v-07f0dc2d="">
                <div className='page-wrapper2 chiller-theme'>

                <div className='page-container'>
                <div data-v-502ae57c="" className="homepage-banner container-fluid page-content pd-b-0"></div>


                    <div className='container-fluid page-content'>

                      <div className='d-flex shadow-sm'>
                                  <Tabs
                    defaultActiveKey="1"
                    type="card"
                    tabPosition='left'
                    
                    // renderTabContent={}
                  >
                    <TabPane tab="Thông tin cá nhân" key="1"  style={{backgroundColor:"white", width:"100%"}}>
                          <div className='' style={{minWidth:"1089px",  minHeight:"600px"}}>
                              <div data-v-4a44ee18="" className="card-header bg-white font-weight-bold border-0 fs-16">
                                Cập nhật thông tin cá nhân
                              </div>

                              <div className='card-bodys setting-form px-1 py-1'>
                                <div data-v-4a44ee18="" className="row">
                            <div data-v-4a44ee18="" className="form-group col-md-6">
                                <div data-v-4a44ee18="" className="d-flex align-items-center px-2 py-2">
                                  <label data-v-4a44ee18="" className="col-form-label mr-2">Avatar</label> 
                                  <div data-v-2a31697a="" data-v-4a44ee18="" className="mr-2  avatar" style={{width:"40px", height:"40px"}}>
                                  
                                  <img src={base64Image ? base64Image : dataem.image == null?logo: dataem.image} className='px-2 py-2' style={{width:"100px", height:"100px", borderRadius:"20px"}}  />


                                  </div>
                                  <div data-v-4a44ee18="" className='' style={{marginLeft:"4rem"}}>
                                    
                                      <input data-v-4a44ee18="" name="avatar" type="text" className="d-none"/> <button data-v-4a44ee18="" type="button" className="btn btn-light" onClick={showModal}>
                                      Đổi avatar
                                      </button>
                                  </div>
                                </div>
                            </div>
                            <div data-v-4a44ee18="" className="form-group col-md-6 mt-5"><label data-v-4a44ee18="" className="col-form-label">Email: {props.mydata.email}</label></div>
                                </div>

                                <div className='row px-4 py-4'>
                                  <div className='form-group col-md-6'>
                                  <label data-v-4a44ee18="">Họ và tên</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="" type="text" class="form-control" value={dataem.name}  onChange={handleChangename} />
                                  </div>

                                  </div>
                                  <div className='form-group col-md-6'>
                                  <label data-v-4a44ee18="">Giới tính</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="" type="text" class="form-control" value={dataem.gender} onChange={handleChangegioitinh}/>
                                  </div>

                                  </div>



                                </div>
                                <div className='row px-4 py-4' style={{marginTop:"-1rem"}}>
                                  <div className='form-group col-md-6'>
                                  <label data-v-4a44ee18="">Số điện thoại</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder=""value={dataem.phone} onChange={handleChangephone} type="text" class="form-control"/>
                                  </div>

                                  </div>
                                  <div className=' col-md-6'>
                                  <label data-v-4a44ee18="">Loại</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="" type="text" class="form-control" value={props.mydata.role}/>
                                  </div>

                                  </div>



                                </div>
                                <div className=' px-4 py-4'>
                                <hr data-v-4a44ee18="" className='px-4 '/>
                               
                                  <div data-v-4a44ee18="" class="form-group mb-0"><a data-v-4a44ee18="" href="/app-employer/setting" class="btn min-width btn btn-secondary mr-2 btn-lg px-2 py-2 m-1" onClick={huythongtin}>Hủy </a> 
                                  <button data-v-4a44ee18="" type="submit" class="btn min-width btn btn-primary btn-lg px-2 py-2 m-1" onClick={savethongtin}>
                                            Lưu
                                                        
                                          
                                  </button  ></div>
                                  </div>
                              </div>

                                
                          </div>
                        </TabPane>

                        <TabPane tab="Thông tin công ty" key="3" style={{backgroundColor:"white"}}>
                        <div className='' style={{minWidth:"1089px",  minHeight:"600px"}}>
                              <div data-v-4a44ee18="" className="card-header bg-white font-weight-bold border-0 fs-16">
                                 Thông tin công ty
                              </div>
                              <div data-v-4a44ee18="" className="form-group col-md-6">
                                <div data-v-4a44ee18="" className="d-flex align-items-center px-2 py-2">
                                  <label data-v-4a44ee18="" className="col-form-label mr-2">Avatar</label> 
                                  <div data-v-2a31697a="" data-v-4a44ee18="" className="mr-2  avatar" style={{width:"40px", height:"40px"}}>
                                  
                                  <img src={base64Image2 ? base64Image2 : dataem.imageempolyer == "null"?logo: dataem.imageempolyer} className='px-2 py-2' style={{width:"100px", height:"100px", borderRadius:"20px"}}  />


                                  </div>
                                  <div data-v-4a44ee18="" className='' style={{marginLeft:"4rem"}}>
                                    
                                      <input data-v-4a44ee18="" name="avatar" type="text" className="d-none"/> <button data-v-4a44ee18="" type="button" className="btn btn-light" onClick={showModal}>
                                      Đổi avatar
                                      </button>
                                  </div>
                                </div>
                            </div>

                              <div className='mt-5'>
                                        <Upload
                                        showUploadList={false}
                                        beforeUpload={beforeUpload2}
                                      >
                                        <Button>Upload Image</Button>
                                      </Upload>
                                      {base64Image2 && (
                                        <img src={base64Image2} className='mt-2' alt="Uploaded Avatar" style={{ maxWidth: '100%' }} />
                                      )}
                  


                              </div>

                              <div className='row px-4 py-4' style={{marginTop:"-1rem"}}>
                                      <div data-v-4a44ee18="" className="card-header bg-white font-weight-bold border-0 fs-16">
                                        Thông tin 
                                      </div>
                                  <div className='form-group col-md-6'>
                                    <label data-v-4a44ee18="">Tên công ty</label>
                                    <div className='input-container ml-auto position-relative'>
                                    <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder=""value={dataem.name_cty} onChange={handleChangeptencongty} type="text" class="form-control"/>
                                    </div>

                                    </div>
                                    <div className=' col-md-6'>
                                
                                  </div>

                                  <div className='form-group col-md-6'>
                                    <label data-v-4a44ee18="">Địa điểm</label>
                                    <div className='input-container ml-auto position-relative'>
                                    <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder=""value={dataem.worklocation} onChange={handleChangeworklocation} type="text" class="form-control"/>
                                    </div>

                                    </div>
                                    <div className=' col-md-6'>
                                    <label data-v-4a44ee18="">Skype</label>
                                    <div className='input-container ml-auto position-relative'>
                                    <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="" type="text" class="form-control" value={dataem.skype} onChange={handleChangskye}/>
                                    </div>
                                  </div>



                                  <div className='form-group col-md-6'>
                                    <label data-v-4a44ee18="">Quy mô</label>
                                    <div className='input-container ml-auto position-relative'>
                                    <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder=""value={dataem.quymo} onChange={handleChangequymo} type="text" class="form-control"/>
                                    </div>

                                    </div>
                                    <div className=' col-md-6'>
                                    <label data-v-4a44ee18="">Ảnh Banner công ty</label>
                                    <div className='input-container ml-auto position-relative'>
                                    <img src={base64Image3 ? base64Image3 : dataem.image_banner == ""?logo: dataem.image_banner} className='px-2 py-2' style={{width:"100px", height:"100px", borderRadius:"20px"}}  />
                                   <>
                                    <Upload
                                          showUploadList={false}
                                          beforeUpload={beforeUpload3}
                                        >
                                          <Button>Upload Image</Button>
                                        </Upload>
                                        {base64Image3 && (
                                          <img src={base64Image3} className='mt-2' alt="Uploaded Avatar" style={{ maxWidth: '100%' }} />
                                        )}
                                        </>
                                    </div>
                                  </div>


                                  <div className='form-group col-md-6'>
                                    <label data-v-4a44ee18="">Giới thiệu công ty</label>
                                    <div className='input-container ml-auto position-relative'>
                                    <TextArea rows={4} placeholder={dataem.gioithieucty} maxLength={400}  onChange={handleChangegioithieucongty}/>
                                    </div>

                                    </div>
                               



                                </div>

                                <div className=' px-4 py-4'>
                                <hr data-v-4a44ee18="" className='px-4 '/>
                                {/* <p data-v-4a44ee18=""><b data-v-4a44ee18="">Thông tin thêm</b></p> */}
                                  {/* <div className='form-group'>
                                  <label data-v-4a44ee18="">Skype</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="Nhập skype" type="text" class="form-control"  onChange={handleChangskye} value={dataem.skype}/>
                                  </div>
                                  </div> */}
                                  <div data-v-4a44ee18="" class="form-group mb-0"><a data-v-4a44ee18="" href="/app-employer/setting" class="btn min-width btn btn-secondary mr-2 btn-lg px-2 py-2 m-1" onClick={huythongtin}>Hủy </a> 
                                  <button data-v-4a44ee18="" type="submit" class="btn min-width btn btn-primary btn-lg px-2 py-2 m-1" onClick={savethongtinemployer}>
                                            Lưu
                                                        
                                          
                                  </button  ></div>
                                  </div>

                              </div>
                        </TabPane>
                        {/* <TabPane tab="Đổi mật khẩu" key="2" style={{backgroundColor:"white"}}>
                        <div className='' style={{minWidth:"1089px",  minHeight:"600px"}}>
                              <div data-v-4a44ee18="" className="card-header bg-white font-weight-bold border-0 fs-16">
                                 Đổi mật khẩu
                              </div>

                              </div>
                        </TabPane> */}

                    </Tabs>
                      </div>
                    </div>
            </div>
            </div>
            </div>
                            
    
    
    
    
    </>
  )
}

export default Settingemployer;