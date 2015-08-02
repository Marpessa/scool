// layer.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewCollection: "",

  	itemEvents: {
	    "game:itemView:renderGame": "onLoadTiles"
	  },

		initialize: function(options) {
			this.options = options;

	    var GameModule = options.Modules.GameModule;

	    // Listeners
	    Backbone.Marionette.bindEntityEvents(this, GameModule.ControllerItem.ViewItem, this.itemEvents);
	  },

	  onLoadTiles: function(_gameController)
	  {
			var Collection = new this.options.Collection();

			var _this = this;
	    Collection.fetch({
	    	dataType: 'json',
	    	success: function(collection, response, options) {
        	console.info("[Layer.controller.js] JSON file load was successful");

        	_this.onRenderView(_this, collection);
		    },

		    error: function(collection, response, options) {
		      console.error('[Layer.controller.js] There was some error in loading and processing the JSON file' );
		    }
	    });

	  },

	  onRenderView: function(_this, collection) {
	  	_this.ViewCollection = new _this.options.CollectionView({ Collection: collection });
			_this.ViewCollection.render();

			_this.triggerMethod('onRenderView', _this);
	  }

  });

});