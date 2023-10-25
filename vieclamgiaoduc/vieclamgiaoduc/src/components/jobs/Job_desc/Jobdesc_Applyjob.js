import React,{useEffect,useRef,useState} from 'react'
import "./styledesc.css"
import User_header from '../../user/page_header/User_header'
import {  useParams,useLocation } from 'react-router-dom';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Jobdesc_Applyjob() {
  const location = useLocation();
  const activetimviec=(name)=>{
      if(name === true){
          const idviec = document.getElementById('my-viec');
          idviec.style.color="#00b14f"
      }
      
  }
  useEffect(() => {
    activetimviec(location.pathname.includes('viec-lam'));
  }, [location.pathname]);
  return (
    <>
    <User_header/>
    <div className='job-apply' id ='main' style={{marginTop:"4.888rem"}}>
      <div className="search-job">
        <div className='header'>
          <div id='box-option-search-job' className="box-search-job">
            <div className='container'>
              <div id="frm-search-job">

                <div className='group-search'>
                  <div className='item item-search'>
                  <i className="fa-regular fa-magnifying-glass"></i>
                  <input className="form-controlui-className-input ui-className-input" value="" placeholder="Vị trí tuyển dụng" id="keyword" >
                  </input>
                  </div>
                  <div className='item search-city'>
                <i className="fa-regular fa-location-dot"></i>
                <Select options={options}
                         
                         id="city" name="city" 
                         placeholder=" Địa điểm"
                         
                         />
                </div>
                </div>

                

                <div className='group'>
                  <div className='item group-item-experience'>
                    <div className="icon">
                      <i className="fa-regular fa-circle-star"></i>
                    </div>
                    <Select options={options}
                         
                         id="exp-advanced" name="city" 
                         placeholder="Kinh nghiệm"
                         
                         />
                  </div>
                  <div className='item group-item-salary'>
                   <div className="icon">
                      <i className="fa-regular fa-circle-dollar"></i>
                    </div>
                    <Select options={options}
                         
                         id="salary-advanced" name="city" 
                         placeholder="Mức lương"
                         
                         />
                  </div>

                </div>

                <div className="col-button">
                 <button className="btn btn-topcv btn-search-job" type="submit">Tìm kiếm</button>
                </div>


              </div>

            </div>

          </div>

        </div>

      </div>


      <div className='container job-detail' id="job-detail">
        <div className="ctn-breadcrumb-detail">
          <a href="/" className="text-highlight bold">Trang chủ</a> <i className="fa-solid fa-angle-right"></i>
          <a href="/" className="text-highlight bold">Tìm việc làm giáo dục</a> <i className="fa-solid fa-angle-right"></i>
          <span className="text-dark-blue">Tuyển Nhân Viên Kinh Doanh (Kinh Nghiệm Bán Vật Liệu Xây Dựng, Thu Nhập Từ 15 Triệu/Tháng)</span>
          </div>

       


        {/* chi tiết */}
        <div className='job-detail__wrapper'>
          <div className='job-detail__header'>
            <div className='job-detail__box--left job-detail__info' id="header-job-info">
              <h1 className="job-detail__info--title ">
                  <a href="/h" className="text-highlight" target="_blank">Nhân Viên Kinh Doanh</a> 
                  (Kinh Nghiệm Bán Vật Liệu Xây Dựng, Thu Nhập Từ 15 Triệu/Tháng)
              </h1>

              {/* hàng đầu */}
              <div className='job-detail__info--sections'>
                <div className='job-detail__info--section'>
                  <div className='job-detail__info--section-icon'>
               
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.92 16.75C21.59 19.41 19.41 21.59 16.75 21.92C15.14 22.12 13.64 21.68 12.47 20.82C11.8 20.33 11.96 19.29 12.76 19.05C15.77 18.14 18.14 15.76 19.06 12.75C19.3 11.96 20.34 11.8 20.83 12.46C21.68 13.64 22.12 15.14 21.92 16.75Z" fill="white"></path>
                    <path d="M9.99 2C5.58 2 2 5.58 2 9.99C2 14.4 5.58 17.98 9.99 17.98C14.4 17.98 17.98 14.4 17.98 9.99C17.97 5.58 14.4 2 9.99 2ZM9.05 8.87L11.46 9.71C12.33 10.02 12.75 10.63 12.75 11.57C12.75 12.65 11.89 13.54 10.84 13.54H10.75V13.59C10.75 14 10.41 14.34 10 14.34C9.59 14.34 9.25 14 9.25 13.59V13.53C8.14 13.48 7.25 12.55 7.25 11.39C7.25 10.98 7.59 10.64 8 10.64C8.41 10.64 8.75 10.98 8.75 11.39C8.75 11.75 9.01 12.04 9.33 12.04H10.83C11.06 12.04 11.24 11.83 11.24 11.57C11.24 11.22 11.18 11.2 10.95 11.12L8.54 10.28C7.68 9.98 7.25 9.37 7.25 8.42C7.25 7.34 8.11 6.45 9.16 6.45H9.25V6.41C9.25 6 9.59 5.66 10 5.66C10.41 5.66 10.75 6 10.75 6.41V6.47C11.86 6.52 12.75 7.45 12.75 8.61C12.75 9.02 12.41 9.36 12 9.36C11.59 9.36 11.25 9.02 11.25 8.61C11.25 8.25 10.99 7.96 10.67 7.96H9.17C8.94 7.96 8.76 8.17 8.76 8.43C8.75 8.77 8.81 8.79 9.05 8.87Z" fill="white"></path>
                    </svg>


                  </div>

                   <div className='job-detail__info--section-content'>
                    <div className="job-detail__info--section-content-title">Mức lương</div>
                    <div className="job-detail__info--section-content-value">Trên 15 triệu</div>
                   </div>

                </div>

                <div className="job-detail__info--section">
                  <div className="job-detail__info--section-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M21.2866 8.45C20.2366 3.83 16.2066 1.75 12.6666 1.75C12.6666 1.75 12.6666 1.75 12.6566 1.75C9.1266 1.75 5.0866 3.82 4.0366 8.44C2.8666 13.6 6.0266 17.97 8.8866 20.72C9.9466 21.74 11.3066 22.25 12.6666 22.25C14.0266 22.25 15.3866 21.74 16.4366 20.72C19.2966 17.97 22.4566 13.61 21.2866 8.45ZM12.6666 13.46C10.9266 13.46 9.5166 12.05 9.5166 10.31C9.5166 8.57 10.9266 7.16 12.6666 7.16C14.4066 7.16 15.8166 8.57 15.8166 10.31C15.8166 12.05 14.4066 13.46 12.6666 13.46Z" fill="white"></path>
                  </svg>
                  </div>
                  <div className="job-detail__info--section-content">
                  <div className="job-detail__info--section-content-title">Địa điểm</div>
                  <div className="job-detail__info--section-content-value">Long An &amp; 67 nơi khác</div>
                  </div>
                </div>

                <div className="job-detail__info--section special btn-relevance-score" id="job-detail-info-fitness-score" style={{display:"flex"}}>
                    <div className="job-detail__info--section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M14.0634 3.51L15.8234 7.03C16.0634 7.52 16.7034 7.99 17.2434 8.08L20.4334 8.61C22.4734 8.95 22.9534 10.43 21.4834 11.89L19.0034 14.37C18.5834 14.79 18.3534 15.6 18.4834 16.18L19.1934 19.25C19.7534 21.68 18.4634 22.62 16.3134 21.35L13.3234 19.58C12.7834 19.26 11.8934 19.26 11.3434 19.58L8.35341 21.35C6.21341 22.62 4.91341 21.67 5.47341 19.25L6.18341 16.18C6.31341 15.6 6.08341 14.79 5.66341 14.37L3.18341 11.89C1.72341 10.43 2.19341 8.95 4.23341 8.61L7.42341 8.08C7.95341 7.99 8.59341 7.52 8.83341 7.03L10.5934 3.51C11.5534 1.6 13.1134 1.6 14.0634 3.51Z" fill="white"></path>
                    </svg>
                    </div>
                    <div className="job-detail__info--section-content">
                    <div className="job-detail__info--section-content-title">
                    <div>
                    Mức độ phù hợp với công việc: <span id="btn-relevance-percent" className="title-bold">100%</span>
                    </div>
                    <span className="special__icon-down">
                    
                    </span>
                    </div>
                    </div>
                </div>
              </div>
              {/* hàng 2 */}
              <div className='job-detail__info--sections'>
                <div className='job-detail__info--section'>
                  <div className='job-detail__info--section-icon'>
               
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.09 6.98002C20.24 6.04002 18.82 5.57002 16.76 5.57002H16.52V5.53002C16.52 3.85002 16.52 1.77002 12.76 1.77002H11.24C7.47998 1.77002 7.47998 3.86002 7.47998 5.53002V5.58002H7.23998C5.16998 5.58002 3.75998 6.05002 2.90998 6.99002C1.91998 8.09002 1.94998 9.57002 2.04998 10.58L2.05998 10.65L2.13743 11.4633C2.1517 11.6131 2.23236 11.7484 2.35825 11.8307C2.59806 11.9877 2.9994 12.2464 3.23998 12.38C3.37998 12.47 3.52998 12.55 3.67998 12.63C5.38998 13.57 7.26998 14.2 9.17998 14.51C9.26998 15.45 9.67998 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.8967 12.0958 21.3083 11.8195 21.6834 11.5489C21.7965 11.4673 21.8687 11.3413 21.8841 11.2028L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.40002 22.03 8.02002 21.09 6.98002ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.90998 5.57002V5.53002C8.90998 3.83002 8.90998 3.20002 11.24 3.20002H12.76C15.09 3.20002 15.09 3.84002 15.09 5.53002V5.58002H8.90998V5.57002Z" fill="white"></path>
                            <path d="M20.8735 13.7342C21.2271 13.5659 21.6344 13.8462 21.599 14.2362L21.24 18.19C21.03 20.19 20.21 22.23 15.81 22.23H8.19003C3.79003 22.23 2.97003 20.19 2.76003 18.2L2.41932 14.4522C2.38427 14.0667 2.78223 13.7868 3.13487 13.9463C4.27428 14.4618 6.37742 15.3764 7.6766 15.7167C7.8409 15.7597 7.9738 15.8773 8.04574 16.0312C8.65271 17.3293 9.96914 18.02 11.87 18.02C13.7521 18.02 15.0852 17.3027 15.6942 16.0014C15.7662 15.8474 15.8992 15.7299 16.0636 15.6866C17.4432 15.3236 19.6818 14.3013 20.8735 13.7342Z" fill="white"></path>
                            </svg>


                  </div>

                   <div className='job-detail__info--section-content'>
                    <div className="job-detail__info--section-content-title">Hình thức làm việc</div>
                    <div className="job-detail__info--section-content-value">Toàn thời gian</div>
                   </div>

                </div>

                <div className="job-detail__info--section">
                  <div className="job-detail__info--section-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17.81 5.49V6.23L14.27 4.18C12.93 3.41 11.06 3.41 9.73 4.18L6.19 6.24V5.49C6.19 3.24 7.42 2 9.67 2H14.33C16.58 2 17.81 3.24 17.81 5.49Z" fill="white"></path>
                      <path d="M17.84 7.96999L17.7 7.89999L16.34 7.11999L13.52 5.48999C12.66 4.98999 11.34 4.98999 10.48 5.48999L7.66 7.10999L6.3 7.90999L6.12 7.99999C4.37 9.17999 4.25 9.39999 4.25 11.29V15.81C4.25 17.7 4.37 17.92 6.16 19.13L10.48 21.62C10.91 21.88 11.45 21.99 12 21.99C12.54 21.99 13.09 21.87 13.52 21.62L17.88 19.1C19.64 17.92 19.75 17.71 19.75 15.81V11.29C19.75 9.39999 19.63 9.17999 17.84 7.96999ZM14.79 13.5L14.18 14.25C14.08 14.36 14.01 14.57 14.02 14.72L14.08 15.68C14.12 16.27 13.7 16.57 13.15 16.36L12.26 16C12.12 15.95 11.89 15.95 11.75 16L10.86 16.35C10.31 16.57 9.89 16.26 9.93 15.67L9.99 14.71C10 14.56 9.93 14.35 9.83 14.24L9.21 13.5C8.83 13.05 9 12.55 9.57 12.4L10.5 12.16C10.65 12.12 10.82 11.98 10.9 11.86L11.42 11.06C11.74 10.56 12.25 10.56 12.58 11.06L13.1 11.86C13.18 11.99 13.36 12.12 13.5 12.16L14.43 12.4C15 12.55 15.17 13.05 14.79 13.5Z" fill="white"></path>
                      </svg>
                  </div>
                  <div className="job-detail__info--section-content">
                  <div className="job-detail__info--section-content-title">Cấp bậc</div>
                  <div className="job-detail__info--section-content-value">Nhân viên</div>
                  </div>
                </div>

                <div className="job-detail__info--section">
                  <div className="job-detail__info--section-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.39 15.67L13.35 12H10.64L6.59998 15.67C5.46998 16.69 5.09998 18.26 5.64998 19.68C6.19998 21.09 7.53998 22 9.04998 22H14.94C16.46 22 17.79 21.09 18.34 19.68C18.89 18.26 18.52 16.69 17.39 15.67ZM13.82 18.14H10.18C9.79998 18.14 9.49998 17.83 9.49998 17.46C9.49998 17.09 9.80998 16.78 10.18 16.78H13.82C14.2 16.78 14.5 17.09 14.5 17.46C14.5 17.83 14.19 18.14 13.82 18.14Z" fill="white"></path>
                  <path d="M18.35 4.32C17.8 2.91 16.46 2 14.95 2H9.04998C7.53998 2 6.19998 2.91 5.64998 4.32C5.10998 5.74 5.47998 7.31 6.60998 8.33L10.65 12H13.36L17.4 8.33C18.52 7.31 18.89 5.74 18.35 4.32ZM13.82 7.23H10.18C9.79998 7.23 9.49998 6.92 9.49998 6.55C9.49998 6.18 9.80998 5.87 10.18 5.87H13.82C14.2 5.87 14.5 6.18 14.5 6.55C14.5 6.92 14.19 7.23 13.82 7.23Z" fill="white"></path>
                  </svg>
                  </div>
                  <div className="job-detail__info--section-content">
                  <div className="job-detail__info--section-content-title">Kinh nghiệm làm việc</div>
                  <div className="job-detail__info--section-content-value">1 năm</div>
                  </div>
                </div>
               
              </div>

              {/* hàng 3 */}
              <div className='job-detail__info--sections'>
                <div className='job-detail__info--section'>
                  <div className='job-detail__info--section-icon'>
               
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="white"></path>
                      <path d="M14.08 14.15C11.29 12.29 6.74002 12.29 3.93002 14.15C2.66002 15 1.96002 16.15 1.96002 17.38C1.96002 18.61 2.66002 19.75 3.92002 20.59C5.32002 21.53 7.16002 22 9.00002 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="white"></path>
                      <path d="M19.99 7.34001C20.15 9.28001 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.48001 15.73 8.10001 15.61 6.60001C15.54 5.79001 15.26 5.05001 14.84 4.42001C15.22 4.23001 15.66 4.11001 16.11 4.07001C18.07 3.90001 19.82 5.36001 19.99 7.34001Z" fill="white"></path>
                      <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="white"></path>
                      </svg>
                  </div>

                   <div className='job-detail__info--section-content'>
                    <div className="job-detail__info--section-content-title">Số lượng</div>
                    <div className="job-detail__info--section-content-value">10</div>
                   </div>

                </div>


                <div className="job-detail__info--section">
                  <div className="job-detail__info--section-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="white"></path>
                      <path d="M17.08 14.15C14.29 12.29 9.74002 12.29 6.93002 14.15C5.66002 15 4.96002 16.15 4.96002 17.38C4.96002 18.61 5.66002 19.75 6.92002 20.59C8.32002 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" fill="white"></path>
                      </svg>
                  </div>
                  <div className="job-detail__info--section-content">
                  <div className="job-detail__info--section-content-title">Giới tính </div>
                  <div className="job-detail__info--section-content-value">Nam</div>
                  </div>
                </div>
               
              </div>




{/* end */}

              <div className="job-detail__info--deadline ">
                  <span className="job-detail__info--deadline--icon">
                  <i className="fa-solid fa-clock"></i>
                  </span>
                  Hạn nộp hồ sơ: 31/08/2023
                </div>

                <div className="job-detail__info--actions box-apply-current">
                  <a href="#" className="job-detail__info--actions-button button-primary open-apply-modal" data-toggle="modal">
                      <span className="button-icon">
                      <i className="fa-light fa-paper-plane"></i>
                      </span>
                      Ứng tuyển ngay
                  </a>
                  <div id="box-save-job-1081970" className="box-save-job  job-notsave ">
                    <button className="job-detail__info--actions-button button-white" data-id="1081970" data-title="Nhân Viên Kinh Doanh (Kinh Nghiệm Bán Vật Liệu Xây Dựng, Thu Nhập Từ 15 Triệu/Tháng)" id="save-job">
                          {/* <span id="save-job-loading" style="display: none;">
                          <img loading="lazy" src="https://www.topcv.vn/v3/images/ap-loading.gif"  style={{width:"20px"}}/>
                          </span> */}
                          <span className="button-icon">
                          <i className="fa-regular fa-heart"></i>
                          </span>
                          Lưu tin
                    </button>
                      <button className="job-detail__info--actions-button button-white" data-toggle="tooltip" title="" data-id="1081970" data-title="Nhân Viên Kinh Doanh (Kinh Nghiệm Bán Vật Liệu Xây Dựng, Thu Nhập Từ 15 Triệu/Tháng)" id="unsave-job" data-original-title="Bỏ lưu">
                      {/* <span id="save-job-loading" style="display: none;">
                      <img loading="lazy" src="https://www.topcv.vn/v3/images/ap-loading.gif"  style={{width:"20px"}}/>
                      </span> */}
                      <span className="button-icon">
                      <i className="fa-regular fa-heart"></i>
                      </span>
                      Đã lưu
                      </button>
                  </div>
                  </div>

              
            </div>
            <div className='job-detail__box--right job-detail__company'>

            <div className='job-detail__company--information'>
                <div className="job-detail__company--information-item company-name">
                  <a className="company-logo" href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-mot-thanh-vien-su-thien-thanh/133820.html" target="_blank" data-toggle="tooltip" title="" data-placement="top" data-original-title="CÔNG TY TNHH MỘT THÀNH VIÊN SỨ THIÊN THANH">
                  <img src="https://cdn-new.topcv.vn/unsafe/80x/filters:format(webp)/https://static.topcv.vn/company_logos/T3gLkTxyVAQ9IAfwk4xtlfVCQGrgErCv_1676517962____1ec7579c9339c851c6d103d3e1324bbe.png" alt="CÔNG TY TNHH MỘT THÀNH VIÊN SỨ THIÊN THANH" className="img-responsive"/>
                  </a>
                  <h2 className="company-name-label">
                  <a className="name" href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-mot-thanh-vien-su-thien-thanh/133820.html" target="_blank" data-toggle="tooltip" title="" data-placement="top" data-original-title="CÔNG TY TNHH MỘT THÀNH VIÊN SỨ THIÊN THANH">CÔNG TY TNHH MỘT THÀNH VIÊN SỨ THIÊN THANH</a>
                  <div className="company-subdetail-label">
                  </div>
                  </h2>
                </div>

                <div className="job-detail__company--information-item company-scale">
                  <div className="company-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.99998 1.33334C4.25331 1.33334 2.83331 2.75334 2.83331 4.5C2.83331 6.21334 4.17331 7.6 5.91998 7.66C5.97331 7.65334 6.02665 7.65334 6.06665 7.66C6.07998 7.66 6.08665 7.66 6.09998 7.66C6.10665 7.66 6.10665 7.66 6.11331 7.66C7.81998 7.6 9.15998 6.21334 9.16665 4.5C9.16665 2.75334 7.74665 1.33334 5.99998 1.33334Z" fill="#7F878F"></path>
                  <path d="M9.38664 9.43333C7.52664 8.19333 4.49331 8.19333 2.61997 9.43333C1.77331 10 1.30664 10.7667 1.30664 11.5867C1.30664 12.4067 1.77331 13.1667 2.61331 13.7267C3.54664 14.3533 4.77331 14.6667 5.99997 14.6667C7.22664 14.6667 8.45331 14.3533 9.38664 13.7267C10.2266 13.16 10.6933 12.4 10.6933 11.5733C10.6866 10.7533 10.2266 9.99333 9.38664 9.43333Z" fill="#7F878F"></path>
                  <path d="M13.3267 4.89333C13.4333 6.18667 12.5133 7.32 11.24 7.47333C11.2333 7.47333 11.2333 7.47333 11.2267 7.47333H11.2067C11.1667 7.47333 11.1267 7.47333 11.0933 7.48667C10.4467 7.52 9.85334 7.31333 9.40668 6.93333C10.0933 6.32 10.4867 5.4 10.4067 4.4C10.36 3.86 10.1733 3.36667 9.89334 2.94667C10.1467 2.82 10.44 2.74 10.74 2.71333C12.0467 2.6 13.2133 3.57333 13.3267 4.89333Z" fill="#7F878F"></path>
                  <path d="M14.66 11.06C14.6067 11.7067 14.1933 12.2667 13.5 12.6467C12.8333 13.0133 11.9933 13.1867 11.16 13.1667C11.64 12.7333 11.92 12.1933 11.9733 11.62C12.04 10.7933 11.6467 10 10.86 9.36667C10.4133 9.01333 9.89333 8.73333 9.32666 8.52667C10.8 8.1 12.6533 8.38667 13.7933 9.30667C14.4067 9.8 14.72 10.42 14.66 11.06Z" fill="#7F878F"></path>
                  </svg>
                  Quy mô:
                  </div>
                  <div className="company-value">100-499 nhân viên</div>
                </div>

                <div class="job-detail__company--information-item company-address">
                  <div class="company-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.7467 5.63334C13.0467 2.55334 10.36 1.16667 8 1.16667C8 1.16667 8 1.16667 7.99334 1.16667C5.64 1.16667 2.94667 2.54667 2.24667 5.62667C1.46667 9.06667 3.57334 11.98 5.48 13.8133C6.18667 14.4933 7.09334 14.8333 8 14.8333C8.90667 14.8333 9.81334 14.4933 10.5133 13.8133C12.42 11.98 14.5267 9.07334 13.7467 5.63334ZM8 8.97334C6.84 8.97334 5.9 8.03334 5.9 6.87334C5.9 5.71334 6.84 4.77334 8 4.77334C9.16 4.77334 10.1 5.71334 10.1 6.87334C10.1 8.03334 9.16 8.97334 8 8.97334Z" fill="#7F878F"></path>
                  </svg>
                  Địa điểm:
                  </div>
                  <div class="company-value" data-toggle="tooltip" title="" data-placement="top" data-original-title="Đường D2, Cụm sản xuất Bình Chuẩn, Phường Bình Chuẩn, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam">
                  Đường D2, Cụm sản xuất Bình Chuẩn, Phường Bình Chuẩn, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="white"></path>
                  <path d="M17.08 14.15C14.29 12.29 9.74002 12.29 6.93002 14.15C5.66002 15 4.96002 16.15 4.96002 17.38C4.96002 18.61 5.66002 19.75 6.92002 20.59C8.32002 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" fill="white"></path>
                  </svg></div>

            </div>

            <div className="job-detail__company--link mt-4">
            <a href="/" target="_blank">Xem trang công ty</a>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>

            </div>

          </div>


          {/* body */}

          <div className='job-detail__body'>
            <div className='job-detail__box--left job-detail__information-detail' style={{width:"100% "}}>
              <h2 className="job-detail__information-detail--title">
                Chi tiết tin tuyển dụng
              </h2>

              <div className='job-detail__information-detail--content'>
                <div className='job-images'>
                  <div className='list-image-company' id="list-image-company">
                    <div className='list-image-company__carousel'>
                      <a className="list-image-company__item " data-fancybox="gallery" data-src="https://static.topcv.vn/employer_medias/8be887a72abe9a1082da0914c2084562-64c71bdb85e55.jpg">
                        <img className="img-responsive" src="https://static.topcv.vn/employer_medias/8be887a72abe9a1082da0914c2084562-64c71bdb85e55.jpg" alt=""/>
                      </a>
                      <a className="list-image-company__item " data-fancybox="gallery" data-src="https://static.topcv.vn/employer_medias/8be887a72abe9a1082da0914c2084562-64c71bdb85e55.jpg">
                        <img className="img-responsive" src="https://static.topcv.vn/employer_medias/8be887a72abe9a1082da0914c2084562-64c71bdb85e55.jpg" alt=""/>
                      </a>
                      <a className="list-image-company__item " data-fancybox="gallery" data-src="https://static.topcv.vn/employer_medias/8be887a72abe9a1082da0914c2084562-64c71bdb85e55.jpg">
                        <img className="img-responsive" src="https://static.topcv.vn/employer_medias/8be887a72abe9a1082da0914c2084562-64c71bdb85e55.jpg" alt=""/>
                      </a>

                    </div>

                  </div>

                </div>

                {/* chi tiết công việc */}

                <div className='job-description'>
                    <h3>Mô tả công việc</h3>

                    {/*  call api lấy thẻ html */}
                    <div className="job-description__item--content">
                      <p>1. Nắm vững, hiểu rõ về chính sách kinh doanh, đặc tính sản phẩm, phương thức bán hàng của công ty, để cung cấp thông tin cho khách hàng và hệ thống đại lý.
                      </p><p>1. Thu thập thông tin về tình hình thị trường, nhu cầu và thị hiếu khách hàng, các đối thủ cạnh tranh.
                      </p><p>2. Nắm vững thông tin về tình hình kinh doanh của từng đại lý.
                      </p><p>3. Thực hiện công tác bán hàng, phát triển đại lý, quảng cáo, chiêu thị … thu hút khách hàng.
                      </p><p>4. Đề xuất thực hiện các hoạt động quảng cáo, chiêu thị tại thị trường khu vực quản lý (bảng hiệu đại lý, banrolle, panô, q/cáo truyền hình, thực hiện khuyến mãi …).
                      </p><p>5. Quản lý tình hình công nợ của từng đại lý, thu hồi công nợ theo quy định, giao nộp tiền đầy đủ.
                      </p><p>6. Thực hiện chế độ hậu mãi, giải đáp các thắc mắc và khiếu nại của đại lý, của khách hàng</p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p>
                    </div>
                    <div className="job-description__item">
                      <h3>Yêu cầu ứng viên</h3>
                      <div className="job-description__item--content">
                      <p>- Trình độ học vấn: Trung cấp trở lên
                      </p><p>- Nam, độ tuổi 20 tuổi trở lên</p><p>- Đã kinh qua công tác bán hàng, bán các sản phẩm vật liệu xây dựng, dụng cụ gia dụng</p><p>
                      </p><p><b>- Ưu tiên các ứng viên có kinh nghiệm bán hàng thiết bị vệ sinh.
                      </b></p><p>- Kỹ năng chuyên môn
                      </p><p>- Kỹ năng quản lý
                      </p><p>- Có kiến thức về công việc bán hàng
                      </p><p>- Tố chất: Trung thực, kỹ lưỡng, năng động, chuẩn mực, có sức khoẻ.
                      </p><p>- Biết tiếng Anh cơ bản và sử dụng thông thạo các công cụ tin học trong quản lý.</p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p><p>
                      </p>
                      </div>
                    </div>
                    <div className="job-description__item">
                      <h3>Địa điểm làm việc</h3>
                      <div className="job-description__item--content">
                      <div>- Bà Rịa-Vũng Tàu</div>
                      
                      
                      
                      </div>
                    </div>

                    {/* ứng tuyển */}
                    <div className="job-description__item">
                  <h3>Cách thức ứng tuyển</h3>
                  <div className="job-description__item--content">
                  Ứng viên nộp hồ sơ trực tuyến bằng cách bấm <strong>Ứng tuyển</strong> ngay dưới đây.
                  </div>
                  </div>

                </div>


                {/* ứng tuyển */}
                <div className="job-detail__information-detail--actions">
                    <div className=" job-detail__information-detail--actions-button box-apply-current " style={{display:"flex", gap:"20px", justifyContent:"center", padding:"1rem"}}> 
                    <button  style={{width:"50%"}}className="job-detail__info--actions-button button-primary " >
                          <span className="button-icon">
                          <i className="fa-light fa-paper-plane"></i>
                          </span>
                          Ứng tuyển ngay
                    </button>
                    <div id="box-save-job-1081970" className="box-save-job  job-notsave ">
                    <button   className="job-detail__info--actions-button button-white" data-id="1081970" data-title="Nhân Viên Kinh Doanh (Kinh Nghiệm Bán Vật Liệu Xây Dựng, Thu Nhập Từ 15 Triệu/Tháng)" id="save-job">
                   
                    <span className="button-icon">
                    <i className="fa-regular fa-heart"></i>
                    </span>
                    Lưu tin
                    </button>
                    {/* <button className="job-detail__info--actions-button button-white" data-toggle="tooltip" title="" data-id="1081970" data-title="Nhân Viên Kinh Doanh (Kinh Nghiệm Bán Vật Liệu Xây Dựng, Thu Nhập Từ 15 Triệu/Tháng)" id="unsave-job" data-original-title="Bỏ lưu">
                   
                    <span className="button-icon">
                    <i className="fa-regular fa-heart"></i>
                    </span>
                    Đã lưu
                    </button> */}
                    </div>
                    </div>
                    {/* <div className="job-detail__information-detail--actions-button box-apply-success" style="display: none">
                    <a className="job-detail__info--actions-button button-primary open-apply-modal" href="#" data-toggle="modal">
                    <span className="button-icon">
                    <i className="fa-solid fa-arrow-rotate-right"></i>
                    </span>
                    Ứng tuyển lại
                    </a>
                    <a className="job-detail__info--actions-button button-white" target="_blank" href="http://candidate.topcvconnect.com/conversations/new/308608">
                    <span className="button-icon">
                    <i className="fa-solid fa-comments"></i>
                    </span>
                    Nhắn tin
                    </a>
                    </div> */}
                    <div className="job-detail__information-detail--actions-label">
                    Hạn nộp hồ sơ: 31/08/2023
                    </div>
                    </div>

              </div>

            </div>

          </div>

         

        </div>

    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Jobdesc_Applyjob