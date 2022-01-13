const express = require('express');
const app = express();
app.use(express.json());
app.use(require('./router/auth'))
const port = process.env.PORT || 8000;



app.listen(port,()=>{
      console.log(`express server connection is stable in port number ${port}`)
})