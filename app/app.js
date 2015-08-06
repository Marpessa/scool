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
  App.env = "prod";
  App.version = "0.1";

  App.triggers = {
    'appHandleProgress': 'app:handleProgress',
    'appHandleComplete': 'app:handleComplete'
  };

  var currentModule;

  App.addInitializer(function (options) {
    this.options = options;

    this.stage = new createjs.Stage( "cGame" );
    App.stage.enableMouseOver(30); // Enable Mouse over

    this.queue = new createjs.LoadQueue();
    this.queue.on("complete", handleComplete, this);
    this.queue.on("progress", handleProgress, this);

    this.options.LoaderModule.start();
    this.options.GameModule.start();
    this.options.LayerModule.start();
    this.options.TileModule.start();
    this.options.PlayerModule.start();

    var _manifest = [
      {id: "map_0_0", src:"sprite0.png"},
      {id: "player", src:"player0.png"}
    ];

    this.queue.loadManifest(_manifest, true, "/assets/imgs/");

    var LoaderViewItem = this.options.LoaderModule.ControllerItem.ViewItem;
    var GameViewItem = this.options.GameModule.ControllerItem.ViewItem;
    var LayerViewCollection = this.options.LayerModule.ControllerItem.ViewCollection;
    // var TileViewCollection = this.options.TileModule.ControllerItem.ViewCollection;
    var PlayerViewItem = this.options.PlayerModule.ControllerItem.ViewItem;

    // Listeners // TODO Use Backbone.Marionette.bindEntityEvents ?
    this.listenTo(LoaderViewItem, LoaderViewItem.triggers.loaderItemViewRender, addChild);
    this.listenTo(GameViewItem, GameViewItem.triggers.gameItemViewRender, removeChild);
    this.listenTo(LayerViewCollection, LayerViewCollection.triggers.layerCollectionViewRender, addChild);
    // this.listenTo(TileViewCollection, TileViewCollection.triggers.tileCollectionViewRender, stageUpdate); // TODO // To Optimize / Loading too long
    this.listenTo(PlayerViewItem, PlayerViewItem.triggers.playerItemViewRender, stageUpdate);

    function handleProgress(_this) {
      if( App.env == "dev") {
        console.info( "Loading..." );
      }
      
      stageUpdate();
      App.triggerMethod(App.triggers.appHandleProgress, App);
    }

    function handleComplete(_this) {
      if( App.env == "dev") {
        console.info( "Load Complete" );
      }

      App.options.LoaderModule.stop();

      stageUpdate();
      App.triggerMethod(App.triggers.appHandleComplete, App);
    }

    function addChild(elt) {
      if( elt.content ) {
        App.stage.addChild(elt.content);
      } else {
        console.error( "App > addChild >>> elt.ui.content is not defined" );
      }
    }

    function removeChild(elt) {
      if( elt.content ) {
        App.stage.removeChild(elt.content);
      } else {
        console.error( "App > removeChild >>> elt.ui.content is not defined" );
      }
    }

    function stageUpdate() {
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