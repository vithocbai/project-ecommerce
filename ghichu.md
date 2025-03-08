## -- Làm việc với lệnh git

#CTRL+C thoát treo cmd

# Đưa lên git tạo create shh key : tạo reposetory nhớ + readmefile

# gõ: git remote add origin - git init - git remote add origin "SSH" - git remote -v (đe xem) - git commit -m "first commit" - git branch -m master main - git push -u origin main (báo lỗi) phải thêm -f
## Đưa lên mỗi trường product pnpm build - pnpm preview 
## Như bài tên Foder sai lên phải chỉnh hết về project-ecommerce để github hiểu
-- b1 Thêm "homepage": "https://vithocbai.github.io/project-ecommerce/" vô scripts 
-- b2 <BrowserRouter basename="/project-ecommerce"> 
-- b3 pnpm add gh-pages -D
-- b4  base: "/project-ecommerce/", vào vite.config.js
-- b5 "deploy": "gh-pages -d dist" vào trong "scripts": 
-- b6 pnpm run build - pnpm run deploy

## single react viết nhanh vd ffc ...

## Thêm prettier + Alias Vite (Import dễ dàng hơn)

## Cấu hình Structure SCSS 1.pnpm add normalize.css(reset) - 2. pnpm add -D sass (dùng sass)

-   styles > \_variable.module.scss , \_global.module.scss , \_mixin.module.scss , main.scss
-   components > Layout (main), Header, Footer ở App bọc <>MainLayout</>

- tự phân tích dự án và tạo ra các constant.js sau đó import vô rồi render ...

## Alias tự động tạo file jsconfig.json 

## Lên iconfy react nhúng svg về mày 

## dùng Icon react hay hơn pnpm add react-icons --save 

## đến phân List Product thì sử dụng framwork Axios của js để Call Api 

// link API List Product - https://be-project-reactjs.onrender.com/api-docs/#/

## Lam scroll 
- scroll trinh duyêt , scroll up down 
- 
## Cấu hình router 
- pmpn add react-router-dom 

## Làm scrollImage and FixedHeader

## nợ đến video37  ngày 8/3 

## sibar ở nhiều trang lên cần tạo ra 1 context 

## trong react js có framWork là Formik dùng để quản lý state submit - và yup để xác thực dữ liệu như các rule 
-- pnpm add formik yup 
-- import * as Yup from 'yup'
-- import { useFormik } from 'formik'

## React-toastify pnpm i react-toastify 
-- import { ToastContainer, toast } from 'react-toastify' 


