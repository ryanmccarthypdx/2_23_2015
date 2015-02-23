app.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({
      name: $scope.restaurantName,
      cuisine: $scope.restaurantCuisine,
      price: $scope.restaurantPrice,
      rating: [parseInt($scope.restaurantRating)]
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
    item.rating.push(parseInt(newRating));
  };
  $scope.ratingTotal = function(item) {
    var runningTotal = 0;
    item.rating.forEach(function(ratingScore){
      runningTotal += ratingScore;
    });
    var avg = Math.round(runningTotal/item.rating.length);

    var starDisplay = "";
    for(var i=0;i<5;i++) {
      if(i<avg) {
        starDisplay = starDisplay + "<i class='fa fa-star'></i>";
      } else {
        starDisplay = starDisplay + "<i class='fa fa-star-o'></i>";
      }
    }
    debugger;
    $("#rating-total").html(starDisplay);
  };
});
