libraryApp.factory('auth', function($q,identity,$http, UsersResource){
	return{
		login: function(user) {
			var deferred = $q.defer();

			$http.post('/login', user).success(function(response) {
				if (response.success) {
					var user = new UsersResource();
					angular.extend(user, response.user);
					identity.currentUser = user;
					deferred.resolve(true);

				}
				else {
					deferred.resolve(false);

				}
		});

		return deferred.promise;

		},

		logout: function() {
			var deferred = $q.defer();

			$http.post('/logout').success(function() {
					identity.currentUser = undefined;
					deferred.resolve();
			
			})
			return deferred.promise;
		},
		isAuthorizedForRole: function(role) {
			if (identity.isAuthorizedForRole(role)) {
					return true;
			}
			else {
					return $q.reject("not authorized");
			}
		}
	};
})