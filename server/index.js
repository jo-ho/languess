const express = require("express");
const fs = require("fs");
const translate = require('translate-google')
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

var languages = ['cs', 'fr', 'de', 'it', 'no', 'pl', 'es', 'sv', 'tr']

app.use(express.static(__dirname + '../client/public'));

var data = fs.readFileSync(path.join('server','data', 'wordle-answers-alphabetical.txt'), 'utf8');

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/word", async (req, res) => {

  var words = data.toString().split("\n");

	var word = words[Math.floor(Math.random()*words.length)];
	var language = languages[Math.floor(Math.random()*languages.length)]

	var translated = await translate(word, {to: language})

  res.json({"word": word, "language": language, "translated": translated})


});
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
