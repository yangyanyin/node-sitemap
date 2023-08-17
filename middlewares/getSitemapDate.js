const serverAPI = require('../api/serverApi')
const createXml = require('../controllers/createXml')
// const requestParams = require('../configs/requestParams')
const sqlRequest = require('../controllers/sqlRequest')
module.exports = (req, res, next) => {
  const productList = new Promise((resolve) => {
    sqlRequest.productList().then(results => {
      const data = results.data
      createXml(data, 'product', 'https://{site}.patpat.com/{lang}/product/{pageUrl}.html', 'url').then((message) => {
        resolve()
      })
    })
    // const ppAPI = serverAPI.createPPAPI()
    // let successCount = 0
    // requestParams.map(async (params) => {
    //   const result = await ppAPI({ url: params.api})
    //   const pageUrl = params.page_url
    //   const key = params.url_key
    //   const sitemapName = params.mapsite_name
    //   const data = result.items || result.list
    //   createXml(data, sitemapName, pageUrl, key).then((message) => {
    //     console.log(message, 'message')
    //     successCount += 1
    //     if (successCount === requestParams.length) {
    //       resolve()
    //     }
    //   })
    // })
  })
  Promise.all([productList]).then((values) => {
    console.log(values);
  });
}