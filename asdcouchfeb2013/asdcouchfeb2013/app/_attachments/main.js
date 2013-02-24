$('#home').live("pageshow", function() {
	$.couch.db("asdbookapp").view("app/books", {
		success: function(data) {
			//console.log(data);
			$('#booklist').empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$('#booklist').append( 
					$('<li>').append(
						$('<a>')
							.attr("href", "book.html")
							.text(item.title)
					)		
				);	
			});
			$('#booklist').listview('refresh');	
		}
	});
});