// layer.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewCollection: "",

		initialize: function(options) {

	    var MapModule = options.Modules.MapModule;
			var Collection = new options.Collection();

	    Collection.fetch({
	    	dataType: 'json',
	    	success: function(collection, response, options) {
        	console.info("JSON file load was successful");
		    },

		    error: function(collection, response, options){
		      console.error('There was some error in loading and processing the JSON file' );
		    }
	    });

	    this.ViewCollection = new options.CollectionView({ Collection: Collection });


	    this.listenTo(MapModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onRenderView: function()
	  {
	  	this.ViewCollection.render();

	  	this.triggerMethod('onRenderView', this);
	  }

  });

});