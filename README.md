# Meri Dukaan 
Meri Dukaan is a simple ecomerce web application that is build over a **RBAC (Role Based Access Control)** design pattern in which apis are exposed to authorized
user only. This application is built over **Nodejs** backend with **Sequelize** which is a promise based Nodejs **ORM (Object Relational Mapping)** for relational 
databases, in this application data is stored on **MySQL** database.

### Folder Structure 

![Screenshot](https://github.com/imyogeshgaur/mysql-react-ecom/blob/master/scrrenshots/Screenshot%20(92).png)

### Working of the application

Step 1 : Create a database named as ecomdb in MySQL database.

Step 2 : Create a .env file in the backend folder (see folder structure) with following credentials 
```
DB_URI = mysql://root:root@127.0.0.1:3306/ecomdb
SECRET = JWT_SECRET
MAILID = GMAIL_ID
MAILPASS = GMAIL_PASSWORD
PROFILE_UPLOAD_FOLDER = ../../mern-ecom/backend/uploads/users
PRODUCT_UPLOAD_FOLDER = ../../mern-ecom/backend/uploads/products
PRODUCT_FILE_GET_URL = http://localhost:4000/static/product/
PROFILE_FILE_GET_URL = http://localhost:4000/static/user/
```
Step 3 : Run the backend of the application by the follwing command 
```
  cd backend
  npm start
```
Step 4 : Run the fontend of the application by the follwing command 
```
  cd frontend
  npm start
```
