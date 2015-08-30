// layer.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	Collection: "",
  	ViewCollection: "",

  	itemEvents: {
	    "game:itemView:render": "onLoadTiles"
	  },

		initialize: function(options) {
	    var GameModule = options.Modules.GameModule;

	    this.Collection = new options.Collection();
	    this.ViewCollection = new options.CollectionView({ Collection: this.Collection });
	    // Listeners
	    Backbone.Marionette.bindEntityEvents(this, GameModule.ControllerItem.ViewItem, this.itemEvents);
	  },

	  onLoadTiles: function(_gameController)
	  {
	    this.Collection.fetch({
	    	async: true,
        add: true,
        update: true,
        reset: false,
        remove: false,
	    	dataType: 'json',
	    	success: _.bind(function(collection, response, options) {
	    		if( App.env == "dev") {
        		console.info("[Layer.controller.js] JSON file load was successful");
        	}
        	
        	this.ViewCollection.render();
		    }, this),

		    error: _.bind(function(collection, response, options) {
		      console.error('[Layer.controller.js] There was some error in loading and processing the JSON file' );
		    }, this)
	    });
	  }

  });

});