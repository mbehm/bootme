Template.appBody.rendered = function() {
	$('head title').text(i18n("app.title"));
}

Template.appBody.helpers({
	thisArray: function() {
		return [this];
	}
});

UI.registerHelper('runningTasks', function() {
	if (!Meteor.userId()) return null;
	return Tasks.find({user_id: Meteor.userId(), running: true});
});