const express = require("express");
const fs = require("fs");
const translate = require('translate-google')
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

var languages = ['cs', 'fr', 'de', 'it', 'no', 'pl', 'es', 'sv', 'tr']
var languagesFull = [ "Czech", "French", "German", "Italian", "Norwegian", "Polish", "Spanish", "Swedish", "Turkish"]

app.use(express.static(path.resolve(__dirname, '../client/build')));

var data = fs.readFileSync(path.join('server','data', 'wordle-answers-alphabetical.txt'), 'utf8');

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get("/word", async (req, res) => {

  var words = data.toString().split("\n");
  var indexRan = Math.floor(Math.random()*languages.length)
	var word = words[Math.floor(Math.random()*words.length)];
	var language = languages[indexRan]
  console.log(indexRan)
  // var answer = languagesFull[indexRan]
  
	var translated = await translate(word, {to: language})

  res.json({"word": word, "language": language, "translated": translated, "answer": languagesFull[indexRan] })


});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
