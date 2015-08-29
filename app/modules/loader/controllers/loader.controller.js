// loader.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	appEvents: {
	    "app:handleProgress": "onRenderView",
	    "app:handleComplete": "onDestroyView"
	  },
  	ViewItem: "",

		initialize: function(options) {
	    var ModelItem = new options.Model();
	    this.ViewItem = new options.ItemView({ model: ModelItem });

	    // Listeners
	  	Backbone.Marionette.bindEntityEvents(this, App, this.appEvents);
	  },

	  onRenderView: function(App)
	  {
	  	this.ViewItem.render(App);
	  },

	  onReset: function()
	  {
	  	this.ViewItem.reset();
	  },

	  onDestroyView: function(App)
	  {
	  	this.ViewItem.destroy(App);
	  },

  });

});