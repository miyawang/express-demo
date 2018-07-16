var express = require('express');
var app = express();

var hbs = require('hbs');
// 加载数据模块
var blogEngine = require('./blog');
// 指定模板文件的后缀名为html
app.set('view engine', 'html');

// 运行hbs模块
app.engine('html', hbs.__express);
// app.use(express.bodyParser());
app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});

app.get('/about', (req, res) => {
    // res.sendFile(__dirname + '/views/about.html');
    res.render('about',{title:"自我介绍"});
});

app.get('/article', (req, res) => {
    // res.sendFile(__dirname + '/views/article.html');
    res.render('article',{title:entry.title, blog:entry});
  });

app.listen(3000);

