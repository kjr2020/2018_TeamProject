let express = require('express');
let app = express();
let bodyParser = require('body-parser'); //POST방식의 body객체를 위한 모듈
let fs = require('fs'); //파일 입출력을 위한 모듈
let path = require('path');
let publicPath = path.join(__dirname, 'public');
//app.set('view engine', 'jade');
//app.set('views', './views');
app.use(express.static(publicPath));
//app.use(bodyParser.urlencoded({extended : false}));
app.get('/', (req,res) => {
fs.readFile('./index.html', (err, data) => {
  if(err){
    throw err;
  }
  res.end(data);
});
});


app.listen(8080, () =>{
console.log("제발 되라!");
});
