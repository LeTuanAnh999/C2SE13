import React from 'react'
import { Tabs } from 'antd';
import "./style.css"
import logo from "./noavatar-2.18f0212.svg"
const { TabPane } = Tabs;
function Settingemployer(props) {

  console.log(props)
    const renderTabContent = (item) => {
      return (
        <div>
          <h2>{item.label}</h2>
          <p>{item.children}</p>
          <div className="custom-div">Custom Content for {item.label}</div>
        </div>
      );
    };
  return (
    <>
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
                                           
                                              <img  src={logo}  className='px-2 py-2'/>   

                                  </div>
                                  <div data-v-4a44ee18="">
                                      <div data-v-99294026="" data-v-4a44ee18="" className="file-upload mt-2 d-none" name="avatar" type="file">
                                        <div data-v-99294026="" className="mx-4">
                                            <span data-v-99294026="" className="text-muted"><span data-v-99294026="">Chọn hoặc kéo file vào đây</span></span> 
                                        </div>
                                        <input data-v-99294026="" id="avatar" accept="image/*" type="file"/> <label data-v-99294026="" for="audio-file" className="btn btn-secondary text-primary btn-sm mt-2"><i data-v-99294026="" className="fas fa-upload"></i> Chọn file </label>
                                      </div>
                                      <input data-v-4a44ee18="" name="avatar" type="text" className="d-none"/> <button data-v-4a44ee18="" type="button" className="btn btn-light">
                                      Đổi avatar
                                      </button>
                                  </div>
                                </div>
                            </div>
                            <div data-v-4a44ee18="" className="form-group col-md-6"><label data-v-4a44ee18="" className="col-form-label">Email: {props.mydata.email}</label></div>
                                </div>

                                <div className='row px-4 py-4'>
                                  <div className='form-group col-md-6'>
                                  <label data-v-4a44ee18="">Họ và tên</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="" type="text" class="form-control" value={props.mydata.name}/>
                                  </div>

                                  </div>
                                  <div className='form-group col-md-6'>
                                  <label data-v-4a44ee18="">Giới tính</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="" type="text" class="form-control" value={"Nam"}/>
                                  </div>

                                  </div>



                                </div>
                                <div className='row px-4 py-4' style={{marginTop:"-1rem"}}>
                                  <div className='form-group col-md-6'>
                                  <label data-v-4a44ee18="">Số điện thoại</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder=""value={props.mydata.phone} type="text" class="form-control"/>
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
                                <p data-v-4a44ee18=""><b data-v-4a44ee18="">Thông tin thêm</b></p>
                                  <div className='form-group'>
                                  <label data-v-4a44ee18="">Skype</label>
                                  <div className='input-container ml-auto position-relative'>
                                  <input data-v-7120bfb0="" id="reVjcSuVmy" autocomplete="true" placeholder="Nhập họ và tên" type="text" class="form-control"/>
                                  </div>
                                  </div>
                                  <div data-v-4a44ee18="" class="form-group mb-0"><a data-v-4a44ee18="" href="/app/dashboard" class="btn min-width btn btn-secondary mr-2 btn-lg px-2 py-2 m-1">Hủy </a> 
                                  <button data-v-4a44ee18="" type="submit" class="btn min-width btn btn-primary btn-lg px-2 py-2 m-1">
                                            Lưu
                                                        
                                          
                                  </button></div>
                                  </div>
                              </div>

                                
                          </div>
                        </TabPane>

                        <TabPane tab="Thông tin công ty" key="3" style={{backgroundColor:"white"}}>
                        <div className='' style={{minWidth:"1089px",  minHeight:"600px"}}>
                              <div data-v-4a44ee18="" className="card-header bg-white font-weight-bold border-0 fs-16">
                                 Thông tin công ty
                              </div>

                              </div>
                        </TabPane>
                        <TabPane tab="Đổi mật khẩu" key="2" style={{backgroundColor:"white"}}>
                        <div className='' style={{minWidth:"1089px",  minHeight:"600px"}}>
                              <div data-v-4a44ee18="" className="card-header bg-white font-weight-bold border-0 fs-16">
                                 Đổi mật khẩu
                              </div>

                              </div>
                        </TabPane>

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