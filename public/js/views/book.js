var app = app || {};

(function() {
	app.BookView = Backbone.View.extend({
		className: 'bookContainer',
		template: _.template($('#bookTemplate').html()),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
})();
