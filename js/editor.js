function reload() {
	var marked = require("marked");
	marked.setOptions({
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false
	});
	var resultDiv = global.$('.md_result');
	var textEditor = global.$('#editor');
	var text = textEditor.val();
	resultDiv.html(marked(text));
}

function loadText(text) {
	var textEditor = global.$('#editor');
	textEditor.val(text);
	reload();
}

function loadFile(file) {
	var fs = require('fs');
	fs.readFile(file, 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}
		loadText(data);
	});
}

function chooseFile(name, callback) {
	var chooser = global.$(name);
	chooser.change(function(evt) {
		callback(global.$(this).val());
	});

	chooser.trigger('click');
}

