
const { Client } = require('pg')

// const client = new Client('tcp://postgres:xyf.3342@localhost/postgres')
const client = new Client({
  user: "postgres",
  password: "xyf.3342",
  database: "postgres",
  host: "127.0.0.1",
  port: 5432
})
client.connect()

module.exports = client