
MyApp.controller('MainController', function ($scope, $http,$timeout,$window) {
    
 // Initialize scope variables
    $scope.searchText = '';
    
 // Function to toggle the display of image description
    $scope.viewDescription = function (image) {
        image.showDescription = !image.showDescription;
      };
  
      // Initialize the showDescription property for all images
      angular.forEach($scope.items, function (item) { // angular.forEach is used to iterate through each item and image within array
        angular.forEach(item.images, function (image) {
          image.showDescription = false;
        });
      });
      const sliderContainer = document.querySelector('.slider-container');
      const slides = document.querySelectorAll('.slide');
      const prevButton = document.querySelector('.prev-button');
      const nextButton = document.querySelector('.next-button');
  
      let slideIndex = 0;
  
      function slide() {
        slideIndex++;
        if (slideIndex === slides.length) {
          slideIndex = 0;
        }
        sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      }
  
      setInterval(slide, 25000); // Change slide every 7 seconds
  
      // Event listener for previous button
      prevButton.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
        sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      });
  
      // Event listener for next button
      nextButton.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex === slides.length) {
          slideIndex = 0;
        }
        sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
      });
      // Success callback for HTTP request
    var successCallback = function (response) {
        $scope.items = response.data;
    };

     // Error callback for HTTP request
    var errorCallback = function (reason) {
        $scope.errorMessage = "Error: " + reason.status + " - " + reason.statusText;
    };

     // Make an HTTP GET request to fetch data from "launch.json"
    $http({
        method: "GET",
        url: "model/JSON/launch.json"
    }).then(successCallback, errorCallback);

      // Set initial loading state to true
    $scope.isLoading = true;

    // Simulate loading time with a timeout
    $timeout(function () {
        $scope.isLoading = false;
    }, 7000); // Set the time in milliseconds

     // Initialize the scroll state
    $scope.isScrolled = false;

  // Bind a scroll event to update the scroll state
            angular.element($window).bind('scroll', function () {
                $scope.$apply(function () {
                    $scope.isScrolled = ($window.scrollY >= 100);
        
            });
        });
         
         // Profile section
        $scope.showProfile =false;
        $scope.userProfile = {
          name: 'Gojo Satoru',
          id: 567,
          picture: 'images/profile/637441_avatar_female_lady_portrait_profile_icon.png'
    };

      // Function to toggle the display of the user profile
    $scope.profile=function(){
        $scope.showProfile = !$scope.showProfile;
     }
 }); 