// layer.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewCollection: "",

		initialize: function(options) {

			var Collection = new options.Collection();

	    var MapModule = options.Modules.MapModule;

	    this.ViewCollection = new options.CollectionView({ Collection: Collection });

	    var layer1 = new options.Model({'posZ': 2 * 58, 'frameColor': "#ccc"});
			var layer2 = new options.Model({'posZ': 1 * 58, 'frameColor': "#ddd"});
			var layer3 = new options.Model({'posZ': 0 * 58, 'frameColor': "#eee"});
			this.ViewCollection.collection.add(layer1);
			this.ViewCollection.collection.add(layer2);
			this.ViewCollection.collection.add(layer3);

	    this.listenTo(MapModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onRenderView: function()
	  {
	  	this.ViewCollection.render();

	  	this.triggerMethod('onRenderView', this);
	  }

  });

});