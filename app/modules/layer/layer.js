// layer.js
define( [
  "app",
  "modules/layer/models/layer.model",
  "modules/layer/collections/layer.collection",
  "modules/layer/views/layer.view.collection",
  "modules/layer/controllers/layer.controller"
], function( App, Model, Collection, CollectionView, Controller ) {

  'use strict';

  // Initialise le module avec les méthodes de base.
  var Layer = App.module( "Layer" );
  Layer.startWithParent = false;

  // On spécifie nos API
  Layer.Collection = Collection.extend({});
  Layer.CollectionView = CollectionView.extend({});
  Layer.Controller = Controller.extend({});

  Layer.addInitializer(function() {
    
    // Get Other modules
    var GameModule = App.module('Game');
    
    Layer.ControllerItem = new Layer.Controller({ 'Collection': Layer.Collection,
                                                  'CollectionView': Layer.CollectionView,
                                                  'Modules': { 'GameModule': GameModule }
                                                });
  });

  // Methods
  Layer.onStart = function(options) {},
  Layer.onStop = function(options) {},

  Layer.on("before:start", function() {
      
  });

  Layer.on("start", function() {
    if( App.env == "dev") {
      console.info( "Layer > start" );
    }
  });


  return Layer;
});