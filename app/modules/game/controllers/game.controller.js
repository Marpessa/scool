// game.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	appEvents: {
	    "app:handleComplete": "onRenderView"
	  },
  	ViewItem: "",

		initialize: function(options) {
			this.options = options;
			
	    var ModelItem = new this.options.Model();
	    this.ViewItem = new this.options.ItemView({ model: ModelItem });

	    // Listeners
	  	Backbone.Marionette.bindEntityEvents(this, App, this.appEvents);
	  },

	  onRenderView: function()
	  {
	  	this.ViewItem.render();
	  },

	  onReset: function()
	  {
	  	this.ViewItem.reset();
	  }

  });

});