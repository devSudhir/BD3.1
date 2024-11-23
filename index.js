const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

const array = [1, 2, 3, 4, 5];
const strings = ['hello', 'world', 'javascript', 'node'];
const numbersArray = [10, 2, 3, 40, 5];

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

function addToArray(array, number) {
  array.push(number);
  return array;
}

app.get('/numbers/add', (req, res) => {
  res.json(addToArray(array, 6));
});

function addStringToArray(stringArray, string) {
  stringArray.push(string);
  return stringArray;
}
app.get('/strings/add', (req, res) => {
  res.json(addStringToArray(strings, 'express'));
});

function sumOfArray(numberArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  res.json({ sum: sumOfArray(numbersArray) });
});

function findingMaximum(numbersArray) {
  let maximum = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > maximum) {
      maximum = numbersArray[i];
    }
  }
  return maximum;
}

app.get('/numbers/max', (req, res) => {
  res.json({ max: findingMaximum(numbersArray) });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
