function (doc) {
    if (doc._id.substr(0, 7) === "author:") {
    	emit(doc._id.substr(7), {
    		"author":     doc.author,
    		"biography":  doc.biography,
    		"booktitles": doc.booktitles
    	});
    }
};