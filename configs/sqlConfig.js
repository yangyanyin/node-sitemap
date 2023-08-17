const mysql= require("mysql"); 
const pool = mysql.createPool({  
  host: '127.0.0.1',
  user: 'root',
  password: 'MyPass@123',
  port: "3306",
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