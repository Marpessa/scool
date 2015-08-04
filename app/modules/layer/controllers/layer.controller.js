// layer.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	Collection: "",
  	ViewCollection: "",

  	itemEvents: {
	    "game:itemView:renderGame": "onLoadTiles"
	  },

		initialize: function(options) {
			this.options = options;

	    var GameModule = options.Modules.GameModule;

	    this.Collection = new this.options.Collection();
	    this.ViewCollection = new this.options.CollectionView({ Collection: this.Collection });
	    // Listeners
	    Backbone.Marionette.bindEntityEvents(this, GameModule.ControllerItem.ViewItem, this.itemEvents);
	  },

	  onLoadTiles: function(_gameController)
	  {
			var _this = this;
	    this.Collection.fetch({
	    	dataType: 'json',
	    	success: function(collection, response, options) {
        	console.info("[Layer.controller.js] JSON file load was successful");

        	_this.ViewCollection.render();
		    },

		    error: function(collection, response, options) {
		      console.error('[Layer.controller.js] There was some error in loading and processing the JSON file' );
		    }
	    });

	  }

  });

});