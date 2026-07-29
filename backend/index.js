import express from 'express';
import routers from './src/routers/index.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded());
app.use(routers);


app.listen(PORT, () => {

   console.log(`[Server Backend] connected http://localhost:${PORT}`);

});