function BooksController($scope, $BookService) {
	/*var books = $BookService.query();
		$scope.books = books;
		var i;
		for (i = 0; i< $scope.books.length; i++){
			var book = $scope.books[i];
			book.editingMode = false;
			book.editButtonValue = "Edit";
			console.log(book);
	
	var books = $BookService.query();
	$scope.books = books;
	
	*/
	
	$scope.updateBooks = function(){
		var books = $BookService.query();
		
		
		var i;
		for (i = 0; i< books.length; i++){
			var book = books[i];
			book.editingMode = false;
			book.editButtonValue = "Edit";
			console.log(book);
			
		}
		
		$scope.books = books;
	}
	
	$scope.editBook = function(bookId) {
						var i;

					for(i = 0; i < $scope.books.length; i++){
						var book = $scope.books[i];

						if(book.id != bookId) continue;

						book.name = document.getElementById("edit-title-" + book.id).value;
						book.author = document.getElementById("edit-author-" + book.id).value;
						book.price = document.getElementById("edit-price-" + book.id).value;

						book.editingMode = false;
						book.editButtonValue = "Submit";
						
						book = new BookService();
						book.$save()
						
						break;
					}

	}
		
	$scope.getBookTitle = function(bookId){
	var i;

	for(i = 0; i < $scope.books.length; i++){
		var book = $scope.books[i];

		if(book.id != bookId) continue;
		if(!book.editingMode){
			try{
				document.getElementById("title-" + book.id).innerText = book.name;
			} catch(err){
				return book.name;
			}
		}
			else{
				var element = document.createElement("input");
				element.setAttribute("type", "text");
				element.setAttribute("value", book.name);
				element.setAttribute("id", "edit-title-"+book.id);
				element.setAttribute("style", "width:200px");

				document.getElementById("title-" + book.id).innerText = "";
				document.getElementById("title-" + book.id).appendChild(element);
			}
		break;
		}
	}
	
	$scope.getBookAuthor = function(bookId) {
		var i;
		for(i = 0; i < $scope.books.length; i++){
			var book = $scope.books[i];

			if(book.id != bookId) continue;
			if(!book.editingMode){
				try{
					document.getElementById("author-" + book.id).innerText = book.author;
				} catch(err){
					return book.author;
				}
			}
			else{
				var element = document.createElement("input");
				element.setAttribute("type", "text");
				element.setAttribute("value", book.author);
				element.setAttribute("id", "edit-author-"+book.id);
				element.setAttribute("style", "width:200px");

				document.getElementById("author-" + book.id).innerText = "";
				document.getElementById("author-" + book.id).appendChild(element);
			}
			break;
		}	
	}
	
	$scope.getBookPrice = function(bookId){
					var i;

					for(i = 0; i < $scope.books.length; i++){
						var book = $scope.books[i];

						if(book.id != bookId) continue;
						if(!book.editingMode){
							try{
								document.getElementById("price-" + book.id).innerText = book.price;
							} catch(err){
								return book.price;
							}
						}
						else{
							var element = document.createElement("input");
							element.setAttribute("type", "text");
							element.setAttribute("value", book.price);
							element.setAttribute("id", "edit-price-"+book.id);
							element.setAttribute("style", "width:200px");

							document.getElementById("price-" + book.id).innerText = "";
							document.getElementById("price-" + book.id).appendChild(element);
						}

						break;
					}
				}
	
	$scope.getEditButtonFunction = function(bookId){
				var i;

					for(i = 0; i < $scope.books.length; i++){
						var book = $scope.books[i];

						if(book.id != bookId) continue;
						if(!book.editingMode){
							$scope.editingModeBook(bookId);
						}
						else $scope.editBook(bookId);

						break;
					}
	}
	
	$scope.editingModeBook = function(bookId){
					var i;

					for(i = 0; i < $scope.books.length; i++){
						var book = $scope.books[i];

						if(book.id != bookId) continue;
						book.editingMode = true;
						book.editButtonValue = "Submit";

						break;
					}
	}
	
	$scope.editBook = function(bookId) {
						var i;

					for(i = 0; i < $scope.books.length; i++){
						var book = $scope.books[i];

						if(book.id != bookId) continue;

						book.name = document.getElementById("edit-title-" + book.id).value;
						book.author = document.getElementById("edit-author-" + book.id).value;
						book.price = document.getElementById("edit-price-" + book.id).value;

						book.editingMode = false;
						book.editButtonValue = "Edit";

						break;
					}

	}
	
	$scope.addBook = function(){
					var newBook = new $BookService();

					//newBook.id = bookIdCounter;
					//bookIdCounter++;
					newBook.name = document.getElementById("add-title").value;
					newBook.author = document.getElementById("add-author").value;
					newBook.price = document.getElementById("add-price").value;
					newBook.editingMode = false;
					newBook.editButtonValue = "Edit";
					
					newBook.$save();
					$scope.updateBooks()
					//$scope.books.push(newBook);	
	}
	
	$scope.deleteBook = function(bookId){
		var i;
		for(i = 0; i < $scope.books.length; i++){
			var book = $scope.books[i];

			if(book.id != bookId) continue;
			var bookToBeDeleted = new $BookService();
			var data = {name: book.name};
			bookToBeDeleted.name = data.name;
			bookToBeDeleted.$delete(data);
			$scope.updateBooks()
			break;
		}
	}
	
	//adding a new book
	// var newBook = new $BookService();
	// newBook.name = "test";
	// newBook.author = "hah";
	// newBook.price = "23";
	// newBook.$save();

	//deleting a book
	// var bookToBeDeleted = new $BookService();
	// var data = {name: "harry"};
	// bookToBeDeleted.$delete(data);
	 
	$scope.updateBooks();
	//console.log(books);
}
BooksController.$inject = ['$scope', 'BookService'];