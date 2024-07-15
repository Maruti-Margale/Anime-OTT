// Define the 'SubscriptionController' to handle the Subscription page
MyApp.controller('SubscriptionController', function($scope){
   
    // Define an array of subscription packages with their details
    $scope.subscriptionPackages = [
      {
        subscription: 'Basic',
        price: 'Rs 200/month',
        features: ['Access to basic content', 'Standard quality','Only one user use this plan']
      },
      {
        subscription: 'Standard',
        price: 'Rs 350/month',
        features: ['Access to standard content', 'HD quality','1+1 Two user use this plan']
      },
      {
        subscription: 'Premium',
        price: 'Rs 600/month',
        features: ['Access to premium content', 'Ultra HD quality','multiple user use this plan']
      }
    ];
    $scope.pack=false;
    $scope.submitMessage=false;
    $scope.packageForm=false;
    $scope.b=false;
    $scope.s=false;
    $scope.p=false;
    // Function to select a subscription package
    $scope.selectPackage = function( package) {
      $scope.pack =true;
        $scope.packageForm =true;
        $scope.submitMessage=false;
        if( package.subscription==='Basic'){
          $scope.b=true;
          $scope.s=false;
          $scope.p=false;
        }else if( package.subscription==='Standard'){
          $scope.s=true;
          $scope.b=false;
          $scope.p=false;
        }else{
          $scope.p=true;
          $scope.s=false;
          $scope.b=false;
        }
    };
    $scope.submitPack=function(){
      $scope.packageForm=false;
      $scope.submitMessage=true;
    }
    $scope.cancelPack=function(){
      $scope.packageForm=false;
      $scope.submitMessage=false;
    }
    
  });
  