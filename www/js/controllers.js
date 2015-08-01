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

.controller('HebergementCtrl', function($scope, $ionicPopup, Activite, Hebergement) {
    $scope.data = {
        'valeurJour': Hebergement.getMontantjour(),
        'valeurChoisie': Hebergement.getMontantChoisi(),
        'choice': Hebergement.getMethode()
    };

    $scope.popupJour = function () {
        $scope.data.valeurJTemp = Hebergement.getMontantjour();
        $ionicPopup.show({
            template: '<input type="number" ng-model="data.valeurJTemp">',
            title: 'Montant par jour et par personne',
            subTitle: 'Environs 1 euros/jour/pers',
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
                            Hebergement.setMontantJour($scope.data.valeurJTemp);
                            $scope.data.valeurJour = Hebergement.getMontantjour();
                            Hebergement.setMethode('A');
                        }
                    }
                }
            ]
        });
    };
    $scope.popupChoisi = function () {
        $scope.data.valeurCTemp = Hebergement.getMontantChoisi();
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
                            Hebergement.setMontantChoisi($scope.data.valeurCTemp);
                            $scope.data.valeurChoisie = Hebergement.getMontantChoisi();
                            Hebergement.setMethode('B');
                        }
                    }
                }
            ]
        });
    };
    $scope.data.calculHebergement = function(){
        return Hebergement.getTotal();
    };
})

    .controller('MedicCtrl', function($scope, $ionicPopup, Activite, Medic) {
        $scope.data = {
            'valeurJour': Medic.getMontantjour(),
            'valeurChoisie': Medic.getMontantChoisi(),
            'choice': Medic.getMethode()
        };

        $scope.popupJour = function () {
            $scope.data.valeurJTemp = Medic.getMontantjour();
            $ionicPopup.show({
                template: '<input type="number" ng-model="data.valeurJTemp">',
                title: 'Montant par jour et par personne',
                subTitle: 'Environs 1 euros/jour/pers',
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
                                Medic.setMontantJour($scope.data.valeurJTemp);
                                $scope.data.valeurJour = Medic.getMontantjour();
                                Medic.setMethode('A');
                            }
                        }
                    }
                ]
            });
        };
        $scope.popupChoisi = function () {
            $scope.data.valeurCTemp = Medic.getMontantChoisi();
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
                                Medic.setMontantChoisi($scope.data.valeurCTemp);
                                $scope.data.valeurChoisie = Medic.getMontantChoisi();
                                Medic.setMethode('B');
                            }
                        }
                    }
                ]
            });
        };
        $scope.data.calculMedic = function(){
            return Medic.getTotal();
        };
    })

    .controller('PedaCtrl', function($scope, $ionicPopup, Activite, Peda) {
        $scope.data = {
            'valeurJour': Peda.getMontantjour(),
            'valeurChoisie': Peda.getMontantChoisi(),
            'choice': Peda.getMethode()
        };

        $scope.popupJour = function () {
            $scope.data.valeurJTemp = Peda.getMontantjour();
            $ionicPopup.show({
                template: '<input type="number" ng-model="data.valeurJTemp">',
                title: 'Montant par jour et par personne',
                subTitle: 'Environs 1 euros/jour/pers',
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
                                Peda.setMontantJour($scope.data.valeurJTemp);
                                $scope.data.valeurJour = Peda.getMontantjour();
                                Peda.setMethode('A');
                            }
                        }
                    }
                ]
            });
        };
        $scope.popupChoisi = function () {
            $scope.data.valeurCTemp = Peda.getMontantChoisi();
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
                                Peda.setMontantChoisi($scope.data.valeurCTemp);
                                $scope.data.valeurChoisie = Peda.getMontantChoisi();
                                Peda.setMethode('B');
                            }
                        }
                    }
                ]
            });
        };
        $scope.data.calculPeda = function(){
            return Peda.getTotal();
        };
    })

    .controller('ChefsCtrl', function($scope, $ionicPopup, Activite, Chefs) {
        $scope.data = {
            'valeurJour': Chefs.getMontantjour(),
            'valeurChoisie': Chefs.getMontantChoisi(),
            'choice': Chefs.getMethode()
        };

        $scope.popupJour = function () {
            $scope.data.valeurJTemp = Chefs.getMontantjour();
            $ionicPopup.show({
                template: '<input type="number" ng-model="data.valeurJTemp">',
                title: 'Montant par jour et par personne',
                subTitle: 'Environs 1 euros/jour/chef',
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
                                Chefs.setMontantJour($scope.data.valeurJTemp);
                                $scope.data.valeurJour = Chefs.getMontantjour();
                                Chefs.setMethode('A');
                            }
                        }
                    }
                ]
            });
        };
        $scope.popupChoisi = function () {
            $scope.data.valeurCTemp = Chefs.getMontantChoisi();
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
                                Chefs.setMontantChoisi($scope.data.valeurCTemp);
                                $scope.data.valeurChoisie = Chefs.getMontantChoisi();
                                Chefs.setMethode('B');
                            }
                        }
                    }
                ]
            });
        };
        $scope.data.calculChefs = function(){
            return Chefs.getTotal();
        };
    })
    
.controller('ResumeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
