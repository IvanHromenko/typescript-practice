import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(req.method, req.url);
  res.json({message: 'Hello, TypeScript with Express!'});
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});