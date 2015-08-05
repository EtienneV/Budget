angular.module('budget.services', [])

    .factory('Activite', function() {
        var activite = {
            nom : '',
            duree : 0,
            participants : {
                nbjeunes : 0,
                nbchefs : 0,
                nbtotal : 0
            },
            notes : ''
        };

        function calculNbParticipants(){
            activite.participants.nbtotal = activite.participants.nbchefs + activite.participants.nbjeunes;
        }

        return {
            setNom : function(nom){
                activite.nom = nom;
            },
            getNom : function(){
                return activite.nom;
            },
            setDuree : function(duree){
                activite.duree = duree;
            },
            getDuree : function(){
                return activite.duree;
            },
            setNbJeunes : function(nbjeunes){
                activite.participants.nbjeunes = nbjeunes;
                calculNbParticipants();
            },
            getNbJeunes : function(){
                return activite.participants.nbjeunes;
            },
            setNbChefs : function(nbchefs){
                activite.participants.nbchefs = nbchefs;
                calculNbParticipants();
            },
            getNbChefs : function(){
                return activite.participants.nbchefs;
            },
            getNbTotal : function(){
                return activite.participants.nbtotal;
            },
            setNotes : function(notes){
                activite.notes = notes;
            },
            getNotes : function(){
                return activite.notes;
            }
        };
    })

    .factory('Budget', function(Activite, Intendance, Hebergement, Medic, Peda, Activites, Chefs, Transports, AutresCouts) {

        var budget = [{
            id: 0,
            nom: 'Intendance',
            page: 'intendance',
            montant: Intendance.getTotal
        },{
            id: 1,
            nom: 'Hebergement',
            page: 'hebergement',
            montant: Hebergement.getTotal
        },{
            id: 2,
            nom: 'Frais medicaux',
            page: 'medic',
            montant: Medic.getTotal
        },{
            id: 3,
            nom: 'Frais pedagogiques',
            page: 'peda',
            montant: Peda.getTotal
        },{
            id: 4,
            nom: 'Activites',
            page: 'activites',
            montant: Activites.getTotal
        },{
            id: 5,
            nom: '5eme des chefs',
            page: 'chefs',
            montant: Chefs.getTotal
        },{
            id: 6,
            nom: 'Transports',
            page: 'transports',
            montant: Transports.coutCovoiturage
        },{
            id: 7,
            nom: 'Autres',
            page: 'autres_couts',
            montant: AutresCouts.getTotal
        }];

        var getMontant = function(id){ // R�cup�re le montant d'une ligne de compta
            return budget[id].montant();
        };

        var getTotal = function(){
            var total = 0;
            for(var i in budget)
            {
                total += getMontant(budget[i].id);
            }
            return total;
        };

        return {
            getBudget: function(){
                return budget;
            },
            getMontant: getMontant,
            getTotal : getTotal,
            getCoutJeune: function(){
                return getTotal() / Activite.getNbJeunes();
            }
        };
    })

    .factory('Intendance', function(Activite) {
        var methode = 'A';
        var montant = {
            jour: 6,
            choisi: 0
        };

        return {
            setMethode: function(m){
                methode = m;
            },
            getMethode: function(){
                return methode;
            },
            setMontantJour: function(m){
                montant.jour = m;
            },
            getMontantjour: function(){
                return montant.jour;
            },
            setMontantChoisi: function(m){
                montant.choisi = m;
            },
            getMontantChoisi: function(){
                return montant.choisi;
            },
            getTotal: function(){
                if(methode == 'A')
                {
                    return montant.jour * Activite.getNbTotal() * Activite.getDuree();
                }
                else if(methode == 'B')
                {
                    return montant.choisi;
                }
                else
                {
                    return 'Erreur';
                }
            }
        };
    })

    .factory('Hebergement', function(Activite) {
        var methode = 'B';
        var montant = {
            jour: 1,
            choisi: 0
        };

        return {
            setMethode: function(m){
                methode = m;
            },
            getMethode: function(){
                return methode;
            },
            setMontantJour: function(m){
                montant.jour = m;
            },
            getMontantjour: function(){
                return montant.jour;
            },
            setMontantChoisi: function(m){
                montant.choisi = m;
            },
            getMontantChoisi: function(){
                return montant.choisi;
            },
            getTotal: function(){
                if(methode == 'A')
                {
                    return montant.jour * Activite.getNbTotal() * Activite.getDuree();
                }
                else if(methode == 'B')
                {
                    return montant.choisi;
                }
                else
                {
                    return 'Erreur';
                }
            }
        };
    })

    .factory('Medic', function(Activite) {
        var methode = 'A';
        var montant = {
            jour: 1,
            choisi: 0
        };

        return {
            setMethode: function(m){
                methode = m;
            },
            getMethode: function(){
                return methode;
            },
            setMontantJour: function(m){
                montant.jour = m;
            },
            getMontantjour: function(){
                return montant.jour;
            },
            setMontantChoisi: function(m){
                montant.choisi = m;
            },
            getMontantChoisi: function(){
                return montant.choisi;
            },
            getTotal: function(){
                if(methode == 'A')
                {
                    return montant.jour * Activite.getNbTotal() * Activite.getDuree();
                }
                else if(methode == 'B')
                {
                    return montant.choisi;
                }
                else
                {
                    return 'Erreur';
                }
            }
        };
    })

    .factory('Peda', function(Activite) {
        var methode = 'B';
        var montant = {
            jour: 1,
            choisi: 0
        };

        return {
            setMethode: function(m){
                methode = m;
            },
            getMethode: function(){
                return methode;
            },
            setMontantJour: function(m){
                montant.jour = m;
            },
            getMontantjour: function(){
                return montant.jour;
            },
            setMontantChoisi: function(m){
                montant.choisi = m;
            },
            getMontantChoisi: function(){
                return montant.choisi;
            },
            getTotal: function(){
                if(methode == 'A')
                {
                    return montant.jour * Activite.getNbTotal() * Activite.getDuree();
                }
                else if(methode == 'B')
                {
                    return montant.choisi;
                }
                else
                {
                    return 'Erreur';
                }
            }
        };
    })

    .factory('Activites', function(Activite) {
        var methode = 'B';
        var montant = {
            jour: 1,
            choisi: 0
        };

        return {
            setMethode: function(m){
                methode = m;
            },
            getMethode: function(){
                return methode;
            },
            setMontantJour: function(m){
                montant.jour = m;
            },
            getMontantjour: function(){
                return montant.jour;
            },
            setMontantChoisi: function(m){
                montant.choisi = m;
            },
            getMontantChoisi: function(){
                return montant.choisi;
            },
            getTotal: function(){
                if(methode == 'A')
                {
                    return montant.jour * Activite.getNbTotal();
                }
                else if(methode == 'B')
                {
                    return montant.choisi;
                }
                else
                {
                    return 'Erreur';
                }
            }
        };
    })

    .factory('Chefs', function(Activite) {
        var methode = 'A';
        var montant = {
            jour: 1,
            choisi: 0
        };

        return {
            setMethode: function(m){
                methode = m;
            },
            getMethode: function(){
                return methode;
            },
            setMontantJour: function(m){
                montant.jour = m;
            },
            getMontantjour: function(){
                return montant.jour;
            },
            setMontantChoisi: function(m){
                montant.choisi = m;
            },
            getMontantChoisi: function(){
                return montant.choisi;
            },
            getTotal: function(){
                if(methode == 'A')
                {
                    return montant.jour * Activite.getNbChefs() * Activite.getDuree();
                }
                else if(methode == 'B')
                {
                    return montant.choisi;
                }
                else
                {
                    return 'Erreur';
                }
            }
        };
    })

    .factory('Transports', function(Activite) {
        var covoiturage = {
            nb_km: 0,
            peage: 0,
            carburant: 1.3,
            conso: 8,
            nb_aller: 0,
            nb_retour: 0,
            nb_chefs: 0,
            rembourse: 0
        };

        var coutAllerRetour = function(){
            return (covoiturage.nb_km * covoiturage.carburant * covoiturage.conso) / 100 + covoiturage.peage;
        };

        var nbAllerRetourParents = function(){
            return covoiturage.nb_aller + covoiturage.nb_retour;
        };

        var nbAllerRetour = function(){
            return covoiturage.nb_aller + covoiturage.nb_retour + covoiturage.nb_chefs;
        };

        var coutCovoiturage = function(){
            return nbAllerRetourParents() * covoiturage.rembourse + covoiturage.nb_chefs * coutAllerRetour();
        };

        return {
            setKm : function(km){
                covoiturage.nb_km = km;
            },
            getKm : function(){
                return covoiturage.nb_km;
            },
            setPeage : function(peage){
                covoiturage.peage = peage;
            },
            getPeage : function(){
                return covoiturage.peage;
            },
            setCarburant : function(carburant){
                covoiturage.carburant = carburant;
            },
            getCarburant : function(){
                return covoiturage.carburant;
            },
            setConso : function(conso){
                covoiturage.conso = conso;
            },
            getConso : function(){
                return covoiturage.conso;
            },
            coutAllerRetour : function(){
                return coutAllerRetour();
            },
            setNbAller : function(nb){
                covoiturage.nb_aller = nb;
            },
            getNbAller : function(){
                return covoiturage.nb_aller;
            },
            setNbRetour : function(nb){
                covoiturage.nb_retour = nb;
            },
            getNbRetour : function(){
                return covoiturage.nb_retour;
            },
            setNbChefs : function(nb){
                covoiturage.nb_chefs = nb;
            },
            getNbChefs : function(){
                return covoiturage.nb_chefs;
            },
            nbAllerRetour: function(){
                return nbAllerRetour();
            },
            setRembourse : function(rembourse){
                covoiturage.rembourse = rembourse;
            },
            getRembourse : function(){
                return covoiturage.rembourse;
            },
            coutCovoiturage: function(){
                return coutCovoiturage();
            }
        };
    })

    .factory('AutresCouts', function() {
        var autres = [{
            id: 0,
            nom: 'Materiel',
            cout: 0
        },{
            id: 1,
            nom: 'Location voiture',
            cout: 0
        },{
            id: 2,
            nom: 'Luges',
            cout: 0
        }];

        var getTotal = function(){
            var total = 0;
            for(var i in autres)
            {
                total += autres[i].cout;
            }
            return total;
        };

        var supprimer = function(id){
            autres.splice(id, 1);
        };

        return {
            getAutres: function(){
                return autres;
            },
            setCout: function(id, cout){
                autres[id].cout = cout;
            },
            getCout: function(id){
                return autres[id].cout;
            },
            getTotal: function(){
                return getTotal();
            },
            supprimer: function(id){
                supprimer(id);
            }
        };
    })


.factory('Recettes', function() {

});
