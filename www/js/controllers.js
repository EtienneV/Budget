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
                            if ($scope.data.valeurJTemp === '') {
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
                            if ($scope.data.valeurCTemp === '') {
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
                        if ($scope.data.valeurJTemp === '') {
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
                        if ($scope.data.valeurCTemp === '') {
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
                            if ($scope.data.valeurJTemp === '') {
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
                            if ($scope.data.valeurCTemp === '') {
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
                            if ($scope.data.valeurJTemp === '') {
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
                            if ($scope.data.valeurCTemp === '') {
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

    .controller('ActivitesCtrl', function($scope, $ionicPopup, Activite, Activites) {
        $scope.data = {
            'valeurJour': Activites.getMontantjour(),
            'valeurChoisie': Activites.getMontantChoisi(),
            'choice': Activites.getMethode()
        };

        $scope.popupJour = function () {
            $scope.data.valeurJTemp = Activites.getMontantjour();
            $ionicPopup.show({
                template: '<input type="number" ng-model="data.valeurJTemp">',
                title: 'Montant par participant',
                subTitle: "En fonction du nombre d'activites",
                scope: $scope,
                buttons: [
                    {text: 'Annuler'},
                    {
                        text: '<b>Confirmer</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if ($scope.data.valeurJTemp === '') {
                                //don't allow the user to close unless he enters anumber
                                e.preventDefault();
                            } else {
                                Activites.setMontantJour($scope.data.valeurJTemp);
                                $scope.data.valeurJour = Activites.getMontantjour();
                                Activites.setMethode('A');
                            }
                        }
                    }
                ]
            });
        };
        $scope.popupChoisi = function () {
            $scope.data.valeurCTemp = Activites.getMontantChoisi();
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
                            if ($scope.data.valeurCTemp === '') {
                                //don't allow the user to close unless he enters anumber
                                e.preventDefault();
                            } else {
                                Activites.setMontantChoisi($scope.data.valeurCTemp);
                                $scope.data.valeurChoisie = Activites.getMontantChoisi();
                                Activites.setMethode('B');
                            }
                        }
                    }
                ]
            });
        };
        $scope.data.calculActivites = function(){
            return Activites.getTotal();
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
                            if ($scope.data.valeurJTemp === '') {
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
                            if ($scope.data.valeurCTemp === '') {
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

    .controller('TransportsCtrl', function($scope, Activite, Transports) {

        $scope.transports = Transports;

        $scope.data = {
            nb_km: $scope.transports.getKm(),
            peage: $scope.transports.getPeage(),
            carburant: $scope.transports.getCarburant(),
            conso: $scope.transports.getConso(),
            nb_aller: $scope.transports.getNbAller(),
            nb_retour: $scope.transports.getNbRetour(),
            nb_chefs: $scope.transports.getNbChefs(),
            rembourse: $scope.transports.getRembourse()
        };

        $scope.data.rafraichirInfos = function(){
            $scope.transports.setKm($scope.data.nb_km);
            $scope.transports.setPeage($scope.data.peage);
            $scope.transports.setCarburant($scope.data.carburant);
            $scope.transports.setConso($scope.data.conso);

            $scope.data.rembourse = $scope.transports.coutAllerRetour();
            $scope.transports.setRembourse($scope.data.rembourse);
        };

        $scope.data.rafraichirVoitures = function(){
            $scope.transports.setNbAller($scope.data.nb_aller);
            $scope.transports.setNbRetour($scope.data.nb_retour);
            $scope.transports.setNbChefs($scope.data.nb_chefs);
        };

        $scope.data.rafraichirRembourse = function(){
            $scope.transports.setRembourse($scope.data.rembourse);
        };
    })

    .controller('AutresCoutsCtrl', function($scope, AutresCouts) {
        $scope.autres = AutresCouts;

        $scope.data = {};

        $scope.tab_autres = $scope.autres.getAutres();

        $scope.supprimer = function(id) {
            //$scope.autres.supprimer(id);
            $scope.tab_autres.splice(id, 1);
        };

        $scope.data.rafraichirCout = function(id){
        };
    })
    
.controller('ResumeCtrl', function($scope, Activite, Budget) {

        $scope.data = {};

        $scope.activite = Activite;

        $scope.budget = Budget;

        $scope.data.getNom = function(){
            if($scope.activite.getNom() == '') return 'Nouvelle activite';
            else return $scope.activite.getNom();
        };

})

    .controller('RecettesCtrl', function($scope, Activite, Recettes) {

        $scope.data = {};

        $scope.recettes = Recettes;
    });
