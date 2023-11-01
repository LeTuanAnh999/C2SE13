/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect} from 'react'
import User_header from '../user/page_header/User_header'
import "./App.css"
import AvatarModal from './AvatarModal';
import html2pdf from "html2pdf.js";
import EditableSpan from "./EditableSpan";
import EditableTieude from './EditableComponent';
import SkillDescriptionInput from './SkillDescriptionInput';
import Editmucdich from './Editmucdich';
import Editeducation from './Editeducation';
import {  useParams,useLocation } from 'react-router-dom';

function createcv() {

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contentRef = useRef(null);

  const handleExportPdf = () => {
    const element = contentRef.current;

    const opt = {
      margin: 10,
      filename: "exported_pdf.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  // xử lý ảnh đại diện
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [avatar, setAvatar] = useState('https://www.topcv.vn/upload/images/avatars/no_avatar.jpg');
  const handleCloseModal = () => setShowModal(false);
  const handleSaveAvatar = (file) => {
    // Ở đây, bạn có thể xử lý việc lưu ảnh đại diện và cập nhật đường dẫn của nó
    // Ví dụ: upload ảnh đại diện lên server và nhận đường dẫn mới từ server
    // Sau đó, cập nhật ảnh đại diện trong state.
    // Đây chỉ là ví dụ, bạn cần thực hiện xử lý tải lên ảnh đại diện phù hợp với ứng dụng của bạn.

    // Tạm thời sử dụng URL.createObjectURL để hiển thị ảnh tải lên trong modal
    const imageURL = URL.createObjectURL(file);
    setAvatar(imageURL);
  };

  // end


  //edit componet tiêu đề
  const [tieude,settieude] = useState("");
  const  handletieudecv =(name)=>{
    settieude(name)
  }

  // vị trí ứng tuyển
  const [content, setContent] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.textContent;
    setContent(value);
  };



  // get toàn bộ  nội dung để thực hiện chức năng menu

  
  const setColorForElements = (elements, color) => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
    }
  };

  const setColorForDivsWithId = (id, color) => {
    const elements = document.querySelectorAll(`span[id="${id}"]`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
    }
  };
  const setColorForDivsWithIdiv = (id, color) => {
    const elements = document.querySelectorAll(`div[id="${id}"]`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
    }
  };
  // const setColorForDivsWithIdiv2 = (id, color) => {
  //   const elements = document.querySelectorAll(`span[id="${id}"]`);
  //   for (let i = 0; i < elements.length; i++) {
  //     elements[i].style.color = color;
  //   }
  // };

  const setcolorbgskill =(elements,color) =>{
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
      
    }
  }
 
  
 
  
  //set tông màu
  const settongmau =(mau)=>{
    var a1 = document.getElementById('block-i');
    var a2 = document.getElementById('cvo-profile-title');
    var a3 = document.getElementById('label-tops');
    var a4 = document.getElementById('cvo-profile-fullname');
    var a5 = document.getElementsByClassName('title-common-before');
    
    a1.style.backgroundColor = mau;
    a2.style.backgroundColor = mau;
    a3.style.backgroundColor = mau;
    a4.style.color = mau;
    setColorForElements(a5, mau);
    setColorForDivsWithId('cvo-profile-blocktitle-2', mau);
  
  
    // đổi màu nền
    if(mau === '#2c69a5'){a2.style.backgroundColor='#e6f1fd'; a2.style.color=mau;a3.style.backgroundColor='#e6f1fd'; a3.style.color=mau}
    if(mau === '#c36839'){a2.style.backgroundColor='#f9f0eb'; a2.style.color=mau;a3.style.backgroundColor='#f9f0eb'; a3.style.color=mau;}
    if(mau === '#5e8b7e'){a2.style.backgroundColor='#eff4f2'; a2.style.color=mau;a3.style.backgroundColor='#eff4f2'; a3.style.color=mau;}
    // đổi màu icon

    var a6 = document.getElementById('aicon1');
    var a7 = document.getElementById('aicon2');
    var a8 = document.getElementById('aicon3');
    var a9 = document.getElementById('aicon4');
    var a10 = document.getElementById('aicon10');
    
    a6.style.backgroundColor=mau;  a7.style.backgroundColor=mau;  a8.style.backgroundColor=mau;  a9.style.backgroundColor=mau;a10.style.backgroundColor=mau;

    //text
    setColorForDivsWithId('cvo-profile-dob',mau)
    setColorForDivsWithIdiv('cvo-objective-objective',mau)
    setColorForDivsWithId('cvo-education',mau)
    setColorForDivsWithId('cvo-profile-dobx',mau)
    setColorForDivsWithId('icontru',mau)

    // skill
    var a12 = document.getElementsByClassName('cvoInvalidate');
  
    setcolorbgskill(a12,mau)
    if(mau === '#2c69a5'){
    try {var styleElem = document.head.appendChild(document.createElement("style"));styleElem.innerHTML = ".cvo-skillgroup-skill-description:after{     background-color: #2c69a5;}";} catch (error) {}
    }
    if(mau === '#c36839'){
    try {var styleElem = document.head.appendChild(document.createElement("style"));styleElem.innerHTML = ".cvo-skillgroup-skill-description:after{     background-color: #c36839;}";} catch (error) {}
    }
    if(mau === '#5e8b7e'){
    try {var styleElem = document.head.appendChild(document.createElement("style"));styleElem.innerHTML = ".cvo-skillgroup-skill-description:after{     background-color: #5e8b7e;}";} catch (error) {}
    }

    // nền sau
    try {
      var a13 = document.getElementsByClassName('cvo-background-time');
      if(mau === '#2c69a5'){
        for (let i = 0; i < a13.length; i++) {
          a13[i].style.backgroundColor = '#e6f1fd';
        }
      }
      if(mau === '#c36839'){
        for (let i = 0; i < a13.length; i++) {
          a13[i].style.backgroundColor = '#f9f0eb';
        }
      }
      if(mau === '#5e8b7e'){
        for (let i = 0; i < a13.length; i++) {
          a13[i].style.backgroundColor = '#eff4f2';
        }
      }
    } catch (error) {
      
    }
   


    
  }

  // chức năng chọn tông màu
  const [activeColor, setActiveColor] = useState("#2c69a5");
  const handleColorClick = (color) => {
    // console.log(color)
    settongmau(color)
    setActiveColor(color);
  };
















  const location = useLocation();
    const activetimviec=(name)=>{
        if(name === true){
            const idviec = document.getElementById('hosocv');
            idviec.style.color="#00b14f"
        }
        
    }
    useEffect(() => {
      activetimviec(location.pathname.includes('tao-cv'));
    }, [location.pathname]);
  

  return (
    <>
    <User_header/>


    {/* modal ảnh đại diện */}
    <AvatarModal show={showModal} handleClose={handleCloseModal} handleSave={handleSaveAvatar} />
    <div id='main' className=''>
     {/* menu */}
      <div id ='cvo-toolbar'> 
        <div className="toolbar-global-controls">
          <div className="container">
          <div className="item" id="toolbar-color">
          <div className="title">Tông màu</div>
            <div className="options">
              <span
                className={`color ${activeColor === "#2c69a5" ? "active" : ""}`}
                style={{ backgroundColor: "#2c69a5" }}
                onClick={() => handleColorClick("#2c69a5")}
              >
                {activeColor === "#2c69a5" && <i className="fa fa-check"></i>}
              </span>
              <span
                className={`color ${activeColor === "#c36839" ? "active" : ""}`}
                style={{ backgroundColor: "#c36839" }}
                onClick={() => handleColorClick("#c36839")}
              >
                {activeColor === "#c36839" && <i className="fa fa-check"></i>}
              </span>
              <span
                className={`color ${activeColor === "#5e8b7e" ? "active" : ""}`}
                style={{ backgroundColor: "#5e8b7e" }}
                onClick={() => handleColorClick("#5e8b7e")}
              >
                {activeColor === "#5e8b7e" && <i className="fa fa-check"></i>}
              </span>
            </div>
          </div>

          <div className="item" id="toolbar-font">
          <div className="title">Font chữ</div>
          <div className="options">
          {/* <span className="select2 select2-container select2-container--default" dir="ltr" style={{width:"120px"}}>
            <span className="selection">
              <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-font-selector-container">
                <span className="select2-selection__rendered" id="select2-font-selector-container" title="Roboto Condensed">Roboto Condensed</span>
                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                <span className="dropdown-wrapper" aria-hidden="true"></span>
          </span> */}
          <select
              defaultValue="default" // This sets the default value to "Roboto Condensed"
              name="font"
              id="font-selector"
              className="form-select form-select-sm" 
              tabIndex="-1"
            
              aria-hidden="true"
            >
              <option value="default">Roboto Condensed</option>
              <option value="roboto">Roboto</option>
              <option value="open_sans">Open Sans</option>
              <option value="mitr">Mitr</option>
            
            </select>
        </div>
          </div>
          <div className="item">
          <div className="title">Cỡ chữ</div>
          <div className="options">
            <span className="fontsize" data-size="small"><i className="fa fa-font"></i></span>
            <span className="fontsize active" data-size="normal"><i className="fa fa-font"></i></span>
            <span className="fontsize" data-size="large"><i className="fa fa-font"></i></span>
          </div>
          </div>
          <div className="item">
          <div className="title">Cách dòng</div>
          <div className="options">
            <span className="line-height" data-spacing="small"><i className="fa fa-arrows-v"></i></span>
            <span className="line-height active" data-spacing="normal"><i className="fa fa-arrows-v"></i></span>
            <span className="line-height" data-spacing="large"><i className="fa fa-arrows-v"></i></span>
          </div>
          </div>
          <div className="item button" id="btn-edit-layout">
          <div className="title">Phát triển</div>
          <i className="fa fa-plus-circle"></i>
          </div>
          <div className="item button" id="btn-change-template">
          <div className="title"> CV</div>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">  <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>
          </div>
          <div className="item button btn-topcv-primary" id="btn-save-cv">
          <div className="title">Tải CV</div>
          <i className="fa fa-download" aria-hidden="true" onClick={handleExportPdf}></i>
          {/* <svg xmlns="http://www.w3.org/2000/svg"  height="1em" viewBox="0 0 448 512"><path  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> */}
          </div>
          </div>
        </div>
        <div id="cv-form-text-editor" style={{display:"block"}}>
            <div className="container">
            <div className="editor-controls-wraper">
            <div className="editor-controls disabled">
            <div className="editor-control-group">
            <span className="editor-control control-bold" title="Chữ đậm" command="bold"><i className="fa fa-bold" aria-hidden="true"></i></span><span className="editor-control control-italic" title="Chữ nghiêng" command="italic"><i className="fa fa-italic" aria-hidden="true"></i></span><span className="editor-control control-underline" title="Chữ đậm" command="underline"><i className="fa fa-underline" aria-hidden="true"></i></span>
            </div>
            <div className="editor-control-group">
            <span className="editor-control control-align-left" title="Căn trái" command="align-left"><i className="fa fa-align-left" aria-hidden="true"></i></span><span className="editor-control control-align-right" title="Căn phải" command="align-right"><i className="fa fa-align-right" aria-hidden="true"></i></span><span className="editor-control control-align-center" title="Căn giữa" command="align-center"><i className="fa fa-align-center" aria-hidden="true"></i></span><span className="editor-control control-align-justify" title="Căn đều hai lề" command="align-justify"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
            </div>
            <div className="editor-control-group">
            <span className="editor-control control-ordered-list" title="Danh sách có thứ tự" command="ordered-list"><i className="fa fa-list-ol" aria-hidden="true"></i></span><span className="editor-control control-unordered-list" title="Danh sách không có thứ tự" command="unordered-list"><i className="fa fa-list-ul" aria-hidden="true"></i></span>
            </div>
            <div className="editor-control-group">
            <span className="editor-control control-undo" title="Hoàn tác" command="undo"><i className="fa fa-undo" aria-hidden="true"></i></span><span className="editor-control control-redo" title="Làm lại" command="redo"><i className="fa fa-repeat" aria-hidden="true"></i></span><span className="editor-control control-remove-format" title="Xoá hết định dạng" command="remove-format"><i className="fa fa-eraser" aria-hidden="true"></i></span>
            </div>
            {/* <a onclick="trackingLink('translate_cv_1.0', 'https://reviewcv.topcv.vn/')" className="editor-ad-btn-float-right" target="_blank"><i className="fa fa-globe"></i> Dịch CV</a> */}
            </div>
            </div>
            </div>
            </div>
      
      </div>
    {/* end */}
   
      {/*  cv  */}
      <div id="cvbuilder-container">
        <div className='container'>
        <div id ="cv-layout-container">
            {/* tiêu đề */}
            <div id ='cv-layout'>
              
            <EditableTieude handtieudecv={handletieudecv}/>
    


            <div ref={contentRef}>

            {/* cv */}
            <div id="cvo-document-root">
              <div className='cvo-document' id="cvo-document">
                  <div className='className="cvo-page"'>
                    <div className='cvo-subpage'>
                        <div className='cvo-body'>
                                {/*  header */}
                                <div id="cvo-main">
                                    <div id="col-left">
                                      <div id="group-top-left">
                                        <div id="cvo-profile" className='cvo-block' style={{display:"block"}}>
                                          <div id="profile-title-wrapper">
                                              <div id="cvo-profile-avatar-wraper">
                                                <div id="cvo-profile-avatar-outer"  onClick={() => setShowModal(true)} >
                                                <img 
                                                      id="cvo-profile-avatar"
                                                      src={avatar}
                                                      alt="avatar"
                                                      name=""
                                                      type="image"
                                                      cvo-form-field="true"
                                                      blockkey="profile"
                                                      fieldkey="avatar"
                                                    />
                                                </div>
                                                <div className="label-top" id="label-tops"></div>
                                              </div>
                                              <div className="block-name-profile">
                                                <i className="fa fa-chevron-right" id ="block-i"></i>
                                              
                                                  {/* vị trí ứng tuyển */}
                                                 
                                                  <span
                                                    id="cvo-profile-title"
                                                    className="default_min_width"
                                                    blockkey="common"
                                                    fieldkey="cvtitle"
                                                    contentEditable="true"
                                                    onInput={handleInputChange}
                                                    cvo-validatable="true"
                                                    cvo-validation-errors="{ }"
                                                    maxLength="64"
                                                    >
                                                      
                                                  </span>
                                                  {/* end */}

                                                  {/* họ và tên */}
                                                    <EditableSpan
                                                      id={"cvo-profile-fullname"}
                                                      names={"cvoData[profile][fullname]"}
                                                      type='text'
                                                      classs={"default_min_width cvoInvalidate"}
                                                      cvo_placeholder={"Họ tên"}
                                                      cvo_validation_errors={""}


                                                    />

                                                {/* end */}
                                              
                                            
                                                <br />
                                              </div>
                                          </div>


                                            {/*  liên hệ */}

                                            <div id='profile-contact-wraper'>
                                                    <div className='cvo-block-title'>
                                                      <div className='title-common-before ' >
                                                    <EditableSpan id={"cvo-profile-blocktitle"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Tiêu đề mục lớn"}/>
                                                      </div>
                                                    </div>

                                                    
                                              <div id="cvo-profile-dob-wraper" className='cvo-profile-info-row'>
                                              <i className="fa fa-calendar"  id="aicon1"></i>

                                              <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Ngày sinh"}/>




                                                        
                                              </div>


                                              <div className="cvo-profile-info-row" id="cvo-profile-email-wraper">
                                                <i className="fa fa-envelope" id='aicon10'></i>
                                                <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Email"}/>

                                            
                                            
                                              </div>
                                              <div className="cvo-profile-info-row" id="cvo-profile-website-wraper">
                                              <i className="fa fa-globe" id="aicon2"></i>
                                                <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Website"}/>

                                            
                                            
                                              </div>
                                              <div className="cvo-profile-info-row" id="cvo-profile-phone-wraper">
                                              <i className="fa fa-tablet" id="aicon3"></i>
                                                <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Số điện thoại"}/>

                                            
                                            
                                              </div>
                                              <div className="cvo-profile-info-row" id="cvo-profile-address-wraper">
                                              <i className="fa fa-home" id="aicon4"></i>
                                                <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Địa chỉ"}/>

                                            
                                            
                                              </div>






                                              </div>

                                              


                                  





                                              {/* end */}
                                     
                                        </div>


                                      </div>


                                      {/* bottm left */}

                                      <div id ="group-bottom-left"/>
                                        <div id="cvo-skillgroup" className='cvo-block'>
                                            <div className='cvo-block-content-wrapper'>
                                              <div className='block-title-section-content'>
                                              <div className='cvo-block-title'>
                                                <span className='cvo-block-title-span'>
                                                <div className='title-common-before '>
                                                <EditableSpan id={"cvo-profile-blocktitle"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Kỹ năng"}/>
                                                        </div>
                                                </span>

                                              </div>
                                              </div>
                                              <div className='block-content cvo-block-body'>
                                                 <ul id="skill-table">
                                                  < SkillDescriptionInput   cvo_placeholder={"Kỹ năng"} edukey={"kn"}/>

                                                 </ul>
                                              </div>

                                            </div>

                                        </div>

                                        <div id="cvo-award" className='cvo-block'>
                                              <div className='cvo-block-content-wrapper'>
                                                <div className='block-title-section-content'>
                                                    <div className='cvo-block-title'>
                                                    <span className='cvo-block-title-span'>
                                                <div className='title-common-before '>
                                                <EditableSpan id={"cvo-profile-blocktitle"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Giải thưởng"}/>
                                                        </div>
                                                </span>
                                                    </div>

                                                    <div id='award-table'>
                                                    <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Nhân viên xuất sắc "}/>
                                                    </div>
                                                </div>

                                              </div>


                                        </div>

                                        <div id="cvo-award" className='cvo-block'>
                                              <div className='cvo-block-content-wrapper'>
                                                <div className='block-title-section-content'>
                                                    <div className='cvo-block-title'>
                                                    <span className='cvo-block-title-span'>
                                                <div className='title-common-before '>
                                                <EditableSpan id={"cvo-profile-blocktitle"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Chứng chỉ"}/>
                                                        </div>
                                                </span>
                                                    </div>

                                                    <div id='award-table'>
                                                    <EditableSpan id={"cvo-profile-dob"} classs={"cvo-profile-info-value default_min_width"}
                                                        names={"cvoData[profile][dob]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"TOEIC "}/>
                                                    </div>
                                                </div>

                                              </div>


                                        </div>
                                    </div>

                                    <div id="col-right">
                                      <div id="group-col-right">

                                        <div id="cvo-objective" className='cvo-block'>
                                          <div className='cvo-block-content-wrapper'>
                                              <div className='block-title-section-content-2'>
                                                <div className='cvo-block-title no-horizontal-line'>
                                                <div className='title-common-before2 '>
                                                    <EditableSpan id={"cvo-profile-blocktitle-2"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Mục tiêu công việc"}/>
                                                      </div>
                                                </div>

                                               <Editmucdich id={"cvo-objective-objective"} classs={"default_min_width cvoInvalidate"}
                                                names={"cvoData[objective][objective]"}
                                                type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Mục tiêu nghề nghiệp ngắn hạn, dài hạn"}/>
                                                    

                                              </div>
                                          </div>

                                        </div>

                                        {/* học vấn */}

                                        <div id="cvo-education" className='cvo-block'>
                                        <div className='cvo-block-content-wrapper'>
                                              <div className='block-title-section-content-2'>
                                                <div className='cvo-block-title no-horizontal-line'>
                                                <div className='title-common-before2 '>
                                                    <EditableSpan id={"cvo-profile-blocktitle-2"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Học Vấn"}/>
                                                      </div>
                                                </div>



                                                {/* đây */}

                                                <div id="education-table">
                                                  <Editeducation  id={"cvo-education"} classs={"cvo-education-title default_min_width"}
                                                      names={"cvoData[profile][dob][edu]"} 
                                                      type="text" blockkey="profile" 
                                                      fieldkey="blocktitle" 
                                                      cvo-form-field="true" 
                                                      contenteditable="true"
                                                      cvo-validatable="true" 
                                                      cvo_validation-errors="{}" 
                                                      maxlength="1024" 
                                                      cvo_placeholder={"Ngành học/Môn học"}  
                                                      cvo_placeholder2={"Tên trường học"}
                                                      cvo_placeholder3={"Mô tả chi tiết"} />
                                                
                                                </div>

                                              
                                                    

                                              </div>
                                          </div>

                                        </div>


                                        <div id="cvo-education" className='cvo-block'>
                                        <div className='cvo-block-content-wrapper'>
                                              <div className='block-title-section-content-2'>
                                                <div className='cvo-block-title no-horizontal-line'>
                                                <div className='title-common-before2 '>
                                                    <EditableSpan id={"cvo-profile-blocktitle-2"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Kinh Nghiệm Làm Việc"}/>
                                                        
                                                      </div>
                                                </div>



                                                {/* đây */}

                                                <div id="education-table">
                                                  <Editeducation  id={"cvo-education"} classs={"cvo-education-title default_min_width"}
                                                      names={"cvoData[profile][dob][cv][knlv]"} 
                                                      type="text" blockkey="profile" 
                                                      fieldkey="blocktitle" 
                                                      cvo-form-field="true" 
                                                      contenteditable="true"
                                                      cvo-validatable="true" 
                                                      cvo_validation-errors="{}" 
                                                      maxlength="1024" 
                                                      cvo_placeholder={"Vị trí công việc"}
                                                      cvo_placeholder2 ={"Tên công ty"} 
                                                      cvo_placeholder3={"- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email."}  />
                                                
                                                </div>

                                              
                                                    

                                              </div>
                                          </div>

                                        </div>

                                        <div id="cvo-education" className='cvo-block'>
                                        <div className='cvo-block-content-wrapper'>
                                              <div className='block-title-section-content-2'>
                                                <div className='cvo-block-title no-horizontal-line'>
                                                <div className='title-common-before2 '>
                                                    <EditableSpan id={"cvo-profile-blocktitle-2"} classs={"default_min_width"}
                                                        names={"cvoData[profile_meta][blocktitle]"} 
                                                        type="text" blockkey="profile" 
                                                        fieldkey="blocktitle" 
                                                        cvo-form-field="true" 
                                                        contenteditable="true"
                                                        cvo-validatable="true" 
                                                        cvo_validation-errors="{}" 
                                                        maxlength="1024" 
                                                        cvo_placeholder={"Hoạt động"}/>
                                                        
                                                      </div>
                                                </div>



                                                {/* đây */}

                                                <div id="education-table">
                                                  <Editeducation  id={"cvo-education"} classs={"cvo-education-title default_min_width"}
                                                      names={"cvoData[profile][dob][hd]"} 
                                                      type="text" blockkey="profile" 
                                                      fieldkey="blocktitle" 
                                                      cvo-form-field="true" 
                                                      contenteditable="true"
                                                      cvo-validatable="true" 
                                                      cvo_validation-errors="{}" 
                                                      maxlength="1024" 
                                                      cvo_placeholder={"Vị trí công việc"}
                                                      cvo_placeholder2 ={"Tên "} 
                                                      cvo_placeholder3={"Tập hợp các món quà và phân phát tới người vô gia cư. Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan."}  />
                                                
                                                </div>

                                              
                                                    

                                              </div>
                                          </div>

                                        </div>


                                      </div>
                                    </div>
                                </div>
                        </div>

                    </div>

                  </div>

              </div>


              </div>

            </div>




         </div>
         </div>


         {/*  bên phải */}
        <div id="cv-suggestion-container">
        <a  className="" href="/" target="_blank"><i className="fa fa-address-book "  style={{marginRight:"0.22rem"}}></i>Hướng dẫn</a>
          <div style={{ padding:"0px 5px", paddingLeft:"5px", border:"1px dashed #ccc" }}>
          </div>
          <div id="cv-suggestion-inner" >
            <div id="cv-message">
            <div className="content">
            </div>
            </div>
            <div id="cv-suggestion-content">
            <h4><i className="fa fa-briefcase"></i> Kinh nghiệm làm việc</h4>
            <p><b>Nên:</b></p>
            <p>- Liệt kê theo thứ tự thời gian, công việc làm gần đây nhất nêu trước các công việc trước đó.</p>
            <p>- Công việc đã làm (làm full-time hoặc part-time), khóa thực tập có liên quan đến vị trí ứng tuyển.</p>
            <p>- Mô tả trách nhiệm công việc chính, súc tích nhưng đầy đủ. Đưa minh chứng (ví dụ sản phẩm bạn thiết kế, link bài báo bạn viết…).</p>
            <p>- Đưa ra những thành tựu và kỹ năng bạn đạt được (cá nhân bạn học hỏi được cũng như sự cống hiến cho công ty/tổ chức).</p>
            <p>- Nếu bạn chưa có kinh nghiệm, bạn chỉ tham gia công việc như tình nguyện, các việc làm thêm như phát tờ rơi, bồi bàn…thì bạn có thể đề cập đến nhưng chú ý chỉ ra những điều bạn học hỏi được cần có cho vị trí ứng tuyển ví dụ như khả năng làm việc nhóm, sự năng động, sáng tạo và linh hoạt, sự kiên trì, đóng góp cho cộng đồng…).</p>
            <p>- Viết dưới dạng các gạch đầu dòng, phân chia ý rõ ràng.</p>
            <p><b>Không nên:</b></p>
            <p>- Các công việc làm ngắn hạn ( nhỏ hơn 6 tháng) ngoại trừ khóa thực tập.</p>
            <p>- Đưa quá chi tiết những phần công việc nhỏ nhặt (ví dụ như in giấy tờ, đến công ty sớm dọn dẹp…).</p>
            <p>- Mô tả dài dòng, không phân chia ý rõ ràng.</p>
            </div>
            <div id="cv-suggestion-default" >
            <h4><i className="fa fa-info-circle"></i> Hướng dẫn</h4>
            <ol>
            <li>Điền đầy đủ các thông tin hiển thị trong CV</li>
            <li>Bấm nút <b>Lưu CV</b></li>
            <li>Xem &amp; Tải CV về máy</li>
            </ol>
            <p>Một số lưu ý chung:</p>
            <ul>
            <li>Sắp xếp thời gian theo thứ tự mới -&gt; cũ.</li>
            <li>Ưu tiên những gì quan trọng, có liên quan đến vị trí ứng tuyển lên đầu.</li>
            <li>Ngày tháng nên dùng: 01/2016, 01-2016 hoặc Jan 2016</li>
            </ul>
            </div>
            <div id="cv-suggestion-footer">
            Mọi chi tiết vui lòng liên hệ: <br/>Email: vieclamgiaoduc@gmail.com<br/>
            </div>

            </div>

         </div>
      </div>



      {/* save */}
      {/* <div id="save-done">

      </div> */}










    </div>
    
    
    
    
    {/* <button onClick={handleExportPdf}>Xuất PDF</button> */}
    
    </div>
    
    
    
    
    
    </>
  )
}

export default createcv