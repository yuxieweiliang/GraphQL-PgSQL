// 框架
var Koa = require('koa')
// path
var path = require('path')
// 跨域
var cors = require('koa2-cors')
// 路由
var Router = require('koa-router')

var client = require('./client');

var graphql = require('graphql');

var { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');

const { Client } = require('pg')

const app = new Koa();

const router = new Router();

// const client = new Client();

// 获取项目根目录
const ROOTS = process.cwd();

// 跨域
app.use(cors({
  origin: function(ctx) {
    return '*';
  }})
);



router.get('/', async function(ctx) {
  client.query('select * from student',  function(error, results) {
    console.log(error, results)
  });

  console.log('-----------')

  ctx.body = 'fffffffffffffffffffffffffff'
})
/*router.get('/graphql', async (ctx, next) => {
  await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
})*/

app.use(router.routes());
app.listen(8989);





