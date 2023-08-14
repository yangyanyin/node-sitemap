// const express = require('express')
// const app = express()
const getSitemapDate = require('./middlewares/getSitemapDate')
getSitemapDate().then(() => {
  console.warn('站点地图创建成功，退出改程序!!!')
  process.exit()
})


// app.get('/', (req, res) => {
//   res.json({
//     code: '200',
//     status: 'Success'
//   });
//   process.exit()
// });


// const port = 8888
// app.listen(8888, () => console.info(`\x1b[42;30m 服务启动成功:\x1b[0;32m \x1b[4mhttp://localhost:${port}\x1b[0m`))
