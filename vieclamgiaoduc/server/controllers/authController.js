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

// khóa bí mật cho jwt
var  secretKey = 'vieclamgiaoducjwt';




// const connection = require('../db'); // Đường dẫn tới tệp db.js

// Đăng ký tài khoản ứng viên

//update dk thanhf coong
const changeregister = async(email,token)=>{
    try {
        const sql = "UPDATE user SET verify_status = 1 WHERE email = '" + email + "'" +"AND email_verify = '" + token + "'"
        const result = await db.query(sql)
        return 1
    } catch (error) {
        return 0
    }
   
   
}

// lưu tài khoản ứng viên đăng ký
const saveuserregister = async(name,email,passwordhash,hashedEmail)=>{
    const sqluser = "INSERT INTO user (name, email, password, role,email_verify,verify_status) VALUES (?, ?, ?, ?,?,?)";                
    const values = [name, email, passwordhash, "candidate", hashedEmail,0];
    const result = await db.query(sqluser, values);
    // console.log(result);
} 


//lưu tài khoản nhà tuyển dụng đăng ký
// lưu 2
const saveemperloyer2 = async(userid,congtyname,vitricongtac,vitrilamviec, skype)=>{
    const sql = "INSERT INTO employer(user_id, name_cty, workplace, worklocation,skype,image,quymo,gioithieucty,image_banner) VALUES ( ?, ?, ?, ?, ?,?,?,?,?)";
    const values =[userid,congtyname,vitricongtac,vitrilamviec,skype,"","chua cap nhat","chua cap nhat","chua cap nhat"]
    const result = await db.query(sql, values);
}


const saveemperloyer1 = async(name,email,passwordhash,hashedEmail, phone,gender, congtyname,vitricongtac,vitrilamviec,skype)=>{
    const sqluser = "INSERT INTO user (name, email, password, role,phone, gender,email_verify,verify_status) VALUES (?,?,?, ?, ?, ?,?,?)";                
    const values = [name, email, passwordhash, "employer",phone, gender,hashedEmail,0];
    const result = await db.query(sqluser, values);
    // console.log(result);

    
} 



