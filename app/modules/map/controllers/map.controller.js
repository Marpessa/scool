// map.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewItem: "",

		initialize: function(options) {
			this.options = options;
			
	    var ModelItem = new this.options.Model();
	    this.ViewItem = new this.options.ItemView({ model: ModelItem });

	    this.listenTo(App, 'onHandleComplete', this.onRenderView);
	  },

	  onRenderView: function()
	  {
	  	this.ViewItem.render();

	  	this.triggerMethod('onRenderView', this);
	  }

  });

});