
MyApp.controller("ContactController", function($scope) {
    $scope.title = "Contact Us";
  
    $scope.checkSubject = function() {
      if (!$scope.info2 || $scope.info2.trim() === '') {
        return false; // Invalid
      }
      return true; // Valid
    };
  
    $scope.displayStatement = function() {
      if ($scope.checkSubject()) {
        $scope.displayedStatement = 'Your Response is Recorded';
      } else {
        $scope.displayedStatement = 'Please fill out the Subject field.';
      }
    };
  
    $scope.reset = function() {
      $scope.info = '';
      $scope.info1 = '';
      $scope.info2 = '';
      $scope.info3 = '';
      $scope.displayedStatement = ''; // Reset displayed statement
    };
  });