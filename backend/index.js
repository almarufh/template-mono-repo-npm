import express from 'express';
import swagerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import routers from './src/routers/index.js';

const PORT = process.env.PORT;
const app = express();

// swagger
const options = {
   definition: {
      openapi: '3.0.0',
      info: {
         title: 'KeyNotes',
         version: '1.0.0',
      }
   },
   apis: ['./src/routers/*_routers.js'],
}
const openapi = swaggerJSDoc(options)


// REST API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);

app.use('/docs', swagerUi.serve, swagerUi.setup(openapi))

app.listen(PORT, () => {

   console.log(`[Server Backend] connected http://localhost:${PORT}`);

});