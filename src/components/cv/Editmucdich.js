import React, { useState } from 'react';

const Editmucdich = ({id,name,classs,cvo_validatable,cvo_validation_errors, cvo_placeholder ,maxLength}) => {
  
  // Hàm xử lý khi người dùng thay đổi nội dung của div.
  const handleContentChange = (event) => {
  
  };
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

  return (
    <div
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
      onKeyDown={(event) => {
        // Tránh người dùng nhập các phím điều hướng (ví dụ: arrow keys) trong div
        if (event.keyCode >= 37 && event.keyCode <= 40) {
          event.preventDefault();
        }
      }}
    >
    
    </div>
  );
};

export default Editmucdich ;
