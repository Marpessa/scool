// layer.js
define( [
  "app",
  "modules/tile/models/tile.model",
  "modules/tile/collections/tile.collection",
  "modules/tile/views/tile.view.collection",
  "modules/tile/controllers/tile.controller"
], function( App, Model, Collection, CollectionView, Controller ) {

  'use strict';

  // Initialise le module avec les méthodes de base.
  var Tile = App.module( "Tile" );
  Tile.startWithParent = false;

  // On spécifie nos API
  Tile.Model = Model.extend({});
  Tile.Collection = Collection.extend({});
  Tile.CollectionView = CollectionView.extend({});
  Tile.Controller = Controller.extend({});

  Tile.addInitializer(function() {
   // Get Other modules
  var MapModule = App.module('Map');
  var LayerModule = App.module('Layer');
   
  Tile.ControllerItem = new Tile.Controller({ Model: Tile.Model,
                                              Collection: Tile.Collection,
                                              CollectionView: Tile.CollectionView,
                                              Modules: { MapModule : MapModule, LayerModule: LayerModule }
                                            });
  });

  // Methods
  Tile.onStart = function(options) {},
  Tile.onStop = function(options) {},

  Tile.on("before:start", function() {
      
  });

  Tile.on("start", function() {
    console.info( "Tile > start" );
  });


  return Tile;
});