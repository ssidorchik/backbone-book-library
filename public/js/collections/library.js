var app = app || {};

(function() {
	app.Library = Backbone.Collection.extend({
		model: app.Book,
		url: '/api/books'
	});
})();
