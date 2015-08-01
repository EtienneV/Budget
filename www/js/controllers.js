angular.module('budget.controllers', [])

.controller('InfosCtrl', function($scope, Activite) {

        $scope.activite = Activite;

        $scope.data = {
            'nom' : '',
            'duree' : '',
            'nb_jeunes' : '',
            'nb_chefs' : '',
            'notes' : ''
        };

        $scope.data.rafraichir = function(){
            $scope.activite.setNom($scope.data.nom);
            $scope.activite.setDuree($scope.data.duree);
            $scope.activite.setNbJeunes($scope.data.nb_jeunes);
            $scope.activite.setNbChefs($scope.data.nb_chefs);
        };

        $scope.data.getNom = function(){
            if($scope.activite.getNom() == '') return 'Nouvelle activite';
            else return $scope.activite.getNom();
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
