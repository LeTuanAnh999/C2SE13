# import requests

# url = "http://localhost:5000/api/v1/registercandidate"

# payload = {'name': 'aaaa',
# 'email': 'trancutuan2000@gmail.com',
# 'password': 'aaaaaaaaaaaa'}
# files=[

# ]
# headers = {}

# response = requests.request("POST", url, headers=headers, data=payload, files=files)

# print(response.text)
# print(response.status_code)
# import requests
# import json

# url = "http://localhost:5000/api/v1/registeremployer"
# # var { name, email, password , gender, phone, congtyname, vitricongtac, vitrilamviec, skype} = req.body;

# payload = {'name':"Nhà tuyển dụng a",'email': 'trancutuan111020@gmail.com',
# 'password': '123',
# 'gender':"Nam",
# 'phone':'0961903217',
# 'congtyname':'Công ty giáo dục Việt Nam',
# 'vitricongtac':"Nhân viên",
# 'vitrilamviec':"Đà nẵng",
# "skype":""
# }
# files=[

# ]
# headers = {
# #   'Content-Type': 'application/json'
# }

# response = requests.request("POST", url, headers=headers, data=payload, files=files)

# import requests
# import json

# url = "http://localhost:5000/api/v1/loginadmin"

# payload = json.dumps({
#   "email": "quantrivien@dtu.edu.vn",
#   "password": "123"
# })
# headers = {
#   'Content-Type': 'application/json'
# }

# response = requests.request("POST", url, headers=headers, data=payload)

# print(response.text)



import requests

url = "http://localhost:5000/api/v1/postnews"

payload = {'employer_id': '123'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
