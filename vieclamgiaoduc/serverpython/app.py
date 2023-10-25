import asyncio
from flask import Flask, jsonify
import json
import undetected_chromedriver as uc
from multiprocessing import freeze_support

from bs4 import BeautifulSoup
import time


import asyncio
from pyppeteer import launch
from lxml import etree
import pymysql
import datetime
import re
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
connection_data=pymysql.connect(host="localhost", user="root", passwd="", db="vieclamgiaoducdb")


async def get_data_nhu_cau(type):
    url = 'https://www.topcv.vn/get-recruitment-demand?type={}'.format(type)
    browser = await launch(
    handleSIGINT=False,
    handleSIGTERM=False,
    handleSIGHUP=False
    )
    page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto(url)
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    pre_tag = soup.find('pre')
    pre_text = pre_tag.get_text()
    data = json.loads(pre_text)
    return data



async def get_data_tangtruong():
    url = 'https://www.topcv.vn/get-job-opportunity-growth'
    browser = await launch(
    handleSIGINT=False,
    handleSIGTERM=False,
    handleSIGHUP=False
    )
    page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto(url)
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    pre_tag = soup.find('pre')
    
    pre_text = pre_tag.get_text()
    data = json.loads(pre_text)
    return data


async def get_data_thitruonghomnay():
    url = 'https://www.topcv.vn/get-work-market'
    browser = await launch(
    handleSIGINT=False,
    handleSIGTERM=False,
    handleSIGHUP=False
    )
    page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto(url)
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    pre_tag = soup.find('pre')
    pre_text = pre_tag.get_text()
    data = json.loads(pre_text)
    return data

@app.route("/")
def index():
    return "Hello"


    
    
async def savedataluong(data):
    #  lấy thời gian
    x = datetime.datetime.now();
    print(x)
    conn = connection_data
    cursor = conn.cursor()
    conn.ping() 
    with conn.cursor() as cursor: 
        sql = """
                INSERT INTO data_mucluong (data,time) VALUE(%s,%s)
            """
          
        val =(str(data),x)
        cursor.execute(sql,val)
        conn.commit()
    
@app.route("/apiv1/getmucluong")
async def mucluong():
   
    try:
        data = await get_data_nhu_cau(4);
        await savedataluong(data)
        return jsonify({'data': data}),200
    except Exception as e:
        return jsonify({"message":"fail"}),200
   

async def savedatanganhnghe(data):
    #  lấy thời gian
    x = datetime.datetime.now();
    print(x)
    conn = connection_data
    cursor = conn.cursor()
    conn.ping() 
    with conn.cursor() as cursor: 
        sql = """
                INSERT INTO data_nganhnghe (data,time) VALUE(%s,%s)
            """
          
        val =(str(data),x)
        cursor.execute(sql,val)
        conn.commit()
   
@app.route("/apiv1/gettheonganhnghe")
async def nganhnghe():
    try:
        data = await get_data_nhu_cau(2)
        await savedatanganhnghe(data)
        return jsonify({"message":"ok"}),200
    except Exception as e:
        return jsonify({"message":"fail"})
    return jsonify({"message":"ok"}),200


# tang trương
async def savedatatangtruong(data):
    #  lấy thời gian
    x = datetime.datetime.now();
    print(x)
    conn = connection_data
    cursor = conn.cursor()
    conn.ping() 
    with conn.cursor() as cursor: 
        sql = """
                INSERT INTO data_tangtruong (data,time) VALUE(%s,%s)
            """
          
        val =(str(data),x)
        cursor.execute(sql,val)
        conn.commit()

@app.route("/apiv1/gettheotangtruong")
async def theotangtruong():
    try:
        data = await get_data_tangtruong()
        await savedatatangtruong(data)
        return jsonify({"message":"ok"})
    except Exception as e:
        return jsonify({"message":"fail"})
    return jsonify({"message":"ok"})


#thi trương hom nay
async def savedatahomnay(data):
    #  lấy thời gian
    x = datetime.datetime.now();
    print(x)
    conn = connection_data
    cursor = conn.cursor()
    conn.ping() 
    with conn.cursor() as cursor: 
        sql = """
                INSERT INTO data_dulieumoinhat(data,time) VALUE(%s,%s)
            """
          
        val =(str(data),x)
        cursor.execute(sql,val)
        conn.commit()

@app.route("/apiv1/gettheodulieumoinhat")
async def dulieumoi():
    try:
        data = await get_data_thitruonghomnay()
        await savedatahomnay(data)
        return jsonify({"message":"ok"})
    except Exception as e:
        return jsonify({"message":"fail"})
    return jsonify({"message":"ok"})












