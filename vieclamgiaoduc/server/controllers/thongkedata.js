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


module.exports = {
    get_dulieumoinhat: async (req, res, next) => {
      
      const sql = `
      SELECT a.data FROM data_dulieumoinhat as a ORDER BY time DESC
      LIMIT 1;
      
      `;
  
      await db.query(sql, (err, response) => {
        if (err) {
          return res.json({ message: "Lỗi truy vấn" });
        } else {
         
            const result = JSON.stringify(response)
            // console.log(result)
           
            const jsonString = response[0].data; 
           
            
            // Sử dụng indexOf để tìm vị trí của "{" đầu tiên
            const startIndex = jsonString.indexOf("'data': ");

            // Sử dụng lastIndexOf để tìm vị trí của "}" cuối cùng
            const endIndex = jsonString.lastIndexOf('}');

            // Cắt chuỗi để chỉ lấy phần dữ liệu JSON
            const dataString = jsonString.substring(startIndex, endIndex);

            // Sử dụng split để tách chuỗi thành mảng con
            const keyValuePairs = dataString.split(',');

            // console.log(keyValuePairs) 
            const quantity_job_recruitment= (keyValuePairs[0].split("'data': {'quantity_job_recruitment':"))
            const quantity_job_recruitment_yesterday = keyValuePairs[1].split("'quantity_job_recruitment_yesterday': ")
            const quantity_job_new_today = keyValuePairs[2].split("quantity_job_new_today':")
            const quantity_company_recruitment = keyValuePairs[3].split("'quantity_company_recruitment': ")
            const timescanmy =  keyValuePairs[4].split("'time_scan':")
            const times=(timescanmy[1].split("'"))
            // console.log(quantity_job_recruitment[1],quantity_job_recruitment_yesterday[1], quantity_job_new_today[1],
            // quantity_company_recruitment[1],times[1])
        
            
            const datas = {
                "quantity_job_recruitment":quantity_job_recruitment[1],
                "quantity_job_recruitment_yesterday":quantity_job_recruitment_yesterday[1],
                "quantity_job_new_today":quantity_job_new_today[1],
                "quantity_company_recruitment":quantity_company_recruitment[1] ,
                "times":times[1]
            }                                     

            
          return res.json({ "data": datas});
        }
      });
    },

    get_dulieutheonganhnghe: async (req, res, next) => {
      
        const sql = `
        SELECT a.data FROM data_nganhnghe as a ORDER BY time DESC
        LIMIT 1;
        
        `;
    
        await db.query(sql, (err, response) => {
          if (err) {
            return res.json({ message: "Lỗi truy vấn" });
          } else {
           
        //    console.log(response[0].data)
            const jsonString = response[0].data;
            // console.log(jsonString)
            const jsonString2 = jsonString.replace(/'/g, '"');
            const jsonObject = JSON.parse( jsonString2);
            const data = jsonObject.data;
            return res.json({ "data": data});
          }
        });
      }
      ,
    get_dulieutheomucluong: async (req, res, next) => {
      
        const sql = `
        SELECT a.data FROM data_mucluong as a ORDER BY time DESC
        LIMIT 1;
        
        `;
    
        await db.query(sql, (err, response) => {
          if (err) {
            return res.json({ message: "Lỗi truy vấn" });
          } else {
           
        //    console.log(response[0].data)
            const jsonString = response[0].data;
            // console.log(jsonString)
            const jsonString2 = jsonString.replace(/'/g, '"');
            const jsonObject = JSON.parse( jsonString2);
            const data = jsonObject.data;
            return res.json({ "data": data});
          }
        });
      },

      get_dulieutheotangtruong: async (req, res, next) => {
      
        const sql = `
        SELECT a.data FROM data_tangtruong as a ORDER BY time DESC
        LIMIT 1;
        
        `;
    
        await db.query(sql, (err, response) => {
          if (err) {
            return res.json({ message: "Lỗi truy vấn" });
          } else {
           
        //    console.log(response[0].data)
            const jsonString = response[0].data;
            // console.log(jsonString)
            const jsonString2 = jsonString.replace(/'/g, '"');
            const jsonObject = JSON.parse( jsonString2);
            const data = jsonObject.data;
            return res.json({ "data": data});
          }
        });
      },

      get_data_cv: async (req, res, next) => {
      
        const sql = `
        SELECT * FROM thongkedulieu ORDER BY RAND();
        
        `;
    
        await db.query(sql, (err, response) => {
          if (err) {
            return res.json({ message: "Lỗi truy vấn" });
          } else {
      
            return res.json({ "data": response});
          }
        });
      }
  };
  