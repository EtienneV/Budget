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

.controller('BudgetCtrl', function($scope, Activite, Budget) {

        $scope.data = {};

        $scope.data.getNom = function(){
            if(Activite.getNom() == '') return 'Nouvelle activite';
            else return Activite.getNom();
        };

        $scope.budget = Budget;
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
