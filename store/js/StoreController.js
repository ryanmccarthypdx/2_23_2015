app.controller('ProductsCtrl', function ProductsCtrl($scope) {
  $scope.products = [];
  $scope.addProduct = function() {
    $scope.products.push({
      name: $scope.productName
    });
    $scope.productName = null;
  };
  $scope.deleteProduct = function(item) {
    $scope.products.splice($scope.products.indexOf(item), 1);
  };
  $scope.cart = [];
  $scope.addToCart = function(productSelected) {
    $scope.cart.push({
      name: $scope.productSelected
    })
    $scope.productSelected = null;
    debugger;
  }
});
