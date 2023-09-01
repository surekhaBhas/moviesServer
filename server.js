const express=require('express');
const app=express();
PORT=5000;
const cors=require('cors');
const corsOptions = require('./config/corsOptions');

app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use('/movies',require('./routes/movies'))
app.use('/video',require('./routes/video'))

app.listen(PORT,()=>{
  console.log(`server running at ${PORT}`)
})