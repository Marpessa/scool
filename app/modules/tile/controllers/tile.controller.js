// tile.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewCollection: "",

		initialize: function(options) {
      this.options = options;

      var LayerModule = this.options.Modules.LayerModule;

      this.listenTo(LayerModule.ControllerItem, 'onRenderView', this.onRenderView);
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

      var i, _x, _y = 0;

      for(i = 0; i < _nbTiles; i++) {
        var _x = i%_nbTilesByRow;
        if(i != 0 && _x == 0)
        {
          _y++;
        }

        var _posX = (_y-_x) * _layerChild.model.get('tileWidth')/2;
        var _posY = (_x+_y) * _layerChild.model.get('tileHeight')/2;

        collection.models[i].set('x', _x);
        collection.models[i].set('y', _y);
        collection.models[i].set('posX', _posX);
        collection.models[i].set('posY', _posY);
        collection.models[i].set('layerContent', _layerChild.getContent());

        // All tiles loaded / Render View
        if( i == _nbTiles-1 ) {
          var _ViewCollection = new _this.options.CollectionView({ Collection: collection });
          _ViewCollection.render();
        }
      }
    }

  });

});