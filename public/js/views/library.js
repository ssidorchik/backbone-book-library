var app = app || {};

(function() {
	app.LibraryView = Backbone.View.extend({
		el: '#books',

		initialize: function(initialBooks) {
			this.collection = new app.Library(initialBooks);
			this.render();
		},

		render: function() {
			this.collection.each(function(book) {
				this.renderBook(book);
			}, this);
		},

		renderBook: function(book) {
			var bookView = new app.BookView({ model: book });
			this.$el.append(bookView.render().el);
		}
	});
})();
