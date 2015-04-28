// tile.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewCollection: "",

		initialize: function(options) {

			var Collection = new options.Collection();

      var MapModule = options.Modules.MapModule;
      var LayerModule = options.Modules.LayerModule;
	  	var layerModuleViewItem = LayerModule.getViewCollection();

	    this.ViewCollection = new options.CollectionView({ Collection: Collection, ParentView: layerModuleViewItem });

	    var width = 100/2;
      var height = 58/2;

      var i, j, id = 0;
      for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {

          var tile = new options.Model({id: "tile" + id, positionX: (j-i) * width, positionY: (i+j) * height});
          this.ViewCollection.collection.add(tile);
          id++;
        }
      }

	    this.listenTo(LayerModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onRenderView: function( _layerController )
	  {
      console.log( _layerController );
	  	this.ViewCollection.render();

	  	//this.triggerMethod('onRenderView');
	  }

  });

});