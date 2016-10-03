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
}

function saveFile() {
	var filename = $('#saveFileName').val();
	if (filename  == null) {
		alert("input filename");
	} else {
		var fs = require("fs");
		var textEditor = global.$('#editor');
		fs.writeFile(filename, textEditor.val(), function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log('The file was saved!');
			}
		});
	}
}