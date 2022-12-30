const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id/get_last_roll', (req, res) => {
  const response = {
    status: 200,
    data: {
      content: {
        company: 'familitex',
        roll_id: 1,
        occurences: 23,
        length: 44199,
        datetime: '2022-29-12T05:58:32.34521',
        fabric_name: 'single jersey',
        ckm: 'familitex-1',
        fabric_id: 4,
        porder: 'LMC_123',
        roll_no: 123,
        dashboard_url: 'google.com',
        installationId: req.params.id,
      },
    },
  };
  res.send(response);
});
app.get('/:id/get_state', (req, res) => {
  const response = {
    data: {
      code: 200,
      msg: 'OK',
      content: {
        machine_number: 23,
      },
    },
  };
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
