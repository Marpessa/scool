// loader.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	appEvents: {
	    "app:handleProgress": "onRenderView"
	  },
  	ViewItem: "",

		initialize: function(options) {
			this.options = options;

	    var ModelItem = new this.options.Model();
	    this.ViewItem = new this.options.ItemView({ model: ModelItem });

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
	  }

  });

});