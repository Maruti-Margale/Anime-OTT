// Create an AngularJS module named 'MyApp' and include 'ngRoute' as a dependency
var MyApp = angular.module("MyApp", ['ngRoute']);

// Configure the route provider to define different routes and their controllers
MyApp.config(function ($routeProvider) {
    $routeProvider

        // Define the route for the home page
        .when("/", {
            templateUrl: 'views/HTML/home.html', // Load the home.html template
            controller: 'MainController' // Use 'MainController' as the controller for this route
        })

        // Define the route for the about page
        .when("/about", {
            templateUrl: 'views/HTML/About.html', // Load the About.html template
            controller: 'AboutController' // Use 'AboutController' as the controller for this route
        })

        // Define the route for the contact page
        .when("/contact", {
            templateUrl: 'views/HTML/Contatcs.html', // Load the Contacts.html template
            controller: 'ContactController' // Use 'ContactController' as the controller for this route
        })

        // Define the route for the subscription page
        .when("/Subscription", {
            templateUrl: 'views/HTML/Plan.html', // Load the Plan.html template
            controller: 'SubscriptionController' // Use 'SubscriptionController' as the controller for this route
        })
        
        // If none of the above routes match, redirect to the home page ('/')
        .otherwise({
            redirectTo: '/' // Redirect to the home page by default
        });
});
