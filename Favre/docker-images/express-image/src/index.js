var Chance = require('chance');
var chance = new Chance();
// console.log("Salut "+ chance.name());

var express = require('express');
var app = express();

app.get('/2020',function(req, res){
        res.send(generateCool2020Event());
});

app.get('/jeej',function(req, res){
        res.send("fuuf");
});

app.get('/',function(req, res){
	res.send("hello world");
});

app.listen(3000, function() {
	console.log('fleteupeu on port 3000');
});

const eventArray2020 = [
	"More than 20% of Australia's forest is lost to forest fires.",
	"World War III is barely averted after US aggression.",
	"Africa is plagued by unprecedented locust swarms.",
	"The UK withdraws from the European Union.",
	"The 2020 Tokyo Olympics are postponed due to COVID-19.",
	"COVID-19 is declared a global pandemic. Hundreds of thousands die.",
	"Schengen borders are closed, halting European travel.",
	"Global public air traffic comes to a halt.",
	"Mecca sits eerily empty, despite Ramadan.",
	"Pentagon releases UFO footage.",
	"White people riot to get haircuts.",
	"Eurovision Song Contest is cancelled.",
	"Microsoft breaks Windows via update, again.",
	"Locusts now sweep India and Pakistan.",
	"The murder of George Floyd sparks riots throughout the US.",
	"Hong Kong riots as it's people rights are taken away",
	"Trimp goes to war agains Twitter",
	"This is the most overcharged semester of the school",
	"A friend got the COVID-19 and had to be put in artificial coma (he's fine now)",

]

function generateCool2020Event(){
	var eventNb = chance.integer({
		min: 0,
		max: eventArray2020.length-1
	});

	var year=[];
	year.push({
		Year:2020,
		Nemesis: chance.name(),
		luckyNumber: eventNb,
		cynismLevel: "pretty high my guy",
		coolEvent: eventArray2020[eventNb],
	})

	return year;

}
