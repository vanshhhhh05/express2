const express= require('express');
const app= express();
const port= 8080;
app.use(express.static('public'));
app.post('/',(req,res)=>{
  res.send('Please make get request');
  console.log(req.url);
})
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/home.html');
})
//app.get('/products?',(req,res)=>{
  //res.send('Product Page');
//})
//app.post('/orders?',(req,res)=>{
  //res.send('Order Page');
//})
//app.post('/payments?',(req,res)=>{
  //res.send('Payment Page');
//})
app.listen(port,()=>{
  console.log(`Server listen on port: ${port}`);
});
