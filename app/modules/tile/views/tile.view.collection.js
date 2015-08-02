// tile.view.collection.js
define( [
  "app",
  "modules/tile/views/tile.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    id: "",
  	childView: ItemView,
  	collection: "",

    childEvents: {
      'tile:itemView:click': function () {
        this.triggerMethod('tile:collectionView:click');
      }
    },

  	initialize: function(options) {
	    this.collection = options.Collection;
	  },

    getChildView: function(item) {
      return ItemView;
    },

  	onRender: function() {
  	}

  });

});