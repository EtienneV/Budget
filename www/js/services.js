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

    .factory('Budget', function(Activite, Intendance, Hebergement, Medic, Peda, Activites, Chefs) {

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
            montant: Intendance.getTotal
        },{
            id: 7,
            nom: 'Autres',
            page: 'autres',
            montant: Intendance.getTotal
        }];

        var getMontant = function(id){ // Récupère le montant d'une ligne de compta
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

    .factory('Activites', function(Activite) {
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

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
