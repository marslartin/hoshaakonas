window.addEventListener("load", function() {
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#e8e8e8",
				"text": "#1A1919"
			},
			"button": {
				"background": "transparent",
				"text": "#1A1919",
				"border": "#1A1919"
			}
		},
		"content": {
			"message": "Denne siden bruker informasjonskapsler for å optimalisere brukeropplevelsen.",
			"dismiss": "⤬",
			"link": "Personvernerklæring",
			"href": "/personvern.html"
		}
	})
});