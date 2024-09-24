import express from "express";
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';


const app = express();
app.use(express.json());




app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/user', userRoutes);

app.use('/tweet', tweetRoutes);


app.listen(3010, ()=>{
    console.log('Server started at localhost:3010');
});

