// Create an AngularJS module named 'loginApp'
var app = angular.module("loginApp", []);

// Define a controller named 'loginController'
app.controller("loginController", function ($scope, $http, $location, $window) {
  // Initialize the user object to hold username and password
  $scope.user = {
    username: "",
    password: "",
  };

  // Fetch user data from a JSON file using an HTTP GET request
  $http.get("model/JSON/login.json").then(function (response) {
    $scope.users = response.data;
  });

  // Function to handle the login process
  $scope.login = function () {
    // Check if there is a user with matching username and password
    var successfulLogin = $scope.users.find(function (user) {
      return (
        user.username === $scope.user.username &&
        user.password === $scope.user.password
      );
    });

    if (successfulLogin) {
      // If login is successful, construct a new URL and redirect to it
      $scope.newpath =
        $location.protocol() +
        "://" +
        $location.host() +
        ":" +
        $location.port() +
        "/" +
        "index.html";
      $window.location.href = $scope.newpath;
    } else {
      // If login fails, display an error message
      $scope.message = true;
    }
  };
});
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
