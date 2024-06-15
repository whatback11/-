const express = require('express');
const app = express();
const port = 3000;

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

// '/users' 경로에 대한 GET 요청 처리
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ]);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
