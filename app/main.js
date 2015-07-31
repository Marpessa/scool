requirejs.config({
  //baseUrl: '/app',
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: '../assets/js/libs/jquery-2.1.1',
    underscore: '../assets/js/libs/underscore-1.8.3',
    backbone: '../assets/js/libs/backbone-1.1.2',
    marionette: '../assets/js/libs/backbone.marionette-2.4.1.min',
    easeljs: '../assets/js/libs/easeljs-0.8.0.min',
    preloadjs: '../assets/js/libs/preloadjs-0.6.0.min'
  },
  shim: {
    jquery : {
      exports : 'jQuery'
    },

    underscore: {
      exports: '_'
    },

    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },

    marionette: {
      exports: 'Backbone.Marionette',
      deps : ['backbone']
    },

    easeljs: {
      exports: 'createjs',
    },

    preloadjs: {
      exports: 'preloadjs',
      deps : ['easeljs']
    }
  }
});

requirejs.onError = function (err) {
  console.error(err.requireType);
  console.error(err);
  if (err.requireType === 'timeout') {
      console.error('modules: ' + err.requireModules);
  }

  throw err;
};

require([
  'app',

  // Modules
  'modules/loader/loader',
  'modules/map/map',
  'modules/layer/layer',
  'modules/tile/tile',
  'modules/player/player'
], function(App, LoaderModule, MapModule, LayerModule, TileModule, PlayerModule) {

  'use strict';

  var options = {
    LoaderModule: LoaderModule,
    MapModule: MapModule,
    LayerModule: LayerModule,
    TileModule: TileModule,
    PlayerModule: PlayerModule
  };

  App.start(options);
});