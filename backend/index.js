import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {

   res.send('Server Backend Express Berjalan!');

});

app.listen(PORT, () => {

   console.log(`[Server Backend] connected http://localhost:${PORT}`);

});