// layer.view.collection.js
define( [
  "app",
  "modules/layer/views/layer.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    childEvents: {
      'layer:itemView:render': function (childItem) {
        this.triggerMethod(this.triggers.layerCollectionViewRender, childItem);
      }
    },
    triggers: {
      'layerCollectionViewRender': 'layer:collectionView:render'
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