import express from 'express';
import router from './router';
import config from './config';
import path from 'path';

const app = express();

//配置静态资源路径
config.statciPaths.forEach((statciPath,index) => {
  app.use(`/${path.basename(statciPath)}`,express.static(statciPath))
})

//配置xTemplate模版引擎
app.set('views',config.viewPath);
app.set('view engine','xtpl');

//挂载路由
app.use(router);

app.listen(config.port,config.host,() => {
  console.log('server is running...');
  console.log(`  Please Visit http://${config.host}:${config.port}/`)
})