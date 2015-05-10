// layer.view.collection.js
define( [
  "app",
  "modules/layer/views/layer.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

  	childView: ItemView,
  	collection: "",

  	initialize: function(options) {
	    this.collection = options.Collection;
	  },

  	onRender: function() {
      App.stage.update();
  	}
  });

});