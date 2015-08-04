// loader.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewItem: "",

		initialize: function(options) {
	    var ModelItem = new options.Model();
	    this.ViewItem = new options.ItemView({ model: ModelItem });

	    this.listenTo(App, 'onHandleProgress', this.onRenderView);
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