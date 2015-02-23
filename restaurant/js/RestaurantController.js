app.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({
      name: $scope.restaurantName,
      cuisine: $scope.restaurantCuisine,
      price: $scope.restaurantPrice,
      rating: [$scope.restaurantRating]
    });
    $scope.restaurantName = null;
    $scope.restaurantCuisine = null;
    $scope.restaurantPrice = "";
    // $scope.restaurantRating = null;
  };
  $scope.deleteRestaurant = function(item) {
    $scope.restaurants.splice($scope.restaurants.indexOf(item), 1);
  };
  $scope.reRateRestaurant = function(item, newRating) {
    $scope.restaurants[$scope.restaurants.indexOf(item)].rating.push(newRating);
  };
});
