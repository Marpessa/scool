// tile.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

    Collection: "",
    ViewCollection: "",

    collectionEvents: {
      "layer:collectionView:render": "onLoadTiles"
    },

		initialize: function(options) {
      var GameModule = options.Modules.GameModule;
      var LayerModule = options.Modules.LayerModule;

      this.Collection = new options.Collection();
      this.ViewCollection = new options.CollectionView({ Collection: this.Collection });

      // Listeners
      Backbone.Marionette.bindEntityEvents(this, LayerModule.ControllerItem.ViewCollection, this.collectionEvents);
    },

    onLoadTiles: function(_layerItemView) {

      var _layerItemModel = _layerItemView.model;

      this.Collection.setLayerIndex(_layerItemModel.get("index"));

      var _this = this;
      this.Collection.fetch({
        dataType: 'json',
        success: function(collection, response, options) {
          if( App.env == "dev") {
            console.info("[Tile.controller.js] JSON file load was successful");
          }

          _this.onRenderView( _layerItemView, collection );
        },

        error: function(collection, response, options) {
          console.error('[Tile.controller.js] There was some error in loading and processing the JSON file' );
        }
      });
    },

    onRenderView: function(_layerItemView, collection) {
      // TODO Must be do with listener or directly in tileItemView ?
      var _layerItemModel = _layerItemView.model;

      var _nbTilesByRow = _layerItemModel.get('nbTilesByRow');
      var _nbTiles = collection.length;
      var _nbRows = _nbTiles/_nbTilesByRow;
      var _nbCols = _nbTiles/_nbTilesByRow;

      var i, _indexX, _indexY = 0;

      for(i = 0; i < _nbTiles; i++) {
        var _indexX = i%_nbTilesByRow;
        if(i != 0 && _indexX == 0)
        {
          _indexY++;
        }

        var _width = _layerItemModel.get('tileWidth');
        var _height = _layerItemModel.get('tileHeight');

        var _posX = (_indexY-_indexX) * _width/2;
        var _posY = (_indexX+_indexY) * _height/2;

        collection.models[i].set('indexX', _indexX);
        collection.models[i].set('indexY', _indexY);
        collection.models[i].set('width', _width);
        collection.models[i].set('height', _height);
        collection.models[i].set('posX', _posX);
        collection.models[i].set('posY', _posY);
        collection.models[i].set('layerIndex', _layerItemModel.get("index"));

        collection.models[i].set('layerContent', _layerItemView.getContent());

        // All tiles loaded / Render View
        if( i == _nbTiles-1 ) {
          this.ViewCollection.render();
        }

      }
    }

  });

});