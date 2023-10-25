import React, { useState, useRef,useCallback  } from 'react';
import './stylemodal.css';
import { Modal, Button } from 'react-bootstrap';
import  noavatar  from "./folder.png"
// import Cropper from "react-easy-crop";


const AvatarModal = ({ show, handleClose, handleSave }) => {

    // crop

    
  const [brightness, setBrightness] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [inversion, setInversion] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(1);
  const [flipVertical, setFlipVertical] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  const chooseImage = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

   
    if (!file) return;

    const previewImg = document.querySelector(".preview-img img");
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
      resetFilter();
      document.querySelector(".container").classList.remove("disable");
    });
  };

  const applyFilter = () => {
    const previewImg = document.querySelector(".preview-img img");
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
  };

  const updateFilter = (event) => {
    const value = event.target.value;
    const selectedFilter = document.querySelector(".filter .active");
    const filterName = selectedFilter.id;

    
    applyFilter();
  };

  const resetFilter = () => {
    setBrightness(100);
    setSaturation(100);
    setInversion(0);
    setGrayscale(0);
    setRotate(0);
    setFlipHorizontal(1);
    setFlipVertical(1);

    const filterOptions = document.querySelectorAll(".filter button");
    filterOptions[0].click();
    applyFilter();
  };

  function dataURLtoFile(dataURL) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], "image.jpg", { type: mime });
  }

  const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const previewImg = document.querySelector(".preview-img img");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (rotate !== 0) {
      ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    const link = document.createElement("a");
    // link.download = "image.jpg";
    link.href = canvas.toDataURL();

    try {
        handleSave(dataURLtoFile(canvas.toDataURL()));
    handleClose();
    } catch (error) {
        
    }
       
      


   
    // const imageURL = canvas.toDataURL()
   
    // link.click();
  
   
  };


  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);

    const filterName = event.target.id;

    const filterSlider = document.querySelector(".slider input");
    const filterValue = document.querySelector(".filter-info .value");

   
    if (filterName === "brightness") {

     
           
      filterSlider.max = "200";
       setBrightness(sliderValue)
      filterValue.innerText = `${brightness}%`;
     
    } else if (filterName === "saturation") {
      filterSlider.max = "200";
      filterSlider.value = saturation;
      setSaturation(sliderValue)
      filterValue.innerText = `${saturation}%`;
    } else if (filterName === "inversion") {
      filterSlider.max = "100";
      filterSlider.value = inversion;
      setInversion(sliderValue)
      filterValue.innerText = `${inversion}%`;
    } else {
        setGrayscale(sliderValue)
      filterSlider.max = "100";
      filterSlider.value = grayscale;
      filterValue.innerText = `${grayscale}%`;
    }
    applyFilter();
  };
  const handleFilterOptionClick = (event) => {


    var element1 = document.getElementById("brightness");
    var element2 = document.getElementById("saturation");
    var element3= document.getElementById("inversion");
    var element4 = document.getElementById("grayscale");


    const filterName = event.target.id;
    const filterSlider = document.querySelector(".slider input");
    const filterValue = document.querySelector(".filter-info .value");
    if (filterName === "brightness") {

        try {
            element1.classList.add("active")
            element2.classList.remove("active");
            element3.classList.remove("active");
            element4.classList.remove("active");
        } catch (error) {}
      filterSlider.max = "200";
       setBrightness(sliderValue)
      filterValue.innerText = `${brightness}%`;
    } else if (filterName === "saturation") {

        try {
            element1.classList.remove("active");
            element2.classList.add("active")
            element3.classList.remove("active");
            element4.classList.remove("active");
        } catch (error) {}
      filterSlider.max = "200";
      filterSlider.value = saturation;
      setSaturation(sliderValue)
      filterValue.innerText = `${saturation}%`;
    } else if (filterName === "inversion") {
        try {
            element1.classList.remove("active");
            element3.classList.add("active")
            element2.classList.remove("active");
            element4.classList.remove("active");
        } catch (error) {}
      filterSlider.max = "100";
      filterSlider.value = inversion;
      setInversion(sliderValue)
      filterValue.innerText = `${inversion}%`;
    } else {
        try {
            element1.classList.remove("active");
            element4.classList.add("active")
            element3.classList.remove("active");
            element2.classList.remove("active");
        } catch (error) {}
        setGrayscale(sliderValue)
      filterSlider.max = "100";
      filterSlider.value = grayscale;
      filterValue.innerText = `${grayscale}%`;
    }
    applyFilter();
   
  };

  const handleRotateOptionClick = (event) => {
    const optionId = event.target.id;

    if (optionId === "left") {
      setRotate((prevRotate) => prevRotate - 90);
    } else if (optionId === "right") {
      setRotate((prevRotate) => prevRotate + 90);
    } else if (optionId === "horizontal") {
      setFlipHorizontal((prevFlip) => (prevFlip === 1 ? -1 : 1));
    } else {
      setFlipVertical((prevFlip) => (prevFlip === 1 ? -1 : 1));
    }
    applyFilter();
  };


  
// crop


  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Chọn ảnh đại diện</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mybody'>
          <div className="containers disable">
            <h2>Chỉnh sửa ảnh đại diện</h2>
            <div className="wrapper">
            <div className="wrapper">
            <div className="editor-panel">
                <div className="filter">
                    <label className="title">Lọc hình ảnh</label>
                    <div className="options">
                        <button id="brightness" className="active"      onClick={handleFilterOptionClick}>Độ sáng</button>
                        <button id="saturation"   onClick={handleFilterOptionClick}>Bão hòa</button>
                        <button id="inversion"    onClick={handleFilterOptionClick}>Đảo ngược</button>
                        <button id="grayscale"  onClick={handleFilterOptionClick}>Độ xám</button>
                    </div>
                    <div className="slider">
                            <div className="filter-info">
                                <p className="name">Làm bóng</p>
                                <p className="value">{sliderValue}%</p>
                            </div>
                            <input type="range" value={sliderValue} min="0" max="200" onChange={handleSliderChange} />
                            </div>
                </div>
                <div className="rotate">
                    <label className="title">Xoay hình</label>
                    <div className="options">
                        <button id="left"  onClick={handleRotateOptionClick }><i className="fa-solid fa-rotate-left"></i></button>
                        <button id="right"  onClick={handleRotateOptionClick }><i className="fa-solid fa-rotate-right"></i></button>
                        <button id="horizontal" onClick={handleRotateOptionClick }><i className="fa fa-arrows-alt" aria-hidden="true"></i></button>
                        <button id="vertical" onClick={handleRotateOptionClick }><i className="fa fa-arrows-alt" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
            <div className="preview-img">
                <img src={noavatar} alt="preview-img"/>
             
            </div>
        </div>
            </div>
            <div className="controls mt-2">
              <button className="reset-filter mt-1" onClick={resetFilter}>Làm mới</button>
              <div className="row">
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                />
                <input type="file" id="file-input2" accept="image/*"  style={{display:'none'}}/>

                <button className="choose-img" onClick={chooseImage}>Chọn ảnh</button>
                <button className="save-img" onClick={saveImage}>Lưu </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AvatarModal;
