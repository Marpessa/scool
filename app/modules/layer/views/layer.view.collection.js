// layer.view.collection.js
define( [
  "app",
  "modules/layer/views/layer.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    triggers: {
      'layerCollectionItemViewRender': 'layer:collection:itemView:render'
    },
    childEvents: {
      'layer:itemView:render': function (childItem) {
        this.triggerMethod(this.triggers.layerCollectionItemViewRender, childItem);
      }
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