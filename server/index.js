const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(require('cors')());
app.use(express.json())

mongoose.connect('mongodb://localhost/element-admin', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String },
  body: { type: String },
}))



app.get('/', async (req, res) => {
  res.send('hhhhh!!!')
});

// 新建文章
app.post('/api/articles', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})

// 文章列表
app.get('/api/articles', async (req, res) => {
  const articles = await Article.find()
  res.send(articles)
})

// 删除文章
app.delete('/api/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})

// 文章详情
app.get('/api/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})

// 修改文章
app.put('/api/articles/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
})

app.listen(3000, () => {
  console.log('App is Running at http://127.0.0.1:3000/');
});
