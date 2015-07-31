// layer.js
define( [
  "app",
  "modules/loader/models/loader.model",
  "modules/loader/views/loader.view.item",
  "modules/loader/controllers/loader.controller"
], function( App, Model, ItemView, Controller ) {

  'use strict';

  // Initialise le module avec les méthodes de base.
  var Loader = App.module( "Loader" );
  Loader.startWithParent = false;

  // On spécifie nos API
  Loader.Model = Model.extend({});
  Loader.ItemView = ItemView.extend({ model: Loader.Model });
  Loader.Controller = Controller.extend({});

  Loader.addInitializer(function() {
    Loader.ControllerItem = new Loader.Controller({
                                                    'Model': Loader.Model,
                                                    'ItemView': Loader.ItemView
                                                  });
  });

  // Methods
  Loader.onStart = function(options) {},
  Loader.onStop = function(options) {
    Loader.ControllerItem.onReset();
  },

  Loader.renderView = function(options) {
    Loader.ControllerItem.onRenderView();
  },

  Loader.on("before:start", function() {
      
  });

  Loader.on("start", function() {
    console.info( "Loader > start" );
  });


  return Loader;
});