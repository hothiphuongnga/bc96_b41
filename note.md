/src/app/page.tsx => /
/src/app/product/page.tsx => /product
/src/app/user => /user ❌ khong truy cap duoc
  Tên folder                 route                      EX
  app/user                      /user
  app/(home)/product            /product
  app/(home)                     /
  app/user/[id]                  /user/:id               /user/123
  app/product/[id]               /product/:id            /product/123
  


-- Start source
```
 npm run dev
```



4 cách ql state
 - usestate : state dùng trong component
 - lifting state up: truyền state từ component cha xuống component con thông qua props
 - context: state dùng chung cho nhiều component thông qua Context API
 - thu viện : Redux Toolkit, Zustand, Recoil, Jotai, ...