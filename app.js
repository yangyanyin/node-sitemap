require('dotenv').config()
const createXml = require('./controllers/createXml')
const sqlRequest = require('./controllers/sqlRequest')

// 创建商品站点地图
const createProduct = new Promise((resolve) => {
  sqlRequest.productList().then(results => {
    const data = results.data
    createXml(data, 'product', 'https://{site}.patpat.com/{lang}/product/{pageUrl}.html', 'url').then(() => {
      resolve('商品站点地图创建完成')
    })
  })
})

// 创建分类站点地图
const createCategory = new Promise((resolve) => {
  sqlRequest.category().then(results => {
    const data = results.data
    createXml(data, 'category', 'https://{site}.patpat.com/{lang}/{pageUrl}.html', 'url').then(() => {
      resolve('分类站点地图创建完成')
    })
  })
})

// 检查是否创建完所有的站点地图
const createCount = [createProduct, createCategory]
Promise.all(createCount).then((values) => {
  values.map(item => {
  console.log(`tips: ${item}`)

  })
  // 创建完退出程序
  if (values.length === createCount.length) {
    process.exit()
  }
})