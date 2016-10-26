angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage = 1;
  $scope.maxPages = 2;

  $scope.getUsers = function() {
  	var promise = mainService.getUsers($scope.currentPage);
      promise.then(function(response) {
      $scope.users = response.data.data;
      $scope.maxPages = response.data.total_pages;
      console.log('there are' + $scope.maxPages + 'pages'); //they gave us data withe key of data with the users, angular calls it response and data
    });
  };


  $scope.getUsers();



  $scope.prev = function(){
    if($scope.currentPage > 1){
    $scope.currentPage--;
    $scope.getUsers();
  }
  };
  $scope.next = function(){
    if($scope.currentPage < $scope.maxPages){
    $scope.currentPage++;
    $scope.getUsers();
  }
  };
});
