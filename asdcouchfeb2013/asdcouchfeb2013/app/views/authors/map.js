function (doc) {
    if (doc._id.substr(0, 7) === "author:") {
    	emit(doc._id);
    }
};