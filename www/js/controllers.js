angular.module('budget.controllers', [])

.controller('InfosCtrl', function($scope) {
    $scope.nb_jeunes = 4;
    $scope.nb_chefs = 0;

    $scope.total = function (){
        return $scope.nb_jeunes + $scope.nb_chefs;
    };
})

.controller('BudgetCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
/*
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
*/
.controller('ResumeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
