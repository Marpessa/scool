// tile.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

    Collection: "",
    ViewCollection: "",
    nbLayers: 0,
    nbLayersLoaded: 0,

    appEvents: {
      'app:handleComplete': 'onLoadSpriteSheetView'
    },
    layerCollectionItemEvents: {
      'layer:collection:itemView:render': 'onLoadTiles'
    },
    layerCollectionEvents: {
      'layer:collection:render': 'onSetNbLayers'
    },

		initialize: function(options) {
      var GameModule = options.Modules.GameModule;
      var LayerModule = options.Modules.LayerModule;

      this.Collection = new options.Collection();
      this.ViewCollection = new options.CollectionView({ Collection: this.Collection });

      // Listeners
      Backbone.Marionette.bindEntityEvents(this, App, this.appEvents);
      Backbone.Marionette.bindEntityEvents(this, LayerModule.ControllerItem.ViewCollection, this.layerCollectionItemEvents);
      Backbone.Marionette.bindEntityEvents(this, LayerModule.ControllerItem.ViewCollection, this.layerCollectionEvents);
    },

    onSetNbLayers: function(_layerView) {
      this.nbLayers = _layerView.collection.length;
    },

    onLoadSpriteSheetView: function(App) {
      this.ViewCollection.loadSpriteSheet(App);
    },

    onLoadTiles: function(_layerItemView) {
      var _layerItemModel = _layerItemView.model;

      this.Collection.setLayerIndexFilex(_layerItemModel.get("index")); // TODO Bof... Just use to load the good file with url function in collection

      // Merge collection view
      this.Collection.fetch({
        async: true,
        add: true,
        update: true,
        reset: false,
        remove: false,
        dataType: 'json',
        success: _.bind(function(collection, response, options) {
          if( App.env == "dev") {
            console.info("[Tile.controller.js] JSON file load was successful");
          }
          this.nbLayersLoaded++;

          this.setModelTiles(_layerItemModel, collection);

          if( this.nbLayersLoaded == this.nbLayers ) {
            this.ViewCollection.render();
          }
        }, this),

        error: _.bind(function(collection, response, options) {
          console.error('[Tile.controller.js] There was some error in loading and processing the JSON file' );
        }, this)
      });
    },

    setModelTiles: function(_layerItemModel, collection) {
      var _nbTilesByRow = _layerItemModel.get('nbTilesByRow');
      var _nbTiles = collection.length;
      var _nbRows = _nbTiles/_nbTilesByRow;
      var _nbCols = _nbTiles/_nbTilesByRow;

       // Current Start Tile of collection / Index of first Tile // Indeed, several collections are merge, not set tile of previous collection
      var i = (this.nbLayersLoaded-1)*(_nbTilesByRow*_nbTilesByRow);
      var _indexX, _indexY = 0;

      for(i; i<_nbTiles; i++) {
        var _indexX = i%_nbTilesByRow;
        if(i != 0 && _indexX == 0)
        {
          _indexY++;
        }

        var _width = _layerItemModel.get('tileWidth');
        var _height = _layerItemModel.get('tileHeight');

        var _posX = (_indexY-_indexX) * _width/2 + _layerItemModel.get( 'posX' );
        var _posY = (_indexX+_indexY) * _height/2 + _layerItemModel.get( 'posY' ) + _layerItemModel.get( 'posZ' );

        collection.models[i].set('indexX', _indexX);
        collection.models[i].set('indexY', _indexY);
        collection.models[i].set('width', _width);
        collection.models[i].set('height', _height);
        collection.models[i].set('posX', _posX);
        collection.models[i].set('posY', _posY);
        collection.models[i].set('layerIndex', _layerItemModel.get("index") );
      }
    }

  });

});