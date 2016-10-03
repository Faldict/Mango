const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

var menu = new Menu();
console.log("new Menu");
menu.append(new MenuItem({
	label: 'new',
	click: function() {
		loadText("");
	}
}));
menu.append(new MenuItem({
	label: 'save',
	click: function() {
		console.log("open modal");
		$('#saveModal').modal();
		chooseFile("#saveFileDialog", function(filename) {
			console.log("save file");
			var fs=require('fs');
			var textEditor = global.$('#editor');
			fs.writeFile(filename, textEditor.val(), function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log('The file was saved!');
				}
			});
		});
	}
}));
menu.append(new MenuItem({
	label: 'open',
	click: function () {
		$('#openModal').modal();
		chooseFile("#openFileDialog", function(filename){
			loadFile(filename);
		});
	}
}))
menu.append(new MenuItem({
	label: 'exit',
	click: function() {

	}
}))

window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	menu.popup(remote.getCurrentWindow());
}, false);
