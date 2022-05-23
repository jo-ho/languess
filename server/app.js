const express = require("express");
const fs = require("fs");
const translate = require('translate-google')

const PORT = process.env.PORT || 3001;

const app = express();

var languages = ['cs', 'fr', 'de', 'it', 'no', 'pl', 'es', 'sv', 'tr']

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", async (req, res) => {
	res.send("Hello World");
	var data = fs.readFileSync('wordle-answers-alphabetical.txt', 'utf8');
    var words = data.toString().split("\n"); 
	
	var word = words[Math.floor(Math.random()*words.length)];
	var language = languages[Math.floor(Math.random()*languages.length)]

	var translated = await translate(word, {to: languages[Math.floor(Math.random()*languages.length)]})
	
	console.log(word, language, translated)


});