const mysql= require("mysql"); 
const pool = mysql.createPool({  
  host: process.env.SQL_HOST,
  user: 'root',
  password: process.env.SQL_PASSWORD,
  port: process.env.SQL_PORT,
  database: 'yyy'
})

module.exports = (sql, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {  
      console.log(err)
      return
    } else {
      connection.query(sql, function(err, results, fields) {
        if (err) {
          console.log('[SELECT ERROR] - ', err.message)
				  return
        }
        //释放连接  
        connection.release()
        //事件驱动回调  
        callback(results, fields)
      })
    }
  })
}