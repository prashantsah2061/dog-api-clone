const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('public'));

const breeds = {
  labrador: ['labrador1.png', 'labrador2.png'],
  beagle: ['beagle1.png', 'beagle2.png'],
  pug: ['pug1.png', 'pug2.png'],
  germanshepherd: ['german1.png', 'german2.png']
};

const randInt = n => Math.floor(n * Math.random());
const getRandomItemFromArray = arr => arr[randInt(arr.length)];


app.get('/breeds', (req, res) => {
  res.json(Object.keys(breeds));
});


app.get('/image/:breed', (req, res) => {
  const breed = req.params.breed.toLowerCase();
  if (breeds[breed]) {
    const randomImage = getRandomItemFromArray(breeds[breed]);
    res.json({ image: `/img/${randomImage}` });
  } else {
    res.status(404).json({ error: 'Breed not found' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
