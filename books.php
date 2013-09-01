<?php
	require_once 'db.php';
	require_once 'bookModel.php';
	connect_db();
	$type = $_SERVER["REQUEST_METHOD"];
	if($type == "GET") {
		$id = $_GET["id"];
		echo $id;
		if($id) {
			//stub
		} else {
			//return all the books
			$query = mysql_query("SELECT * from books");
			if(!$query) {
    			die(mysql_error());
			}
			$i = 0;
			while($row = mysql_fetch_assoc($query)) {
				$book = new bookModel();
				$book->setName($row['name']);
				$book->setPrice($row['price']);
				$book->setAuthor($row['author']);
				$book->setId($row['id']);
				$result[] = $book->getBook();
			}
			echo json_encode($result);
		}
	} else if($type == "POST") {
		$book = new bookModel();
		$data = json_decode(file_get_contents('php://input'));
		$name = $data->name;
		$author = $data->author;
		$price = $data->price;
		$query = mysql_query("INSERT into books (name, author, price) values ('$name', '$author', '$price')");
		if(!$query) {
			die(mysql_error());
		}
	} else if($type == "DELETE") {
		$tokens = explode("/", $_SERVER["REQUEST_URI"]);
		$name = $tokens[sizeof($tokens) - 1];
		echo $name;
		$query = mysql_query("DELETE from books where name = '$name'");
		if(!$query) {
			die(mysql_error());
		}
	} else if($type == "PUT") {

	}
?>