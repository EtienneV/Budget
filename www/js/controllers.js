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

.controller('IntendanceCtrl', function($scope, $ionicPopup, Activite, Intendance) {
        $scope.data = {
            'valeurJour': Intendance.getMontantjour(),
            'valeurChoisie': Intendance.getMontantChoisi(),
            'choice': Intendance.getMethode()
        };


        $scope.popupJour = function () {

            $scope.data.valeurJTemp = Intendance.getMontantjour();

            $ionicPopup.show({
                template: '<input type="number" ng-model="data.valeurJTemp">',
                title: 'Montant par jour et par personne',
                subTitle: 'Environs 5,5 euros/jour/pers',
                scope: $scope,
                buttons: [
                    {text: 'Annuler'},
                    {
                        text: '<b>Confirmer</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if ($scope.data.valeurJTemp == '') {
                                //don't allow the user to close unless he enters anumber
                                e.preventDefault();
                            } else {
                                Intendance.setMontantJour($scope.data.valeurJTemp);
                                $scope.data.valeurJour = Intendance.getMontantjour();
                                Intendance.setMethode('A');
                            }
                        }
                    }
                ]
            });
        };

        $scope.popupChoisi = function () {

            $scope.data.valeurCTemp = Intendance.getMontantChoisi();

            $ionicPopup.show({
                template: '<input type="number" ng-model="data.valeurCTemp">',
                title: 'Choisir un montant',

                scope: $scope,
                buttons: [
                    {text: 'Annuler'},
                    {
                        text: '<b>Confirmer</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if ($scope.data.valeurCTemp == '') {
                                //don't allow the user to close unless he enters anumber
                                e.preventDefault();
                            } else {
                                Intendance.setMontantChoisi($scope.data.valeurCTemp);
                                $scope.data.valeurChoisie = Intendance.getMontantChoisi();
                                Intendance.setMethode('B');
                            }
                        }
                    }
                ]
            });
        };

        $scope.data.calculIntendance = function(){
            return Intendance.getTotal();
        };

})

.controller('ResumeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
