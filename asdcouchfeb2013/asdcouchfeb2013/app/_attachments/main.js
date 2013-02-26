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
							.attr("href", "book.html?book=" + item.author)
							.text(item.title)
					)		
				);	
			});
			$('#booklist').listview('refresh');	
		}
	});
});

var urlVars = function() {
	var urlData = $($.mobile.activePage).data('url');
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	return urlValues;
};

$('#home1').live("pageshow", function() {
	var book = urlVars()["book"];
	//console.log(book);
	$.couch.db("asdbookapp").view("app/bookInfo", {
		key: "book:1" + book
	});
});