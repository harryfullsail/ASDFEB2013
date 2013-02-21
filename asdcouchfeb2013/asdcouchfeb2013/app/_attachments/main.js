$(document).ready(function() {
	$.ajax({
		"url": "_view/books",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, book){
				var  lists   = book.value.lists;
				var title    = book.value.title;
				var author   = book.value.author;
				var titles   = book.value.titles;
				var date     = book.value.date;
				var genre    = book.value.genre;
				var subject  = book.value.subject;
				var rate 	 = book.value.rate;
				var comments = book.value.comments;
				$('#booklist').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(title)
					)
				);
			});
			$('#booklist').listview('refresh');
		}
	});
});