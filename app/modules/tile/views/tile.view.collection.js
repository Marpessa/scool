// tile.view.collection.js
define( [
  "app",
  "modules/tile/views/tile.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

  	childView: ItemView,
  	collection: "",

    childEvents: {
      'tile:itemView:render': function (childItem) {
        this.triggerMethod('tile:collectionView:render', childItem);
      },
      'tile:itemView:click': function (childItem) {
        this.triggerMethod('tile:collectionView:click', childItem);
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