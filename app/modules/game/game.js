// game.js
define( [
  "app",
  "modules/game/models/game.model",
  "modules/game/views/game.view.item",
  "modules/game/controllers/game.controller"
], function( App, Model, ItemView, Controller ) {

  'use strict';

  // Initialise le module avec les méthodes de base.
  var Game = App.module( "Game" );
  Game.startWithParent = false;

  // On spécifie nos API
  Game.Model = Model.extend({});
  Game.ItemView = ItemView.extend({ model: Game.Model });
  Game.Controller = Controller.extend({});

  Game.addInitializer(function() {
    Game.ControllerItem = new Game.Controller({ 
                                              'Modules': {},
                                              'Model': Game.Model,
                                              'ItemView': Game.ItemView
                                            });
  });

  // Methods
  Game.onStart = function(options) {},
  Game.onStop = function(options) {},

  Game.renderView = function(options) {
    Game.ControllerItem.onRenderView();
  },

  // Events
  Game.on("before:start", function() {

  });

  Game.on("start", function() {
    console.info( "Game > start" );
  });

  return Game;
});