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
  App.version = "0.1";

  var currentModule;


  App.addInitializer(function (options) {
    this.options = options;

    this.stage = new createjs.Stage( "cGame" );

    this.options.LoaderModule.start();
    this.options.GameModule.start();
    this.options.LayerModule.start();
    this.options.TileModule.start();
    this.options.PlayerModule.start();

    this.queue = new createjs.LoadQueue();
    this.queue.on("complete", handleComplete, this);
    this.queue.on("progress", handleProgress, this);

    var _manifest = [
      {id: "map_0_0", src:"sprite0.png"},
      {id: "player", src:"player0.png"}
    ];

    this.queue.loadManifest(_manifest, true, "/assets/imgs/");

    function handleProgress(_this) {
      console.info( "Loading..." );
      
      App.triggerMethod('onHandleProgress');
      App.stage.update();
    }

    function handleComplete(_this) {
      console.info( "Load Complete" );
      App.options.LoaderModule.stop();

      App.triggerMethod('onHandleComplete');
      App.stage.update();
    }
  });

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