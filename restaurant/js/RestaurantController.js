app.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({
      name: $scope.restaurantName,
      cuisine: $scope.restaurantCuisine,
      price: $scope.restaurantPrice,
      rating: $scope.restaurantRating
    });
    $scope.restaurantName = null;
    $scope.restaurantCuisine = null;
    $scope.restaurantPrice = null;
    $scope.restaurantRating = null;
  };
});
