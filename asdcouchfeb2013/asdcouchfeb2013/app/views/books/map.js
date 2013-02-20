function (doc) {
    if (doc._id.substr(0, 5) === "book:") {
    		emit(doc._id.substr(5), {
    			"lists": doc.lists,
       		    "author": doc.author,
       		    "title": doc.title, 
        		"date": doc.date,
        		"genre": doc.genre,
        		"age": doc.age,
        		"subject": doc.subject
    	});
    }
};