// map.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewItem: "",

		initialize: function(options) {
	    var ModelItem = new options.Model();
	    this.ViewItem = new options.ItemView({ model: ModelItem });
	  },

	  onRenderView: function()
	  {
	  	this.ViewItem.render();

	  	this.triggerMethod('onRenderView');
	  }

  });

});