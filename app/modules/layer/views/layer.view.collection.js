// layer.view.collection.js
define( [
  "app",
  "modules/layer/views/layer.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    triggerMethods: {
      'layerCollectionViewRender': 'layer:collectionView:render'
    },
  	childView: ItemView,
  	collection: "",

    childEvents: {
      'layer:itemView:render': function (childItem) {
        this.triggerMethod(this.triggerMethods.layerCollectionViewRender, childItem);
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