var app = angular.module('autoApp');

app.controller('loginController', function($scope, $window, $firebaseArray, $firebaseObject, $firebaseAuth, $timeout, $location) {
	$scope.test = 'testing';

var fbAuth = $firebaseAuth(new Firebase("https://autoserviceapp.firebaseio.com/"));


// we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
var isNewUser = true;

var ref = new Firebase("https://autoserviceapp.firebaseio.com/users");
ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into Firebase so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});

// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'twitter':
       return authData.twitter.displayName;
     case 'facebook':
       return authData.facebook.displayName;
  }
}

  moment = $window.moment


$scope.fbAuth = fbAuth; 

        $scope.logIn = function(email, password) {
          fbAuth.$authWithPassword({
            email: email,
            password: password
          }).then(function(authData) {
            console.log('authData', authData);
            $location.path('/admin')
          }, function(error) {
            alert("Incorrect Username or Password")
            console.log('error', error);
          })
          
        };

  $scope.register = function(email, password) {
 
 console.log(fbAuth)
  	
  	fbAuth.$createUser({
  		email: email,
  		password: password
  	}).then(function(authData) {
  		return fbAuth.$authWithPassword({
  			email: email,
  			password: password
  		});
    }).then(function(authData){
  			var userEmail = email,
  			 uid = authData.uid,
  			 user = $firebaseObject(new Firebase("https://autoserviceapp.firebaseio.com/users" + uid));

  			console.log("authData", authData);

              $timeout(function() {
              user.email = userEmail;
              user.uid = uid;
              user.created = moment().format();
              user.$save().then(function(success) {
                alert("Registered with " + user.email)
                console.log('success', success);
              }, function(error) {
                console.log('error', error);
              });   
            });
  		})
  	

  }



})