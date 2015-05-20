// tile.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	mapSpriteSheet: "",

		initialize: function(options) {
      this.options = options;

      var MapModule = this.options.Modules.MapModule;
      var LayerModule = this.options.Modules.LayerModule;

      this.listenTo(MapModule.ControllerItem, 'onRenderView', this.onLoadSpriteSheet); // Always call before Layer listener
      this.listenTo(LayerModule.ControllerItem, 'onRenderView', this.onRenderView);
    },

    onLoadSpriteSheet: function(_mapController) {
      this.mapSpriteSheet = _mapController.ViewItem.spriteSheet;
    },

    onRenderView: function( _layerController )
    {
      var _layerCollectionChildren = _layerController.ViewCollection.children;
      
      var z = 0;
      var _layerCollectionChildrenLength = _layerCollectionChildren.length;

      for(z = 0; z < _layerCollectionChildrenLength; z++) {
        var _layerChild = _layerCollectionChildren.findByIndex(z);
        var _index = _layerChild.model.get('index');

        this.Collection = new this.options.Collection();
        this.Collection.setLayerIndex(_index);

        var _this = this;
        this.Collection.fetch({
          dataType: 'json',
          success: function(collection, response, options) {
            console.info("[Tile.controller.js] JSON file load was successful");

            var _layerChild = _layerCollectionChildren.findByIndex(collection.layerIndex);

            _this.onRenderViewComplete( _this, _layerChild, collection );
          },

          error: function(collection, response, options) {
            console.error('[Tile.controller.js] There was some error in loading and processing the JSON file' );
          }
        });
      }
    },

    onRenderViewComplete: function( _this, _layerChild, collection ) {
      var _nbTilesByRow = _layerChild.model.get('nbTilesByRow');
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

        var _width = _layerChild.model.get('tileWidth');
        var _height = _layerChild.model.get('tileHeight');

        var _posX = (_indexY-_indexX) * _width/2;
        var _posY = (_indexX+_indexY) * _height/2;

        collection.models[i].set('indexX', _indexX);
        collection.models[i].set('indexY', _indexY);
        collection.models[i].set('width', _width);
        collection.models[i].set('height', _height);
        collection.models[i].set('posX', _posX);
        collection.models[i].set('posY', _posY);
        collection.models[i].set('layerContent', _layerChild.getContent());
        collection.models[i].set('mapSpriteSheet', this.mapSpriteSheet);

        // All tiles loaded / Render View
        if( i == _nbTiles-1 ) {
          var _ViewCollection = new _this.options.CollectionView({ Collection: collection });
          _ViewCollection.render();
        }
      }
    }

  });

});