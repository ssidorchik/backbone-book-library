var app = app || {};

(function() {
	app.Book = Backbone.Model.extend({
		idAttribute: "_id",
		defaults: {
			coverImage: 'img/placeholder.png',
			title: 'No title',
			author: 'Unknown',
			releaseDate: 'Unknown',
			keywords: 'None'
		}
	});
})();
