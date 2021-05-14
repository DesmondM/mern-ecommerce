import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://dbDes:poppie@cluster0.zklft.mongodb.net/mernEcommerce?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


/* const uri = process.env.mongodb || "mongodb+srv://dbDes:poppie@cluster0.zklft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri,
{
    useNewUrlParser: true,
    useFindAndModify: false
},(err)=>{
    if(err){
        process.exit(1);
        console.log('unable to connect to database');
    }
    else
        console.log('successfully connected to the database');
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('app is running');
});
 */






app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});


app.get('/api/products', (req,res)=>{
    res.send(data.products);
})
app.use('/api/users', userRouter);
app.get('/', (req, res)=>{
    res.send('Server is working');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});