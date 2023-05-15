const express = require('express');
const app = express();
const comics = require('./comics_data.json');

app.get('/comics', (req, res) => {
  res.json(comics);
});

app.get('/comics/title', (req, res) => {
  const title = comics.map(comic => comic.title);
  res.json(title);
});

app.get('/comics/chapterNumber', (req, res) => {
  const chapterNumber = comics.map(comic => comic.chapterNumber);
  res.json(chapterNumber);
});

app.get('/comics/genres', (req, res) => {
  const genres = comics.map(comic => comic.genres);
  res.json(genres);
});

app.get('/comics/languages', (req, res) => {
  const languages = comics.map(comic => comic.languages);
  res.json(languages);
});

app.get('/comics/status', (req, res) => {
  const status = comics.map(comic => comic.status);
  res.json(status);
});

app.get('/comics/numberOfViews', (req, res) => {
  const numberOfViews = comics.map(comic => comic.numberOfViews);
  res.json(numberOfViews);
});
app.get('/comics/numberOfReviews', (req, res) => {
  const numberOfReviews = comics.map(comic => comic.numberOfReviews);
  res.json(numberOfReviews);
});
app.get('/comics/rating', (req, res) => {
  const rating = comics.map(comic => comic.rating);
  res.json(rating);
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
