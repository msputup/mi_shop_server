### node.js + koa2 小米webApp接口代理
---
vue重构小米webApp的时候发现小米首页nav_tab切换数据过多，mock的话，涉及的数据太多，所以用koa2重写了接口。

只抓了自己看到的数据，可能有遗漏

没有写登录接口(vue重构先写的login，后续会改过来)

写的时候只测试了home(首页)的数据，其他的数据会在用到的时候再进行测试


使用方法
```
npm install
node app.js
```