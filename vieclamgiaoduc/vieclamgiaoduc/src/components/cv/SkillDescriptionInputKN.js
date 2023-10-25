import React, { useState ,useRef} from 'react';
import './App.css';

const SkillDescriptionInputEdu = ({  cvo_placeholder,edukey}) => {



  

const divRef = useRef(null);

  const hanlderclick =(key)=>{
    try {
      // const divContent = divRef.current.innerText;
  
        var styleElem = document.head.appendChild(document.createElement("style"));

        styleElem.innerHTML = "#input-skill-kn:before { content:''}";
      
    } catch (error) {
      
    }
   
    

   
    
  }


  const [divList, setDivList] = useState([<div
    className={'cvo-skillgroup-skill-description default_min_width cvoInvalidate'}
   
    contentEditable="true"
    id="input-skill-kn"
    cvo_placeholder={  cvo_placeholder}
    ref={divRef} 
    onClick={hanlderclick}
    key={0}
  />]);

  const handleAddDiv = () => {
    setDivList([...divList, <div
      className={'cvo-skillgroup-skill-description default_min_width cvoInvalidate'}
      contentEditable="true"
      id="input-skill-kn"
      onClick={hanlderclick }
      cvo_placeholder={  cvo_placeholder}
      key={divList.length}
    />]);
  };

  const handleRemoveDiv = () => {
    if (divList.length > 1) {
      setDivList(divList.slice(0, divList.length - 1));
    }
  };

  const viewCn=()=>{
    document.getElementById("fieldgroup_controlsv-kn").style.display = "block";
  }
  const HideCn=()=>{
    document.getElementById("fieldgroup_controlsv-kn").style.display = "none";
  }
  return (
    <div className="edit-skill-kn"  id="hideskill"onClick={viewCn} >
      <div className="fieldgroup_controls"  id="fieldgroup_controlsv-kn" onMouseLeave={(HideCn)} >
        <div className="clone" onClick={handleAddDiv}><i className="fa fa-plus"></i> Thêm</div>
        <div className="remove" onClick={handleRemoveDiv}><i className="fa fa-minus"></i> Xóa</div>
        {/* <div className="clone" onClick={HideCn} > Ẩn</div> */}
      </div>
      {divList.map((div, index) => (
        <div key={index}>{div}</div>
      ))}
    </div>
  );
};

export default SkillDescriptionInputEdu;
