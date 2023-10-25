'use strict';
const rateLimit = require('express-rate-limit');
const postNewsLimiter = rateLimit({
  windowMs: 5000, // Khoảng thời gian (5 giây) cho phép 1 lần gọi
  max: 2, // Số lần tối đa user có thể gọi trong khoảng thời gian trên
  message: 'Quá nhiều yêu cầu trong thời gian ngắn. Vui lòng thử lại sau.', // Thông báo lỗi khi vượt quá giới hạn
});
module.exports = function(app) {
  let authController = require('./controllers/authController');
  let hellomy = require('./controllers/Hello');

  let employer = require('./controllers/employer');
  let job = require('./controllers/job');

  // thong ke data

  let datanalytics =  require('./controllers/thongkedata');
  app.route('/')
    .get(hellomy.hello)
  // Đăng ký tài khoản ứng viên
  app.route('/api/v1/registercandidate')
    .post(authController.registerCandidate)

  // xác minh gmail
  app.route('/verify')
    .get(authController.verifyemail)

  // đăng nhập tài khoản ứng viên   email và password
  app.route('/api/v1/signcandidate')
      .post(authController.signcandidate)


      
  //very token jwt 
  app.route('/api/v1/verify_token')
      .get(authController.verify_token)



  // đăng ký tài khoản cho nhà tuyển dụng
  app.route('/api/v1/registeremployer')
      .post(authController.registerEmployer)
  // xác minh gmail cho nhà tuyển dung
  app.route('/verifyemployer')
  .get(authController.verifyemailemployer)

  //  đăng nhập tài khoản cho nhà tuyển dụng
  app.route('/api/v1/signemployer')
  .post(authController.signemployer)


  // đăng nhập cho tài khoản admin
  app.route('/api/v1/signadmin')
  .post(authController.signadmin)



  // đăng tin cho employer
  app.route('/api/v1/postnews',postNewsLimiter)
  .post(employer.postnews)

















  // coong viec
  //tat cả cong viẹc
  app.route('/api/v1/getalljob',postNewsLimiter)
  .get(job.get_all_job)










  // data
  // get du lieu hom nay
  app.route('/api/v1/getdulieuanamoinhat')
  .get(datanalytics.get_dulieumoinhat)

  // theo ngành nghề
  app.route('/api/v1/getdulieutheonganhnghe')
  .get(datanalytics.get_dulieutheonganhnghe)
   // theo luong
   app.route('/api/v1/getdulieutheoluong')
   .get(datanalytics.get_dulieutheomucluong)
  // tang trường
   app.route('/api/v1/getdulieutheotangtruong')
   .get(datanalytics.get_dulieutheotangtruong)
  //list data
  app.route('/api/v1/getdulieucongviec')
  .get(datanalytics.get_data_cv)
};



