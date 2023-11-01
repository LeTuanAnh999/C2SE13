import React, { useState } from "react";
import "./App.css";
import EditableSpan from "./EditableSpan";
import SkillDescriptionInputEdu from "./SkillDescriptionInputKN";
import SkillDescriptionInputKNLV from "./SkillDescriptionInputKNLV";
import SkillDescriptionInputHD from "./SkillDescriptionInputHD";
const Editeducation = ({id,names,classs,cvo_validatable,cvo_validation_errors, cvo_placeholder ,maxLength, cvo_placeholder2, cvo_placeholder3 }) => {
  
  
  
  return (<div className="row ">

  <div className="row-title">
    <div className="block-education-title">
    <EditableSpan id={id} classs={classs}
    name={names}
    type="text" blockkey="education" 
    fieldkey="blocktitle" 
    cvo-form-field="true" 
    contenteditable="true"
    cvo-validatable="true" 
    cvo_validation-errors="{}" 
    maxlength="1024" 
    cvo_placeholder={cvo_placeholder}/>
    </div>

    <div className="cvo-section-time-value">
        <div className="cvo-background-time">
        <EditableSpan id={"cvo-profile-dobx"} classs={"cvo-education-end default_min_width"}
            names={"cvoData[profile][dob]"} 
            type="text" blockkey="profile" 
            fieldkey="blocktitle" 
            cvo-form-field="true" 
            contenteditable="true"
            cvo-validatable="true" 
            cvo_validation-errors="{}" 
            maxlength="1024" 
            cvo_placeholder={"Bắt đầu"}/> 
             <span style={{paddingLeft:"0.1rem",paddingRight:"0.2rem"}} id="icontru">-</span>
            <EditableSpan id={"cvo-profile-dobx"} classs={"cvo-education-end default_min_width"}
            names={"cvoData[profile][dob]"} 
            type="text" blockkey="profile" 
            fieldkey="blocktitle" 
            cvo-form-field="true" 
            contenteditable="true"
            cvo-validatable="true" 
            cvo_validation-errors="{}" 
            maxlength="1024" 
            cvo_placeholder={"Kết thúc"}/>

        </div>


    </div>
    <div style={{clear:"both"}}></div>

    <div className="cvo-info-wrapper">
    <EditableSpan id={"cvo-education"} classs={"cvo-education-title default_min_width"}
    name={"cvoData[profile][dob]"} 
    type="text" blockkey="profile" 
    fieldkey="blocktitle" 
    cvo-form-field="true" 
    contenteditable="true"
    cvo-validatable="true" 
    cvo_validation-errors="{}" 
    maxlength="1024" 
    cvo_placeholder={cvo_placeholder2}/>
    </div>

    <div className="row-details ">

     
        {names === 'cvoData[profile][dob][edu]'?   <SkillDescriptionInputEdu   cvo_placeholder={ cvo_placeholder3}/>:
        names ==='cvoData[profile][dob][cv][knlv]'? <SkillDescriptionInputKNLV cvo_placeholder={ cvo_placeholder3}/>:
        names ==='cvoData[profile][dob][hd]'? <SkillDescriptionInputHD cvo_placeholder={ cvo_placeholder3}/>:
       ""}
      

    </div>
  






    </div>
    </div>
    
  
  );
};

export default Editeducation;
