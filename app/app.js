// app.js
define( [
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'preloadjs'
], function($, _, Backbone, Marionette, PreloadJs) {

  'use strict';

  var App = new Backbone.Marionette.Application();
  App.env = "dev";
  App.version = "0.19";

  App.triggers = {
    'appHandleProgress': 'app:handleProgress',
    'appHandleComplete': 'app:handleComplete'
  };

  App.loaderItemEvents = {
    'loader:itemView:render': 'addChild',
    'loader:itemView:destroy': 'removeChild'
  };

  App.tileCollectionItemEvents = {
    'tile:collection:itemView:render': 'addChild',
    'tile:collection:itemView:mouseover': 'stageUpdate',
    'tile:collection:itemView:mouseout': 'stageUpdate'
  };

  App.playerItemEvents = {
    'player:itemView:render': 'addChild'
  };

  var currentModule;

  App.addInitializer(function (options) {
    this.options = options;

    this.stage = new createjs.Stage( "cGame" );
    App.stage.enableMouseOver(30); // Enable Mouse over

    this.queue = new createjs.LoadQueue();
    this.queue.on("progress", App.handleProgress, this);
    this.queue.on("complete", App.handleComplete, this);

    this.options.LoaderModule.start();
    this.options.GameModule.start();
    this.options.LayerModule.start();
    this.options.TileModule.start();
    this.options.PlayerModule.start();

    var _manifest = [
      {id: "map_0_0", src:"sprite1.png"},
      {id: "player", src:"player0.png"}
    ];

    this.queue.loadManifest(_manifest, true, "/assets/imgs/");

    // Listeners :

    // - Loader
    Backbone.Marionette.bindEntityEvents(this, this.options.LoaderModule.ControllerItem.ViewItem, this.loaderItemEvents);
    // - Tiles Events
    Backbone.Marionette.bindEntityEvents(this, this.options.TileModule.ControllerItem.ViewCollection, this.tileCollectionItemEvents);
    // - Player
    Backbone.Marionette.bindEntityEvents(this, this.options.PlayerModule.ControllerItem.ViewItem, this.playerItemEvents);
  });

  App.handleProgress = function(_this) {
    if( this.env == "dev") {
      console.info( "Loading..." );
    }
    
    this.stageUpdate();
    this.triggerMethod(this.triggers.appHandleProgress, this);
  },

  App.handleComplete = function(_this) {
    if( this.env == "dev") {
      console.info( "Load Complete" );
    }

    this.options.LoaderModule.stop();

    this.stageUpdate();
    this.triggerMethod(this.triggers.appHandleComplete, this);
  },

  App.addChild = function(elt) {
    if( elt.ui && elt.ui.content ) {
      this.stage.addChild(elt.ui.content);
      this.stageUpdate();
    } else {
      console.error( "App > addChild >>> elt.ui.content is not defined" );
    }
  },

  App.removeChild = function(elt) {
    if( elt.ui && elt.ui.content ) {
      this.stage.removeChild(elt.ui.content);
    } else {
      console.log( elt );
      console.error( "App > removeChild >>> elt.ui.content is not defined" );
    }
  },

  App.stageUpdate = function() {
    this.stage.update();
  },

  App.on("initialize:after", function(options) {
    if (!Backbone.history.started) {
      Backbone.history.start();
    }
  });

  //
  // Handles the event to stop previous module to release resources
  //
  App.vent.on("module:start", function(module) {
    if (currentModule && currentModule !== module) {
        currentModule.stop();
    }
    currentModule = module;

  });

  return App;
});