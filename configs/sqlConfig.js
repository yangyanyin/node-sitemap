const mysql= require("mysql"); 
const pool = mysql.createPool({  
  host: 'localhost',
  user: 'root',
  password: 'yang1187756010',
  database: 'yyy'
})

module.exports = (sql, options, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {  
      callback(err, null, null)
      return
    } else {  
      connection.query(sql, options, function(err, results, fields) {
        if (err) {
          console.log('[SELECT ERROR] - ', err.message)
				  return
        }
        //释放连接  
        connection.release()
        //事件驱动回调  
        // callback(err, results, fields)
      })
    }
  })
}