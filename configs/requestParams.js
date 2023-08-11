/*
 * 请求参数配置文件
   api: 请求api路由
   url_key: 请求到参数的url key
   page_url: 映射当前页面的URL，{动态参数}
   mapsite_name: 站点地图文件名称
*/

module.exports = [
  {
    api: '/v2/categories/products?category_id=840&page=1&page_size=50',
    url_key: 'product_url',
    page_url: 'https://{site}.patpat.com/{lang}/product/{pageUrl}.html',
    mapsite_name: 'product'
  },
  {
    api: '/v2/hc_v2/blog/index?page=1&page_size=100',
    url_key: 'url',
    page_url: 'https://{site}.patpat.com/{lang}/blog/{pageUrl}.html',
    mapsite_name: 'blog'
  }
]