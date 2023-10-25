'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mailer = require('../utils/mailer');
const email = require('../email');
const { json } = require('body-parser');


//check postnews
const checkpost = async (user_id, campaign_name) => {
    const sql = "SELECT * FROM postnews WHERE user_id = " + user_id + " AND campaign_name = '" + campaign_name + "'";
   
    const result = await db.query(sql);
    
   
  
    return  result; // Trả về kết quả
  };
  
// lưu postnews

const savepost = async(user_id,	campaign_name,	vitrituyendung,
    khuvucvieclam,	tieudetuyendung,khuvuclamviec,
    soluongtuyen,	hinhthuccongviec,gioitinh,
    capbac,	kinhnghiem,	is_luong,
    is_kieuluong,is_tu,	is_den,	motacongviec,
    yeucauungvien,quyenloiungvien,
    skill,time_cv,	images,
    status,time_accept
    )=>{
    const sql = "INSERT INTO  postnews(user_id,	campaign_name,	vitrituyendung,khuvucvieclam,	tieudetuyendung,khuvuclamviec,soluongtuyen,	hinhthuccongviec,gioitinh,capbac,	kinhnghiem,	is_luong,is_kieuluong,is_tu,	is_den,	motacongviec,yeucauungvien,quyenloiungvien,skill,time_cv,	images,status,time_accept,time_update) VALUES ( ?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?,?)";
    const values =[(user_id),	campaign_name,	vitrituyendung,
        khuvucvieclam,	tieudetuyendung,khuvuclamviec,
        soluongtuyen,	hinhthuccongviec,gioitinh,
        capbac,	kinhnghiem,	is_luong,
        is_kieuluong,is_tu,	is_den,	motacongviec,
        yeucauungvien,quyenloiungvien,
        skill,time_cv,	images,
        status,time_accept,""]
    const result = await db.query(sql, values);
}


module.exports = {
    // đăng ký tài khoản ứng viên
    postnews: async (req, res,next) => {
        // console.log("aaa",req.body)
    try {
        var { employer_id,tenchiendich, vitrituyendung,khuvucvieclam,
            tieudetuyendung,khuvuclamviec,solongtuyen,
            hinhthuccongviec,
            gioitinh,capbac,kinhnghiem,loaitien,
            luong,tu,den,motacv,yeucaungvien,quyenloiungvien,
            skill,date,image,
        
        } = req.body;
        if(tu=== null || tu === '' ){
            tu=0
        }
        if(den=== null || den === ''){
            den=0
        }


        // const checkmy = await(checkpost(employer_id ,tenchiendich));
      
        
        // console.log("a",khuvuclamviec)
        const result = await savepost(parseInt(employer_id),
            String(tenchiendich), (vitrituyendung),
           (khuvucvieclam),
            String(tieudetuyendung),
           (khuvuclamviec),
            parseInt(solongtuyen),
            String(hinhthuccongviec),
            String(gioitinh),String(capbac),String(kinhnghiem),String(loaitien),
            String(luong),parseFloat(tu),parseFloat(den),String(motacv),String(yeucaungvien),String(quyenloiungvien),
           (skill),
            date,
           (image),false,"")
           return res.json({"message":"ok"})
        }
        
    // }
    catch{
        return res.json({"message":"lỗi"})
    }
    },
}