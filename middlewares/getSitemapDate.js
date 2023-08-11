const serverAPI = require('../api/serverApi')
const createXml = require('../configs/createXml')
const requestParams = require('../configs/requestParams')
module.exports = (req, res, next) => {
  return new Promise((resolve) => {
    const ppAPI = serverAPI.createPPAPI()
    let successCount = 0
    requestParams.map(async (params) => {
      const result = await ppAPI({ url: params.api})
      const pageUrl = params.page_url
      const key = params.url_key
      const sitemapName = params.mapsite_name
      const data = result.items || result.list
      createXml(data, sitemapName, pageUrl, key).then((message) => {
        console.log(message, 'message')
        successCount += 1
        if (successCount === requestParams.length) {
          resolve()
        }
      })
    })
  })
}