const query = require('../configs/sqlConfig')

const productList = () => {
  return new Promise((resolve) => {
    const sql = 'SELECT * FROM product_list'
    query(sql, (data) => {
      const result = {
        code: 200,
        data: data
      }
      resolve(result)
    })
  })
}

const category = () => {
  return new Promise((resolve) => {
    const sql = 'SELECT * FROM category'
    query(sql, (data) => {
      const result = {
        code: 200,
        data: data
      }
      resolve(result)
    })
  })
}

module.exports = {
  productList,
  category
}