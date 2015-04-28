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

    this.options.MapModule.start();
    this.options.LayerModule.start();
    this.options.TileModule.start();

    this.queue = new createjs.LoadQueue();
    this.queue.on("complete", handleComplete, this);
    this.queue.on("progress", handleProgress, this);

    this.queue.loadManifest([
      {id: "tile", src:"/assets/imgs/tile1.png"}
    ]);

    // http://www.gamedev5.com/2013/06/tutorial-2-dragon-of-bosnia-preloading.html
    // https://github.com/eschwartz/CanvasRPG/blob/master/Game/Game.js

    function handleProgress(_this) {
      console.info( "Loading..." );
      App.stage.update();
    }

    function handleComplete(_this) {
      console.info( "Load Complete" );
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