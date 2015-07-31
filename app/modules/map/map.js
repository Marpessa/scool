// map.js
define( [
  "app",
  "modules/map/models/map.model",
  "modules/map/views/map.view.item",
  "modules/map/controllers/map.controller"
], function( App, Model, ItemView, Controller ) {

  'use strict';

  // Initialise le module avec les méthodes de base.
  var Map = App.module( "Map" );
  Map.startWithParent = false;

  // On spécifie nos API
  Map.Model = Model.extend({});
  Map.ItemView = ItemView.extend({ model: Map.Model });
  Map.Controller = Controller.extend({});

  Map.addInitializer(function() {
    Map.ControllerItem = new Map.Controller({ 
                                              'Modules': {},
                                              'Model': Map.Model,
                                              'ItemView': Map.ItemView
                                            });
  });

  // Methods
  Map.onStart = function(options) {},
  Map.onStop = function(options) {},

  Map.renderView = function(options) {
    Map.ControllerItem.onRenderView();
  },

  // Events
  Map.on("before:start", function() {

  });

  Map.on("start", function() {
    console.info( "Map > start" );
  });

  return Map;
});