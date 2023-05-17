const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
res.send({message:'Hello, Devconf!'});
});

// routes here 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});