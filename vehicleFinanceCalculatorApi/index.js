const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors());


const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



app.get('/', (req, res) => {
res.send({message:'Hello, Devconf!'});
});

// routes here
const vehicleQuoteRoutes = require('./routes/vehicle-quote-routes');

app.use('/vehicle-quote', vehicleQuoteRoutes);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vehicle Quote API',
      version: '1.0.0',
    },
  },
  apis: ['routes/vehicle-quote-routes.js'], // Specify the routes file(s) that contain the OpenAPI JSDoc
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});