import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/help', function (req, res) {
  res.send('help');
});
app.get('/feedback', function (req, res) {
  res.send('feedback');
});
app.get('/cart', function (req, res) {
  res.send('cart');
});
app.get('/:username/:id', function (req, res) {
  console.log(req.params.username);
  console.log(req.params.id);
  res.send(`Hello ${req.params.username} and your id is ${req.params.id}`);
});
app.get('/search',(req,res)=>{
  let {q}=req.query;
  console.log(q);
  if(!q){
    return res.send("<h1>You must provide a search term</h1>");
  }
  else{
    res.send(`<h1> You searched for ${q}</h1>`);
  }
})
// app.use((req,res)=>{
  //   console.log("404");
//   res.send("This is a basic response");
// });

app.listen(3000);