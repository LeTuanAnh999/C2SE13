import React, { useState } from "react";
import "./App.css";

const EditableSpan = ({id,name,classs,cvo_validatable,cvo_validation_errors, cvo_placeholder ,maxLength}) => {
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(false);

  
  const handleInputChange = (event) => {
    setIsActive(true);

    const value = event.target.textContent;
    setContent(value);
   
    try {

    
      if(value == null || value ==""){
        setIsActive(false);
      }

       
    } catch (error) {
        
    }
    
    
  };


  
  return (<span
        id={id}
        name ={name}
        className={isActive ? 'active' : classs}
        blockkey="common"
        fieldkey="cvtitle"
        contentEditable="true"
        onInput={handleInputChange}
        cvo-validatable={cvo_validatable}
        cvo-validation-errors={cvo_validation_errors}
        maxLength={maxLength}
        cvo_placeholder={cvo_placeholder}
        >
     
    </span>
    
  
  );
};

export default EditableSpan;
