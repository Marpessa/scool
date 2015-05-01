// tile.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewCollection: "",

		initialize: function(options) {
      this.options = options;

			var Collection = new this.options.Collection();

      var MapModule = this.options.Modules.MapModule;
      var LayerModule = this.options.Modules.LayerModule;

	    this.ViewCollection = new this.options.CollectionView({ Collection: Collection });

	    this.listenTo(LayerModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onRenderView: function( _layerController )
	  {
      var _layerCollectionChildren = _layerController.ViewCollection.children;
      
      var i, j, z = 0;
      var _layerCollectionChildrenLength = _layerCollectionChildren.length;

      for(z = 0; z < _layerCollectionChildrenLength; z++) {
        var _layerChild = _layerCollectionChildren.findByIndex(z);
        var _nbTiles = _layerChild.model.get('nbTiles')

        for (i = 0; i < _nbTiles; i++) {
          for (j = 0; j < _nbTiles; j++) {

            var _posX = (j-i) * _layerChild.model.get('tileWidth')/2;
            var _posY = (i+j) * _layerChild.model.get('tileHeight')/2;

            var tile = new this.options.Model({'posX': _posX,
                                               'posY': _posY,
                                               'layerContent': _layerChild.getContent()
                                              });
            this.ViewCollection.collection.add(tile);
          }
        }
      }

	  	this.ViewCollection.render();

	  	//this.triggerMethod('onRenderView');
	  }

  });

});