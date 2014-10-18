Accounts.onCreateUser(function(options, user) {
	if (options.profile) user.profile = options.profile;
	_.each(user.services, function(srv) {
		if (srv.username && !user.profile.name) user.profile.name = srv.username;
	});
	return user;
});