// tile.view.collection.js
define( [
  "app",
  "modules/tile/views/tile.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    childEvents: {
      'tile:itemView:render': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionViewRender, childItem);
      },
      'tile:itemView:addchild': function (childItem) {
        this.triggerMethod(this.triggers.tileItemViewAddChild, childItem);
      },
      'tile:itemView:click': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionViewClick, childItem);
      },
      'tile:itemView:mouseover': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionViewMouseOver, childItem);
      },
      'tile:itemView:mouseout': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionViewMouseOut, childItem);
      }
    },
    triggers: {
      'tileCollectionViewRender': 'tile:collectionView:render',
      'tileItemViewAddChild': 'tile:collectionView:addchild',
      'tileCollectionViewClick': 'tile:collectionView:click',
      'tileCollectionViewMouseOver': 'tile:collectionView:mouseover',
      'tileCollectionViewMouseOut': 'tile:collectionView:mouseout',
    },
    childView: ItemView,
    collection: "",


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