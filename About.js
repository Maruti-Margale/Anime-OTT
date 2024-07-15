
MyApp.controller('AboutController', function ($scope, $http) {
    // Fetch data from the JSON file 
    $http({
        method: "GET",
        url: "model/JSON/About.json"
    }).then(function (response) {
        // It Extracts the "aboutanime" data from the response and assign it to the $scope variable.
        $scope.aboutanime = response.data.aboutanime;
    });
  });
  