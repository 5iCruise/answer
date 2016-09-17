import {join} from 'path';

export default {
  host:'127.0.0.1',
  port:3000,
  database:'answer',
  viewPath:join(__dirname,"views"),
  statciPaths:[
  join(__dirname,'www'),
  join(__dirname,'assets')
  ]

}