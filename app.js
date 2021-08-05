const express = require('express');
const app = express();
const port = 4000;

app.get('/add/', (req, res) => {
  const query = req.query;
  const c = Number(query.a) + Number(query.b);
  res.send(
    `<h1>
      ${query.a} + ${query.b} = ${c}
    </h1>`
  );
});

app.get('/add/:a/:b', (req, res) => {
  const params = req.params;
  const c = Number(params.a) + Number(params.b);
  res.send(
    `<h1>
        ${params.a} + ${params.b} = ${c}
      </h1>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
