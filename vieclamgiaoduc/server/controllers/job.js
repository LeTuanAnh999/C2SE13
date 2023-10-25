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
    get_all_job: async (req, res, next) => {
      // Lấy trang và kích thước trang từ tham số truy vấn (query parameters)
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;
        // console.log(page)
      // Tính toán vị trí bắt đầu và kết thúc cho phân trang
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
  
      // Tạo truy vấn SQL để lấy dữ liệu với phân trang và sắp xếp ngẫu nhiên
      const sql = `
            SELECT a.post_new_id,a.khuvuclamviec,a.time_update, a.tieudetuyendung, a.is_luong, a.is_kieuluong, a.is_tu, a.is_den, a.time_cv, e.name_cty,e.image
            FROM postnews AS a
            LEFT JOIN employer AS e ON a.user_id = e.user_id
            WHERE a.status = 1
            ORDER BY RAND()
            LIMIT ${startIndex}, ${pageSize}
      
      `;
  
      await db.query(sql, (err, response) => {
        if (err) {
          return res.json({ message: "Lỗi truy vấn" });
        } else {
          // Trả về dữ liệu và thông tin phân trang
          const results = response.slice(startIndex, endIndex);
          const totalPages = Math.ceil(response.length / pageSize);
  
          return res.json({ "data": results, totalPages, currentPage: page });
        }
      });
    }
  };
  