#  crawl data theo page
#save data
#thi trương hom nay


    
async def savedatathongke(namejob,mucluong,diadiem,kinhnghiem,images,is_hanhoso , div_element,cty_name,quymo,diadiemcongty,capbac,soluongtuyen,
                         hinhthuc,gioitinh,imagecity,url):
    #  lấy thời gian
    print(namejob)
    try:
        tencongviec = ""
        tencongviec=namejob
        x = datetime.datetime.now();
        conn = connection_data
        cursor = conn.cursor()
        conn.ping() 
        with conn.cursor() as cursor: 
            sql = """
                INSERT INTO thongkedulieu (name_job,mucluong,diadiem,kinhnghiem,images,is_hanhoso ,motacv,cty_name,quymo,diadiemcongty,capbac,soluongtuyen,
                            hinhthuc,gioitinh,imagecity,url,timeupdate) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
            
            val =(str(tencongviec),mucluong,diadiem,kinhnghiem,images,is_hanhoso ,str( div_element),cty_name,quymo,diadiemcongty,capbac,soluongtuyen,
                            hinhthuc,gioitinh,imagecity,url,x)
            cursor.execute(sql,val)
            conn.commit()

    except Exception as e:
        pass
   
async def get_data(url):
    browser = await launch(
    handleSIGINT=False,
    handleSIGTERM=False,
    handleSIGHUP=False
    )
    print(url)
    page = await browser.newPage()  # Tạo một trang mới
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto(url)
    await page.waitFor(3000) 
    time.sleep(3)
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    elements = soup.find_all(class_='job-detail__info--section-content-value')
    # print(soup)
    #ten
    try:
      
        is_namecv = soup.find(class_='job-detail__info--title')
        # Lặp qua danh sách các thẻ div và lấy nội dung của từng thẻ
        name_cv = is_namecv.text.strip()
        is_luong = elements[0].text.strip()
        is_diadiem = elements[1].text.strip()
        is_kn=elements[2].text.strip()
        # hạn nộp hồ sơ
        is_hanhoso =  soup.find(class_='job-detail__info--deadline')
        is_hanhoso2 = is_hanhoso.text.strip()
        # thongtinchung
        #nhanvien thứ 0
        # kinh nghiemj thu 1
        #so luong 2
        #time : thứ 3
        #yeu cau : thu 4
        elements_thongtinchung = soup.find_all(class_='box-general-group-info-value')
        
        is_nhanvien= elements_thongtinchung[0].text.strip() 
        is_kinhnghiem =  elements_thongtinchung[1].text.strip() 
        is_soluong = elements_thongtinchung[2].text.strip() 
        is_time = elements_thongtinchung[3].text.strip() 
        is_yeucau = elements_thongtinchung[4].text.strip() 
            
        #tencong ty
        is_namecongty = soup.find(class_='company-name-label');
    
        #thong tin cong ty
        # so luong nhan vien thứ 0
        # dia diem thu 1
        is_congty = soup.find_all(class_='company-value');
    
        
        is_soluongnvcongty = is_congty[0].text.strip()
        is_diadiemcongty = is_congty[1].text.strip()
        #motacv
        div_element = soup.find(class_='job-detail__information-detail--content')
        
        
        #images
        pattern = re.compile(r'unsafe/80x/filters:format\(webp\)')

        # Tìm tất cả các thẻ img trong div_element
        img_tags = soup.find_all('img')

        # Lặp qua danh sách các thẻ img và lọc ra các src thỏa mãn biểu thức chính quy
        image_hrefs = []
        for img_tag in img_tags:
            src = img_tag.get('src')
            if src and re.search(pattern, src):
                image_hrefs.append(src)

        # In danh sách các href của hình ảnh thỏa mãn điều kiện
        try:
            imagecitys =image_hrefs[0]
        except Exception as e:
            imagecitys =""
        
        
            

        imagess=""
        # lưu data
        gioitinh =""
        namecongty = is_namecongty.text.strip()
        time.sleep(1)
      
    except Exception as e:
        pass
    try:
        await  savedatathongke(name_cv,is_luong,is_diadiem,is_kn,imagess,is_hanhoso2 , div_element,namecongty,is_soluongnvcongty ,is_diadiemcongty,
                           is_nhanvien,is_soluong,is_yeucau ,gioitinh, imagecitys,url)
    except Exception as e:
        pass

    
async def datagiaoducmain(page):
      
    browser = await launch(
    handleSIGINT=False,
    handleSIGTERM=False,
    handleSIGHUP=False
    )
    page = await browser.newPage()  # Tạo một trang mới
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto('https://www.topcv.vn/tim-viec-lam-giao-duc-dao-tao-c10017?sort=top_related&page=1')
    await page.waitFor(3000) 
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    
    
    # element = soup1.find_element("xpath",('//*[@id="main"]/div[1]/div[4]/div[2]/div/div/div[3]/div[1]/div/div[1]'))
    # element_html = soup.get_attribute('outerHTML')
    # soup = BeautifulSoup(element_html, 'html.parser')
    unique_hrefs = set()
    
    for link in soup.find_all('a', target='_blank'):
        href = link.get('href')
        if href and 'ta_source=JobSearchList_LinkDetail' in href:
            unique_hrefs.add(href)
        
    
    if unique_hrefs is None:
        browser = await launch()  # Khởi tạo trình duyệt
        page = await browser.newPage()  # Tạo một trang mới
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
        await page.setJavaScriptEnabled(True)
        await page.goto('https://www.topcv.vn/tim-viec-lam-giao-duc-dao-tao-c10017?sort=top_related&page=1')
        tim.sleep(5)
        await page.waitFor(3000) 
        html_content = await page.content()
        await browser.close()
        soup = BeautifulSoup(html_content, 'html.parser')
        for link in soup.find_all('a', target='_blank'):
            href = link.get('href')
            if href  and 'viec-lam' in href:
                unique_hrefs.add(href)
            
    
    # print(unique_hrefs)   
    for item in unique_hrefs:
        await  get_data(item)
        # lay 1 item
        break;
        # test
      
      


@app.route("/apiv1/getdatagiaoduc")
async def datagiaoduc():
    try:
        data = await datagiaoducmain(1)
    except Exception as e:
        pass
   
       
    return jsonify({"message":"ok"}),200

if __name__ == '__main__':
  

    app.run(debug=True)
    app.run(port=5555,host="0.0.0.0",debug=True)
   
    
   