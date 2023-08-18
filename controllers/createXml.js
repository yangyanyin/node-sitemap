const builder = require('xmlbuilder2')
const fs = require('fs')

// TODT 站点信息
const siteInfo = require('../configs/siteConfig')
/*
 * dataList 数据列表<数组>
 * fileName 文件名称<字符串>
 * 站点地图url  https://:site.patpat.com/:lang/blog/:page_url.html<字符串>
*/
module.exports = (dataList, fileName, url, urlKey) => {
  return new Promise((resolve) => {
    const chunkedArrays = splitArrayIntoChunks(dataList)
    if (!chunkedArrays.length) {
      resolve(`拿不到数据${new Date()}`)
    }

    chunkedArrays.map((rootItem, i) => {
      siteInfo.map(site => {
        const root = builder.create().ele('urlset', {xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'})
        rootItem.map(item => {
          const replacements = {
            site: site.site,
            lang: site.lang,
            pageUrl: item[urlKey]
          }
          const pageUrl = url.replace(/\{([^}]+)\}/g, (match, key) => replacements[key])
          root.ele('url')
            .ele('loc').txt(pageUrl).up()
            .ele('lastmod').txt(new Date()).up()
            .ele('changefreq').txt('daily').up()
            .ele('priority').txt(0.7).up()
          .up()
        })
        
        
        const folderName = process.env.SITEMAP_FOLDER
        const xml = root.end({ prettyPrint: true })
        const sitemapFilePath = `${folderName}/${fileName}-${site.site}-${i+1}.xml`

        // 判断文件夹是否存在，不存就创建一个
        if (!fs.existsSync(folderName)) {
          fs.mkdir(folderName, (err) => {})
        }
        fs.writeFileSync(sitemapFilePath, xml, 'utf-8')
        resolve()
      })
    })
  })
}

/*
 TODO 站点地图拆分
 * 每个站点地图XML文件的最大控制在5000条。这可以确保XML文件不会过大，以便搜索引擎可以更快地解析和处理。
*/
function splitArrayIntoChunks(arr, chunkSize = 5000) {
  const result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  return result
}