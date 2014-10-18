Template.appBody.rendered = function() {
	$('head title').text(i18n("app.title"));
}

Template.appBody.helpers({
	thisArray: function() {
		return [this];
	}
});
