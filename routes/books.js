module.exports = function(app, db) {
	app.get('/api/books', function(req, res) {
		return db.BookModel.find(function(err, books) {
			if (!err) {
				return res.send(books);
			} else {
				return console.log(err);
			}
		});
	});

	app.post('/api/books', function(req, res) {
		var book = new db.BookModel({
			title: req.body.title,
			author: req.body.author,
			releaseDate: req.body.releaseDate,
			keywords: req.body.keywords
		});
		book.save(function(err) {
			if(!err) {
				return console.log('created');
			} else {
				return console.log(err);
			} });
			return res.send(book);
	});

	app.get('/api/books/:id', function(req, res) {
		return db.BookModel.findById(req.params.id, function(err, book) {
			if(!err) {
				return res.send(book);
			} else {
				return console.log(err);
			}
		});
	});

	app.put('/api/books/:id', function(req, res) {
		console.log( 'Updating book ' + req.body.title );
		return db.BookModel.findById(req.params.id, function(err, book) {
			book.title = req.body.title;
			book.author = req.body.author;
			book.releaseDate = req.body.releaseDate;
			book.keywords = req.body.keywords;

			return book.save(function(err) {
				if(!err) {
					console.log('book updated');
				} else {
					console.log(err);
				}

				return res.send(book);
			});
		});
	});

	app.delete('/api/books/:id', function(req, res) {
		console.log('Deleting book with id: ' + req.params.id);

		return db.BookModel.findById(req.params.id, function(err, book) {
			return book.remove(function(err) {
				if(!err) {
					console.log('Book removed'); 
					return response.send('');
				} else {
					console.log(err);
				}
			});
		});
	});
};