module.exports = {
    // đăng ký tài khoản ứng viên
    registerCandidate: async (req, res,next) => {
        // console.log("aaa",req.body)
    try {
        var { name, email, password } = req.body;
        
        if(name == null || email == null){
            return res.json({"message":"lỗi"},401)
        }
        else{
        // check mail tồn tại hay chưa
        let sql = "SELECT  * FROM user  WHERE email = '" + email + "'";
        var passwordhash =  await bcrypt.hash(password, 10);
        await db.query(sql, (err, response) => {
            if (err) throw err
            else
                if (response.length === 0) {
                    //  gửi email
                    bcrypt.hash(email, parseInt(10)).then((hashedEmail) => {
                        console.log(`http://localhost:5000/verify?email=${email}&token=${hashedEmail}`);

                        //lưu db           
                        saveuserregister(name,email,passwordhash,hashedEmail)
                        mailer.sendMail(email, "Verify Email", `
                                        <!DOCTYPE html>
                                        <html>
                                        <head>
                                        <style>
                                        body {
                                            font-family: Arial, sans-serif;
                                        }
                                        h1 {
                                            color: blue;
                                            font-size: 24px;
                                        }
                                        a {
                                            display: inline-block;
                                            background-color: #3498db;
                                            color: white;
                                            padding: 10px 20px;
                                            text-align: center;
                                            text-decoration: none;
                                            border-radius: 5px;
                                            font-weight: bold;
                                            transition: background-color 0.3s ease;
                                        }
                                        a:hover {
                                            background-color: #2980b9;
                                        }
                                        </style>
                                        </head>
                                        <body>
                                        <h1>Thư xác thực từ Việc làm giáo dục:</h1>
                                        <p>Xin chào,</p>
                                        <p>Chúng tôi rất vui thông báo cho bạn rằng bạn đã đăng ký thành công trên Việc làm giáo dục.</p>
                                        <p>Vui lòng xác thực địa chỉ email của bạn bằng cách nhấn vào nút bên dưới:</p>
                                        <a href="http://localhost:5000/verify?email=${email}&token=${hashedEmail}">BẤM VÀO ĐÂY ĐỂ XÁC THỰC EMAIL CỦA BẠN</a>
                                        <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua thư này.</p>
                                        <p>Trân trọng,</p>
                                        <p>Việc làm giáo dục</p>
                                        </body>
                                        </html>
                                        `)
                        return res.json({"message":"ok"},200)
                        
                    });
                } else {
                    return res.json({"message":"Tồn tại"},200)
                }
        })
        }
    }
    catch{
        return res.json({"message":"lỗi"})
    }
    },

    // đăng ký tài khoản  nhà tuyển dụng
    registerEmployer: async(req,res,next) =>{
        var { name, email, password , gender, phone, congtyname, vitricongtac, vitrilamviec, skype} = req.body;

        if(name == null || email == null ){
            return res.json({"message":"lỗi"},401)
        }
        else{
            // check mail tồn tại hay chưa
            let sql = "SELECT  * FROM user  WHERE email = '" + email + "'";
            var passwordhash =  await bcrypt.hash(password, 10);
            await db.query(sql, (err, response) => {
                if (err) 
                    return res.json({"message": "Lỗi truy vấn"});
                else
                    if (response.length === 0) {
                        //  gửi email
                        bcrypt.hash(email, parseInt(10)).then((hashedEmail) => {
                            console.log(`http://localhost:5000/verify?email=${email}&token=${hashedEmail}`);
    
                            //lưu db  bảng user          
                             saveemperloyer1(name,email,passwordhash,hashedEmail,phone,gender,congtyname,vitricongtac,vitrilamviec,skype)

                            // lưu db bảng employer
                            var id_user = ""
                            const sqlcheck = "SELECT * FROM user WHERE email =" +'"' +email +'"';
                            db.query(sqlcheck,(err,response)=>{
                                
                                id_user = response[0].id
                                if(skype ==="" || skype===null){
                                    skype="Chưa có"
                                }
                                saveemperloyer2 (id_user,congtyname,vitricongtac,vitrilamviec,skype)
                              
                            });
                           
                            

















                            mailer.sendMail(email, "Verify Email", `
                                            <!DOCTYPE html>
                                            <html>
                                            <head>
                                            <style>
                                            body {
                                                font-family: Arial, sans-serif;
                                            }
                                            h1 {
                                                color: blue;
                                                font-size: 24px;
                                            }
                                            a {
                                                display: inline-block;
                                                background-color: #3498db;
                                                color: white;
                                                padding: 10px 20px;
                                                text-align: center;
                                                text-decoration: none;
                                                border-radius: 5px;
                                                font-weight: bold;
                                                transition: background-color 0.3s ease;
                                            }
                                            a:hover {
                                                background-color: #2980b9;
                                            }
                                            </style>
                                            </head>
                                            <body>
                                            <h1>Thư xác thực từ Việc làm giáo dục:</h1>
                                            <p>Xin chào,</p>
                                            <p>Chúng tôi rất vui thông báo cho bạn rằng bạn đã đăng ký thành công trên Việc làm giáo dục.</p>
                                            <p>Vui lòng xác thực địa chỉ email của bạn bằng cách nhấn vào nút bên dưới:</p>
                                            <a href="http://localhost:5000/verifyemployer?email=${email}&token=${hashedEmail}">BẤM VÀO ĐÂY ĐỂ XÁC THỰC EMAIL CỦA BẠN</a>
                                            <p>Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua thư này.</p>
                                            <p>Trân trọng,</p>
                                            <p>Việc làm giáo dục</p>
                                            </body>
                                            </html>
                                            `)
                            return res.json({"message":"ok"},200)
                            
                        });
                    } else {
                        return res.json({"message":"Tồn tại"},200)
                    }
            })
            }
    },

    // verifyemail
    verifyemail:  async  (req, res) => {
        // console.log(req.query.email, req.query.token)
        bcrypt.compare(req.query.email, req.query.token, async (err, result) => {
            // console.log(result)
            if (result == true) {
                    // neeu bang true xacs thuwc thanh cong
                        const resultupdate = await changeregister(req.query.email, req.query.token)
                        if(resultupdate === 1){
                            res.redirect('http://localhost:3000/user/login');}
                        else{
                            res.redirect('http://localhost:3000/user/sign');
                        }
                
            } else {
                return res.json({"message":"email lỗi"},401)
            }
        })
    },

    // verify email cho nhà tuyển dụng
    verifyemailemployer:  async  (req, res) => {
        // console.log(req.query.email, req.query.token)
        bcrypt.compare(req.query.email, req.query.token, async (err, result) => {
            // console.log(result)
            if (result == true) {
                    // neeu bang true xacs thuwc thanh cong
                        const resultupdate = await changeregister(req.query.email, req.query.token)
                        if(resultupdate === 1){
                            res.redirect('http://localhost:3000/app/login');}
                        else{
                            res.redirect('http://localhost:3000/app/sign');
                        }
                
            } else {
                return res.json({"message":"email lỗi"},401)
            }
        })
    },

    // đăng nhập tài khoản ứng viên
    signcandidate: async (req,res,next)=>{

        //
        const {email,password} = req.body;
        if(email === null || password === null){
            return res.json({"message":"item fail"},200)
        }
        else{
            //check đăng nhập
            
            const sql = 'SELECT * FROM user WHERE email = ' + '"' + email+ '"' +"AND verify_status = 1 AND role='candidate'";
            var data =""
            try {
                await db.query(sql, (err, response) => {
                  
                    if (err) {
                        return res.json({"message":"lỗi"})
                    }
                    else{
                    
                            try {
                                if(response.length !==0){
                                data = (response[0])
                                
                                    // console.log(data.password)
                                    // console.log(password)
                                    bcrypt.compare(password,data.password, (err, result) => {
                                        if (result) {
                                        // Mật khẩu đúng
                                        console.log('Mật khẩu đúng');
                                        // tạo dữ liệu lưu jwt  
                                        const payload = {
                                            id:data.id,
                                            email: data.email,
                                            role: data.role, 
                                            maungvien:"#"+data.id,
                                            image:data.image,
                                            nameungvien:data.name,
                                        };
                                        // tạo token
                                        const token = jwt.sign(payload, secretKey, { expiresIn: '4h' }); // Tạo token
            
                                        return res.json({"message":token})
                                        } else {
                                        // Mật khẩu sai
                                        return res.json({"message":"Mật khẩu sai"},200)
                                        }
                                    });
                                }
                                else{
                                    return res.json({"message":"lỗi"})
                                }
                            } catch (error) {
                                return res.json({"message":"lỗi"})
                            }
                           
                        
                        
                    
                        

                    }
                    
                })
            } catch (error) {
                return req.json({"message":"lỗi"})
            }
        }

        
      
    

    },


    // đăng nhập tài khoản nhà tuyển dụng
    signemployer: async (req,res,next)=>{
        //
        const {email,password} = req.body;
        if(email === null || password === null){
            return res.json({"message":"Lỗi"},200)
        }
        else{
            //check đăng nhập
            
            const sql = 'SELECT * FROM user WHERE email = ' + '"' + email+ '"' +"AND verify_status = 1 AND role='employer'";
            var data =""
            try {
                await db.query(sql, (err, response) => {
                  
                    if (err) {
                        return res.json({"message":"Lỗi"})
                    }
                    else{
                    
                            try {
                                if(response.length !==0){
                                data = (response[0])
                                
                                    // console.log(data.password)
                                    // console.log(password)
                                    bcrypt.compare(password,data.password, (err, result) => {
                                        if (result) {
                                        // Mật khẩu đúng
                                        console.log('Mật khẩu đúng');
                                        // tạo dữ liệu lưu jwt  
                                        const payload = {
                                            id:data.id,
                                            email: data.email,
                                            role: data.role, 
                                            image:data.image,
                                            name: data.name,
                                            phone:data.phone,
                                           
                                        };
                                        // tạo token
                                        const token = jwt.sign(payload, secretKey, { expiresIn: '4h' }); // Tạo token
            
                                        return res.json({"message":token})
                                        } else {
                                        // Mật khẩu sai
                                        return res.json({"message":"Mật khẩu sai"},200)
                                        }
                                    });
                                }
                                else{
                                    return res.json({"message":"Lỗi"})
                                }
                            } catch (error) {
                                return res.json({"message":"Lỗi"})
                            }
                           
                        
                        
                    
                        

                    }
                    
                })
            } catch (error) {
                return req.json({"message":"lỗi"})
            }
        }

        
      
    

    },




    // đăng nhập tài khoản admin
    signadmin: async (req,res,next) =>{
        const {email,password} = req.body;
        if(email === null || password === null){
            return res.json({"message":"Lỗi"},200)
        }
        else{
            //check đăng nhập
            
            const sql = 'SELECT * FROM user WHERE email = ' + '"' + email+ '"' +" AND role='admin'";
            var data =""
            try {
                await db.query(sql, (err, response) => {
                  
                    if (err) {
                        return res.json({"message":"Lỗi"})
                    }
                    else{
                    
                            try {
                                if(response.length !==0){
                                data = (response[0])
                                
                                    // console.log(data.password)
                                    // console.log(password)
                                    bcrypt.compare(password,data.password, (err, result) => {
                                        if (result) {
                                        // Mật khẩu đúng
                                        console.log('Mật khẩu đúng');
                                        // tạo dữ liệu lưu jwt  
                                        const payload = {
                                            id:data.id,
                                            role: data.role, 
                                         
                                           
                                        };
                                        // tạo token
                                        const token = jwt.sign(payload, secretKey, { expiresIn: '4h' }); // Tạo token
            
                                        return res.json({"message":token})
                                        } else {
                                        // Mật khẩu sai
                                        return res.json({"message":"Mật khẩu sai"},200)
                                        }
                                    });
                                }
                                else{
                                    return res.json({"message":"Lỗi"})
                                }
                            } catch (error) {
                                return res.json({"message":"Lỗi"})
                            }
                           
                        
                        
                    
                        

                    }
                    
                })
            } catch (error) {
                return req.json({"message":"lỗi"})
            }
        }

    },














    //giải mã token
    verify_token: async(req,res,next) =>{
        function getToken(req) {
            if (
              req.headers.authorization &&
              req.headers.authorization.split(" ")[0] === "Bearer"
            ) {
              return req.headers.authorization.split(" ")[1];
            } 
            return null;
          }
          
        const token = getToken(req);

        if(token === null || token ==='' || token =='null'){
            return res.json({"data":"tokenull"})
        }
        try {
            const decodedToken = jwt.verify(token, secretKey);
            // console.log(decodedToken); // decodedToken chứa thông tin người dùng đã đăng nhập
            // const email = decodedToken.email;
            // const role = decodedToken.role;
            // const id = decodedToken.id;

            return res.json({"data":decodedToken})
          
            
          } catch (error) {
             return res.json({"message":"token ko hợp lệ hoặc hết hạn"})
          }
    },

    // nếu có update  get dữ liệu trên xuống 
    verify_token_update: async(req,res,next)=>{
        function getToken(req) {
            if (
              req.headers.authorization &&
              req.headers.authorization.split(" ")[0] === "Bearer"
            ) {
              return req.headers.authorization.split(" ")[1];
            } 
            return null;
          }
          
        const token = getToken(req);

        if(token === null || token ==='' || token =='null'){
            return res.json({"data":"tokenull"})
        }
        try {
            const decodedToken = await jwt.verify(token, secretKey);
            // console.log(decodedToken); // decodedToken chứa thông tin người dùng đã đăng nhập
            // const email = decodedToken.email;
            // const role = decodedToken.role;
            // const id = decodedToken.id;

            // sql
            const sql = "SELECT * FROM user WHERE id = "+ decodedToken.id;
            const result = await db.query(sql)
                return res.json({"message":result})
          
            
          } catch (error) {
             return res.json({"message":"token ko hợp lệ hoặc hết hạn"})
          }
    }

};
