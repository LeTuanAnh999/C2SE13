import json
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

async def get_data_nhu_cau(type):
    url = 'https://www.topcv.vn/get-recruitment-demand?type={}'.format(type)
    browser = await launch()  # Khởi tạo trình duyệt
    page = await browser.newPage()  # Tạo một trang mới
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
    await page.setJavaScriptEnabled(True)
    await page.goto(url)
    html_content = await page.content()
    await browser.close()
    soup = BeautifulSoup(html_content, 'html.parser')
    pre_tag = soup.find('pre')
    pre_text = pre_tag.get_text()
    data = json.loads(pre_text)
    print(data)
#theo mức lương type =4

async def main1(type):
    await get_data_nhu_cau(type)

# asyncio.run(main(4))