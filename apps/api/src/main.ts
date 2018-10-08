import * as express from 'express';
import {Ticket} from "@myorg/data";

const app = express();

const tickets: Ticket[] = [
  {
    id: 1,
    title: 'Login page is broken'
  },
  {
    id: 2,
    title: 'Everything is broken!!!'
  }
];

app.get('/api/tickets', (req, res) => {
  res.send(JSON.stringify(tickets));
});

const port = 3333;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
