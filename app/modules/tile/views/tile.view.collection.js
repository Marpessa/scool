// tile.view.collection.js
define( [
  "app",
  "modules/tile/views/tile.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    triggers: {
      'tileCollectionViewRender': 'tile:collectionView:render',
      'tileCollectionViewClick': 'tile:collectionView:click',
    },
  	childView: ItemView,
  	collection: "",

    childEvents: {
      'tile:itemView:render': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionViewRender, childItem);
      },
      'tile:itemView:click': function (childItem) {
        console.info("test");
        this.triggerMethod(this.triggers.tileCollectionViewClick, childItem);
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