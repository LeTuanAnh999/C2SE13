import React,{useEffect,useRef,useState} from 'react'
import UserHead from '../user/page_header/User_header'
import "./Style.css";
import arrow from "./arrow_desktop.png"
import {  useParams,useLocation } from 'react-router-dom';

import Select from 'react-select'
import { get_all_job } from '../api/Jobapi/Jobapi';

const songay =(timeToCompare)=>{
    const compareTime = new Date(timeToCompare);

    // Lấy thời gian hiện tại
    const currentTime = new Date();

    // Tính toán thời gian hiệu giữa currentTime và compareTime
    const timeDifference = compareTime - currentTime;

    // Chuyển đổi thời gian hiệu thành số ngày
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if(daysDifference <= 0){
        daysDifference = 0
    }
    return daysDifference
}
const  sophut =(timeToUpdate)=>{
    // Biến đổi chuỗi thời gian thành đối tượng Date
        const updateTime = new Date(timeToUpdate);

        // Lấy thời gian hiện tại
        const currentTime = new Date();

        // Tính toán hiệu giữa currentTime và updateTime
        const timeDifference = currentTime - updateTime;

        // Chuyển đổi thời gian hiệu thành số phút
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        console.log(minutesDifference)

        return minutesDifference
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const slugVietnamese = require('slug-vietnamese');
function Search_job() {

    // const { slug } = useParams();

    // console.log(slug)

    const location = useLocation();
    const activetimviec=(name)=>{
        if(name === true){
            const idviec = document.getElementById('my-viec');
            idviec.style.color="#00b14f"
        }
        
    }

    const [data,setdata] =useState([]);
    const [page,setpage] = useState(1);
    
    const  getdata = async()=>{
        const result = await get_all_job(page);
         setdata(result.data.data)
    }
    

    // phải xử lý loại tiền
    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(2) + ' triệu';
        } else if (number >= 1000) {
          return (number / 1000).toFixed(2) + ' nghìn';
        } else {
          return number.toString();
        }
      }
    useEffect(() => {
      activetimviec(location.pathname.includes('tim-viec'));
      getdata()
    }, []);

  return (
    <>

    <UserHead/>
    <div id ="main">
        <div className='container bg-white mb-40 search-div'>
            <div className='d-flex banner'>
                <div className='ml-auto content'>
                    <h1 className="title">Việc làm giáo dục chất</h1>
                    <p className="description">Nâng tầm sự nghiệp với các cơ hội việc làm giáo dục tại các công ty hàng đầu. Thu nhập xứng tầm, đãi ngộ hấp dẫn, trải nghiệm đáng giá, khám phá ngay!</p>
                    <div className="label-tag">
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên tiểu học</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên mầm non</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên sau đại học</label>
                    <label className="label-remote"><i className="fa-solid fa-circle-check"></i> Giáo viên âm nhạc</label>
                    </div>


                </div>

                <div className="image">
                <img src={arrow} alt="Việc làm từ xa (remote) background" title="Việc làm từ xa (remote) background" className="w-100"/>
                </div>
            </div>

            {/*  */}

            <div className='box-search'>
                <div className='d-flex' id ="frm-search-job">
                    <input id="skill_id_form" type="hidden" name="skill_id"   value=""/>
                    <input id="skill_id_other_form" type="hidden" name="skill_id_other" value=""></input>
                    <input id="sort_form" type="hidden" name="sort" value=""/>

                    <div className="form-group input-data">
                    <span className="icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input id="keyword" name="keyword" type="text" value="" className="form-control border-hover" placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."/>
                    </div>


                    <div className="form-group input-data category">
                        <span className="icon">
                        <i className="fa-solid fa-building"></i>
                        </span>
                        {/* <select   defaultValue={"Tất cả"}    id="company-field-advanced" name="company_field" className=" form-select form-control " tabIndex="-1" aria-hidden="true"  aria-label=" select example">
                        <option value="">Tất cả lĩnh vực</option>
                        <option value="33">Agency (Design/Development)</option>
                        <option value="34">Agency (Marketing/Advertising)</option>
                        <option value="11">Bán lẻ - Hàng tiêu dùng - FMCG</option>
                        <option value="4">Bảo hiểm</option>
                        <option value="20">Bảo trì / Sửa chữa</option>
                       
                        </select> */}
                         <Select options={options}
                         
                         id="" name="company_field" className="classForminput" 
                         placeholder="Tất cả lĩnh vực"
                         
                         />

                      
                    </div>

                    <div className="form-group input-data category">
                        <span className="icon">
                        <i className="fa-solid fa-chart-user"></i>
                        </span>
                        {/* <select   defaultValue={"Tất cả"} id="company-field-advanced" name="company_field" className=" form-select form-control select2 select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                        <option value="">Tất cả  cấp bậc</option>
                        <option value="33">&nbsp;Agency (Design/Development)</option>
                        <option value="34">&nbsp;Agency (Marketing/Advertising)</option>
                        <option value="11">&nbsp;Bán lẻ - Hàng tiêu dùng - FMCG</option>
                        <option value="4">&nbsp;Bảo hiểm</option>
                        <option value="20">&nbsp;Bảo trì / Sửa chữa</option>
                       
                        </select> */}
                            <Select options={options}
                         
                         id="" name="company_field" className="classForminput" 
                         placeholder="Tất cả  cấp bậc"
                         
                         />
                    </div>
                    <div className="form-group input-data category last">
                        <span className="icon">
                        <i className="fa-solid fa-money-check-dollar"></i>
                        </span>
                        {/* <select   defaultValue={"Tất cả"} id="company-field-advanced" name="company_field" className=" form-select form-control select2 select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                        <option value="">Tất cả mức lương</option>
                        <option value="33">&nbsp;Agency (Design/Development)</option>
                        <option value="34">&nbsp;Agency (Marketing/Advertising)</option>
                        <option value="11">&nbsp;Bán lẻ - Hàng tiêu dùng - FMCG</option>
                        <option value="4">&nbsp;Bảo hiểm</option>
                        <option value="20">&nbsp;Bảo trì / Sửa chữa</option>
                       
                        </select> */}
                            <Select options={options}
                         
                         id="" name="company_field" className="classForminput" 
                         placeholder="Tất cả mức lương"
                         
                         />
                    </div>

                    <div className="form-group" id="btn-timkiemjob">
                    <button type="submit" className="btn btn-search-job"><i className="fa-solid fa-magnifying-glass"></i> Tìm kiếm</button>
                    </div>



                </div>

            </div>


            {/*  */}

            <div className='list-job'>
                
                    <div className="list-top-skill">
                                <button data-skill-id="187" className="change-skill item ">
                                Kỹ năng giao tiếp <label className="total">110</label>
                                </button>
                                <button data-skill-id="151" className="change-skill item ">
                                Excel <label className="total">101</label>
                                </button>
                                <button data-skill-id="181" className="change-skill item ">
                                Microsoft Office <label className="total">98</label>
                                </button>
                                <button data-skill-id="13" className="change-skill item ">
                                AutoCAD <label className="total">81</label>
                                </button>
                                <button data-skill-id="150" className="change-skill item ">
                                Word <label className="total">58</label>
                                </button>
                                <button data-skill-id-other="other" className="change-skill-other item ">
                                Khác
                                <label className="total">4030</label>
                                </button>
                    </div>

                    <div className="job-header">
                    <h2>Tìm thấy <b className="text-highlight">4,377</b> việc làm phù hợp với yêu cầu của bạn.</h2>
                    </div>

                    <div className="show-important" id="sort-advanced">
                    <span>Ưu tiên hiển thị:</span>
                    <div data-sort="up_top" className="option-item-sort  active ">
                    <i className="fa-solid fa-circle-check first"></i>
                    <i id="up_top" className="fa-regular fa-circle last"></i>
                    <span className="name_sort" htmlFor="up_top">Tin mới nhất</span>
                    </div>
                    <div data-sort="urgent" className="option-item-sort ">
                    <i className="fa-solid fa-circle-check first"></i>
                    <i id="urgent" className="fa-regular fa-circle last"></i>
                    <span className="name_sort" htmlFor="urgent">Cần tuyển gấp</span>
                    </div>
                    <div data-sort="high_salary" className="option-item-sort ">
                    <i className="fa-solid fa-circle-check first"></i>
                    <i id="high_salary" className="fa-regular fa-circle last"></i>
                    <span className="name_sort" htmlFor="high_salary">Lương cao nhất</span>
                    </div>
                    </div>



                    {/* job */}

                    <div className='job-body row'>
                    <div className='col-md-8'>
                        {data.map(function(item,index){
                            return(<>
                                      

                                    <div className='job-list-2'>

                                    <div className="job-item-2 job-item-default
                                        bg-highlight  job-ta" data-job-id="1087756" data-job-position="1" data-box="BoxSearchResult">
                                    <div className="box-header">
                                        <div className="avatar">
                                            <a target="_blank" href={"/viec-lam/"+ slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}>
                                            <img src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/XMIBZujUiTzLI2Gd74x3widAubWNVDQp_1687318698____acf19f9079e4199bd1af5b8528d94a6e.png" className="w-100" alt="KIM ÁO DÀI" title="Chuyên Viên Marketing Ads - Lương Net Upto 15Tr/ Tháng + Thưởng"/>
                                            </a>
                                        </div>
                                    <div className="body">
                                        <div className="box-label-top">
                                        </div>
                                        <div className="title-block">
                                            <h3 className="title">
                                            <a target="_blank" href={"/viec-lam/"+ slugVietnamese(item.tieudetuyendung)+"."+item.post_new_id}>
                                                <span data-toggle="tooltip" title="" data-placement="top" data-container="body" data-original-title="Chuyên Viên Marketing Ads - Lương Net Upto 15Tr/ Tháng + Thưởng">
                                                   {item.tieudetuyendung}</span>
                                                </a>
                                            </h3>
                                                <label className="title-salary">

                                                    {item.is_kieuluong ==="Thỏa Thuận"?"Thỏa Thuận":  item.is_luong =="VND"?<><div>{formatNumber(item.is_tu)} - {formatNumber(item.is_den)} {item.is_luong}</div></>:<><div>Từ: {(item.is_tu)}-Đến: {(item.is_den)} {item.is_luong}</div></>}
                                                
                                                </label>
                                        </div>
                                        <a className="company" href="/" data-toggle="tooltip" title="" data-placement="top" data-container="body" target="_blank" data-original-title="KIM ÁO DÀI">
                                            {item.name_cty}</a>
                                        <label className="deadline">
                                        Cập nhật { sophut(item.time_update)} phút trước
                                    </label>
                                    <div className="box-job-relevance-job">
                                        <i className="fa-solid fa-star"></i>
                                        <span className="box-job-relevance-job_text">phù hợp </span>
                                    </div>
                                    <div className="box-info">
                                        <div className="label-content">
                                            <label className="address" data-toggle="tooltip" data-html="true" title="" data-placement="top" data-container="body" data-original-title="<p style='text-align: left'>Hồ Chí Minh: Tân Phú</p>">
                                            <i className="fa-solid fa-location-dot"></i>
                                            {JSON.parse( item.khuvuclamviec).map(function(item2,index){
                                                return(<>
                                                     { index == 0?item2.value:""}
                                                </>)
                                                 })}

                                                
                                            </label>
                                            <label className="time">
                                            <i className="fa-solid fa-clock"></i>
                                            {songay(item.time_cv)=== 0?"Hết hạn": <span>Còn <strong>{songay(item.time_cv)}</strong> ngày để ứng tuyển</span> }
                                            </label>
                                        </div>
                                    <div className="icon-save">

                                    {songay(item.time_cv)== 0? <button data-redirect-to="" disabled="true" className="btn btn-apply-now" >
                                    <span>Ứng tuyển</span></button>:<button data-redirect-to="" className="btn btn-apply-now">
                                    <span>Ứng tuyển</span>
                                    </button>}
                                    <div id="box-save-job-1087756" className="box-save-job  box-save-job-hover   job-notsave ">
                                        <a href="#" className="btn-save save" data-id="1087756" data-title="Lưu" data-toggle="tooltip" data-placement="top" data-original-title="" title="">
                                            <span id="save-job-loading" >
                                                {/* <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{width:"20px"}}/> */}
                                            </span>
                                            <i className="fa-regular fa-heart"></i>
                                        </a>

                                        {/*  tin đã lưuu */}
                                    {/* <a href="" className="btn-unsave unsave text-highlight" data-toggle="tooltip" title="" data-id="1087756" data-title="Chuyên Viên Marketing Ads - Lương Net Upto 15Tr/ Tháng + Thưởng" data-placement="top" data-original-title="Bỏ lưu">
                                        <span id="unsave-job-loading" >
                                            <img src="https://www.topcv.vn/v3/images/ap-loading.gif" style={{width:"20px"}}/>
                                        </span>
                                        <i className="fa-solid fa-heart"></i>
                                    </a> */}
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                    </div>

                                   
                                </>)
                        })}
                  
                        </div>














                        <div className='col-md-4'>
                            <div className='right-box'>
                                <div className='interested'>

                                <div className="box box-white box-no-padding" id="company-spotlight">
                                    <h3 className="title-spotlight">Có thể bạn quan tâm</h3>
                                    <div className="spotlight-company">
                                        <div className="spotlight-image">
                                            <a href="/">
                                                <div className="spotlight-cover-wraper">
                                                    <img src="https://cdn-new.topcv.vn/unsafe/500x/filters:format(webp)/https://static.topcv.vn/company_covers/cong-ty-cho-thue-tai-chinh-tnhh-mtv-quoc-te-chailease-faaaab73a31c881be517e4d50fc0bef2-6324407085818.jpg" alt="Công ty Cho thuê tài chính TNHH MTV Quốc tế Chailease" className="spotlight-cover"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="spotlight-info">
                                            <div className="company-name"><a className="text-highlight bold text_uppercase" style={{fontSize:"15px"}} 
                                            href="https://www.topcv.vn/brand/chailease">Công ty Cho thuê tài chính TNHH MTV Quốc tế Chailease</a></div>
                                        </div>
                                        <div className="job">
                                            <a href="/" target="_blank" data-toggle="tooltip" title="" data-placement="top" className="job-name text-dark-blue underline-box-job" data-original-title="Senior Finance Officer - Treasury">
                                                Senior Finance Officer - Treasury</a>
                                                <div className="d-flex">
                                                <div className="deadline ml-auto">
                                                    <i className="fa-light fa-money-bill text-highlight"></i> Thoả thuận
                                                </div>
                                                <div className="salary mr-auto">
                                                    <i className="fa-light fa-timer text-highlight"></i> 18/08/2023
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job">
                                            <a href="/" target="_blank" data-toggle="tooltip" title="" data-placement="top" className="job-name text-dark-blue underline-box-job" data-original-title="Nhân Viên Hỗ Trợ Tín Dụng">
                                                Nhân Viên Hỗ Trợ Tín Dụng</a>
                                                <div className="d-flex">
                                                <div className="deadline ml-auto">
                                                    <i className="fa-light fa-money-bill text-highlight"></i> Thoả thuận
                                                </div>
                                                <div className="salary mr-auto">
                                                    <i className="fa-light fa-timer text-highlight"></i> 18/08/2023
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spotlight-count text-center">
                                            <a href="" target="_blank" className="text-highlight get-more">TÌM HIỂU NGAY</a>
                                        </div>
                                        <div className="clearfix"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* công ty nổi bật */}
                            <div id="top-company-highlight">
                            <hr/>
                            <h3 className="title">Top công ty nổi bật
                            </h3>
                            <div className="list">
                                <div className="item item-hover">
                                    <a href="https://www.topcv.vn/cong-ty/fpt-software/3.html" target="_blank" className="logo">
                                    <img src="https://cdn-new.topcv.vn/unsafe/48x/filters:format(webp)/https://static.topcv.vn/company_logos/fpt-software-6073b38a10cb4.jpg" className="w-100" alt="FPT Software" title="FPT Software"/>
                                    </a>
                                <div className="info">
                                    <a className="title" href="https://www.topcv.vn/cong-ty/fpt-software/3.html" target="_blank">FPT Software</a>
                                    <p className="count">50 việc làm</p>
                                </div>
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

export default Search_job