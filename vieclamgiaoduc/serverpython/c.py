import undetected_chromedriver as uc
from multiprocessing import freeze_support
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import time
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import asyncio
from pyppeteer import launch
from lxml import etree
import threading
import re
async def get_data(url):
    browser = await launch()  # Khởi tạo trình duyệt
    page = await browser.newPage()  # Tạo một trang mới
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto('https://www.topcv.vn/viec-lam/ky-thuat-vien-trung-tam-thi-nghiem-thuc-hanh-truong-dh-yersin-da-lat/1033592.html?ta_source=JobSearchList_LinkDetail&u_sr_id=HrE0ZBuUx9TCjY57RukqsXYnZB7EDbOJQayZhmhF_1696498202')
   
    
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    elements = soup.find_all(class_='job-detail__info--section-content-value')

    #ten
    is_namecv = soup.find(class_='job-detail__info--title')
    print(is_namecv.text.strip())
    name_cv = is_namecv.text.strip()
    # Lặp qua danh sách các thẻ div và lấy nội dung của từng thẻ

    is_luong = elements[0].text.strip()
    is_diadiem = elements[1].text.strip()
    is_kn=elements[2].text.strip()
    print(is_luong,is_diadiem,is_kn)
    
    
    # hạn nộp hồ sơ
    is_hanhoso =  soup.find(class_='job-detail__info--deadline')
    try:
        print( is_hanhoso.text.strip())
    except Exception as e:
        pass
    
    
    
    # thongtinchung
    #nhanvien thứ 0
    # kinh nghiemj thu 1
    #so luong 2
    #time : thứ 3
    #yeu cau : thu 4
    elements_thongtinchung = soup.find_all(class_='box-general-group-info-value')
    for item in elements_thongtinchung:
        print(item.text.strip())
    
    is_nhanvien= elements_thongtinchung[0].text.strip() 
    is_kinhnghiem =  elements_thongtinchung[1].text.strip() 
    is_soluong = elements_thongtinchung[2].text.strip() 
    is_time = elements_thongtinchung[3].text.strip() 
    is_yeucau = elements_thongtinchung[4].text.strip() 
        
    #tencong ty
    is_namecongty = soup.find(class_='company-name-label');
    print( is_namecongty.text.strip())
    #thong tin cong ty
    # so luong nhan vien thứ 0
    # dia diem thu 1
    is_congty = soup.find_all(class_='company-value');
    for item2 in is_congty:
        print(item2.text.strip())
    
    is_soluongnvcongty = is_congty[0].text.strip()
    is_diadiemcongty = is_congty[1].text.strip()
    #motacv
    div_element = soup.find(class_='job-detail__information-detail--content')
    print(div_element)
    
    
    # #images
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
    for href in image_hrefs:
        print(href)
    # a_elements = soup.select('list-image-company')

    # # Lặp qua danh sách các thẻ <a> và lấy thuộc tính data-src
    # for a in a_elements:
    #     data_src = a['data-src']
    #     print(data_src)
asyncio.get_event_loop().run_until_complete(get_data('a'))




# def process_item(item):
#     asyncio.run(get_data(item))

# async def a(pagemin,pagemax):
      
#     browser = await launch()  # Khởi tạo trình duyệt
#     page = await browser.newPage()  # Tạo một trang mới
#     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
#     await page.setJavaScriptEnabled(True)
#     await page.goto('https://www.topcv.vn/tim-viec-lam-giao-duc-dao-tao-c10017?sort=top_related&page=1')
#     await page.waitFor(5000) 
#     html_content = await page.content()
#     await browser.close()
#     soup = BeautifulSoup(html_content, 'html.parser')
    
    
#     # element = soup1.find_element("xpath",('//*[@id="main"]/div[1]/div[4]/div[2]/div/div/div[3]/div[1]/div/div[1]'))
#     # element_html = soup.get_attribute('outerHTML')
#     # soup = BeautifulSoup(element_html, 'html.parser')
#     unique_hrefs = set()
    
#     for link in soup.find_all('a', target='_blank'):
#         href = link.get('href')
#         if href and 'ta_source=JobSearchList_LinkDetail' in href:
#             unique_hrefs.add(href)
        
    
#     if unique_hrefs is None:
#         browser = await launch()  # Khởi tạo trình duyệt
#         page = await browser.newPage()  # Tạo một trang mới
#         await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
#         await page.setJavaScriptEnabled(True)
#         await page.goto('https://www.topcv.vn/tim-viec-lam-giao-duc-dao-tao-c10017?sort=top_related&page=1')
#         tim.sleep(5)
#         await page.waitFor(5000) 
#         html_content = await page.content()
#         await browser.close()
#         soup = BeautifulSoup(html_content, 'html.parser')
#         for link in soup.find_all('a', target='_blank'):
#             href = link.get('href')
#             if href and 'ta_source=JobSearchList_LinkDetail' in href:
#                 unique_hrefs.add(href)
            
    
#     for item in unique_hrefs:
#         await  get_data(item)
#         break

# asyncio.get_event_loop().run_until_complete(a(1,2))

