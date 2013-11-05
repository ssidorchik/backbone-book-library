var app = app || {};

(function() {
	app.LibraryView = Backbone.View.extend({
		el: '#books',
		events: {
			'click #add': 'addBook'
		},

		initialize: function(initialBooks) {
			this.collection = new app.Library(initialBooks);
			this.colleciton.fetch({ reset: true });

			this.render();

			this.listenTo(this.collection, 'add', this.renderBook);
			this.listenTo(this.colleciton, 'reset', this.render);
		},

		render: function() {
			this.collection.each(function(book) {
				this.renderBook(book);
			}, this);
		},

		renderBook: function(book) {
			var bookView = new app.BookView({ model: book });
			this.$el.append(bookView.render().el);
		},

		addBook: function(e) {
			e.preventDefault();

			var formData = {};

			$('#addBook div').children('input').each(function(i, el) {
				if ($(el).val() !== '') {
					formData[el.id] = $(el).val();
				}
			});

			this.collection.add(new app.Book(formData));
		}
	});
})();
