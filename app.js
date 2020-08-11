const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('/burgers', (req,res) => {
  res.send('we have juicy cheese burgers');
});
app.get('/pizza/pepperoni', (req, res) => {
  res.send('Your pizza is on the way!')
});
app.get('/pizza/pineapple', (req, res) => {
  res.send('We do not serve that. Never call again');
});
app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
  Base URL: ${req.baseUrl}
  Host: ${req.hostname}
  Path: ${req.path}
  `;
  res.send(responseText);
})

app.get('/queryViewer', (req, res) => {
  console.log(req.query);
  res.end();
});
 app.get('/greetings', (req, res) => {
   const name = req.query.name;
   const race = req.query.race;

   if(!name) {
     return res.status(400).send('Please provide a name');
   }
   if(!race) {
     return res.status(400).send('Please provide a race');
   }
   const greeting =  `Greetings ${name} the ${race}, welcome to our kingdom. `;
   res.send(greeting);
  })

 app.get('/sum', (req, res) => {
   const a = req.query.a;
   const b = req.query.b;
  
   if(!a) {
    return res.status(400).send('Please provide a value');
   }
   if(!b) {
    return res.status(400).send('Please provide a value');
   }
    const numA = parseInt(a);
   const numB = parseInt(b);
   if(Number.NaN(numA)) {
     return res.status(400).send('Please provide a number for a');
   }
   if(Number.NaN(numB)) {
    return res.status(400).send('Please provide a number for b');
  }

   const c = numA + numB;
   const resString = `${numB} + ${numA} = ${c}`;
res.status(200).send(resString);
 })


app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;
//validation
if(!text) {
  return res.status(400).send('text is required');
}
if(!shift) {
  return res.status(400).send('shift is required.')
}
const numberShift = parseFloat(shift);
if(Number.isNaN(numberShift)) {
  return res.status(400).send('shift must be a number.'))
}
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});