const mongoose = require('mongoose');

// Game Schema
const GameSchema = mongoose.Schema({
  title: {
    type: String
  },
   platform: {
    type: String
  },
   score: {
    type: Number
  },
   genre: {
    type: String
  },
   editors_choice: {
    type: String
  }
})

const Game = module.exports = mongoose.model('Game', GameSchema);



module.exports.getAllUsers = function(callback){
  User.find(callback);    
}

module.exports.getAllGames = function(callback){
  Game.find(callback);    
}