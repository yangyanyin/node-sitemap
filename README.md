## NodeJs xmlbuilder2 动态生成站点地图


[xmlbuilder2](https://www.npmjs.com/package/xmlbuilder2) 是一个用于创建 XML 的 Node.js 模块。你可以使用它来生成站点地图（sitemap）的 XML 文件。

```
npm install
```

### 启动
```
npm run dev
```

### 目录结构

```bash
├── README.md
├── package.json           
├── api                  // axios配置文件
│   └── serverApi.js
├── config               // 基础配置文件
│   ├── requestParams.js // 请求配置文件 
│   ├── siteConfig       // 站点配置问
│   └── sql              // SQL配置文件，待更新
├── controllers          // 控制器文件
│   └── createXml        // mxl 站点地图创建控制器
│   middlewares          // 中间件
│   └── getSitemapDate   // 获取站点地图需要数据 
├── output               // 生成站点地图保存的目录
└── app.js               // 启动文件
```