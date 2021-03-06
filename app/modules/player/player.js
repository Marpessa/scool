// player.js
define( [
  "app",
  "modules/player/models/player.model",
  "modules/player/views/player.view.item",
  "modules/player/controllers/player.controller"
], function( App, Model, ItemView, Controller ) {

  'use strict';

  // Initialise le module avec les méthodes de base.
  var Player = App.module( "Player" );
  Player.startWithParent = false;

  // On spécifie nos API
  Player.Model = Model.extend({});
  Player.ItemView = ItemView.extend({ model: Player.Model });
  Player.Controller = Controller.extend({});

  Player.addInitializer(function() {
    // Get Other modules
    var GameModule = App.module('Game');
    var LayerModule = App.module('Layer');
    var TileModule = App.module('Tile');
     
    Player.ControllerItem = new Player.Controller({ 'Modules': {},
                                                    'Model': Player.Model,
                                                    'ItemView': Player.ItemView,
                                                    'Modules': { 'GameModule' : GameModule, 'TileModule': TileModule }
                                                  });
  });

  // Methods
  Player.onStart = function(options) {},
  Player.onStop = function(options) {},

  Player.on("before:start", function() {
      
  });

  Player.on("start", function() {
    if( App.env == "dev") {
      console.info( "Player > start" );
    }
  });

  return Player;
});