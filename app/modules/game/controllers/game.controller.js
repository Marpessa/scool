// game.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	appEvents: {
	    "app:handleComplete": "onRenderView"
	  },
  	ViewItem: "",

		initialize: function(options) {
	    var ModelItem = new options.Model();
	    this.ViewItem = new options.ItemView({ model: ModelItem });

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