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
