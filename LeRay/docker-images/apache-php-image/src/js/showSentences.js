$(function() {
	console.log("Loading sentences");

	function loadSentence() {
		$.getJSON( "/api/students/", function(fact) {
			console.log(fact[0]["coolEvent"]);
			var message = "Nobody is here but there is a message !";
			if ( fact.length > 0 ) {
				message = fact[0]["coolEvent"];
			}
			$("#change").text(message);
		});
	};
	setInterval(loadSentence, 5000);
});