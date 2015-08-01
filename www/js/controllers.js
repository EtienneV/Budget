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

.controller('IntendanceCtrl', function($scope, $ionicPopup) {
        $scope.data = {
            'valeurJour': 6,
            'valeurChoisie': 300
        };


        $scope.popupJour = function () {

            var valeur = 12;

            $scope.data.valeurJour = 75;

            $ionicPopup.show({
                template: '<input type="number" ng-model="valeur">',
                title: 'Montant par jour et par personne',
                subTitle: 'Environs 5,5 euros/jour/pers',
                scope: $scope,
                buttons: [
                    {text: 'Annuler'},
                    {
                        text: '<b>Confirmer</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.data.valeurJour) {
                                //don't allow the user to close unless he enters anumber
                                e.preventDefault();
                            } else {
                                $scope.data.valeurJour = valeur;
                            }
                        }
                    }
                ]
            });
        };
})

.controller('ResumeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
