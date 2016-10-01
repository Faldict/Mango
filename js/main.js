function init() {
	global.$(global.window.document).ready( function () {
		var textEditor = global.$('#editor');
		textEditor.bind('input propertychange', function () {
			reload();
		})
	})
}