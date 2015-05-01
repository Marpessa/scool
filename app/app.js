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

  var currentModule;

  App.addInitializer(function (options) {
    this.options = options;

    this.stage = new createjs.Stage( "cMap" );

    this.options.LoaderModule.start();
    this.options.MapModule.start();
    this.options.LayerModule.start();
    this.options.TileModule.start();

    this.queue = new createjs.LoadQueue();
    this.queue.on("complete", handleComplete, this);
    this.queue.on("progress", handleProgress, this);

    this.queue.loadManifest([
      {id: "tile", src:"/assets/imgs/tile1.png"}
    ]);

    function handleProgress(_this) {
      console.info( "Loading..." );
      App.options.LoaderModule.renderView();
      App.stage.update();
    }

    function handleComplete(_this) {
      console.info( "Load Complete" );
      App.options.LoaderModule.stop();
      App.options.MapModule.renderView();
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