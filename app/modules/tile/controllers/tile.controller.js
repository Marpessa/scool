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
      var _layerCollection = _layerController.ViewCollection.collection.models;
      var width = 100/2;
      var height = 58/2;

      var i, j, z = 0;
      for(z in _layerCollection) {
        for (i = 0; i < 10; i++) {
          for (j = 0; j < 10; j++) {

            var tile = new this.options.Model({positionX: (j-i) * width, positionY: (i+j) * height, layerId: _layerCollection[z].cid});
            this.ViewCollection.collection.add(tile);
          }
        }
      }

	  	this.ViewCollection.render();

	  	//this.triggerMethod('onRenderView');
	  }

  });

});