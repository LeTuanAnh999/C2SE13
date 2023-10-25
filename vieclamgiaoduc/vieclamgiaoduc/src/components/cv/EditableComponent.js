import React, { useState } from 'react';
import "./App.css";

const EditableTieude= ({ handtieudecv }) => {
  const [content, setContent] = useState(""); // Initialize content using state

  const handleContentChange = (event) => {
    // Update the content state when the editable content changes

    
    const inputValue = event.target.textContent;
   
    if (inputValue.length <= 64) {
      // Update the content state when the editable content changes
      handtieudecv(inputValue)
      setContent(inputValue)
    }
    // console.log(content.length)
  };

  return (
    <div>
         {content.trim() === "" && (
            <div className='message-cv'>
                <div className="alert alert-danger" role="alert">
                Tiêu đề không được để trống!
            </div>
      </div>
      )}
      {content.length >= 64 && (
        <p className="error-message">Tiêu đề không được dài hơn 64 ký tự</p>
      )}
      <div
        id="cv-title"
        className="non-printable"
        blockkey="common"
        fieldkey="cvtitle"
        contentEditable="true"
        onInput={handleContentChange}
        cvo-validatable="true"
        cvo-validation-errors="{ }"
        maxLength="64"
        cvo-placeholder="Tiêu đề CV"
      />
     
    </div>
  );
};

export default EditableTieude;
