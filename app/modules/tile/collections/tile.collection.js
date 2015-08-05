// tile.collection.js
define( [
	"app",
	"modules/tile/models/tile.model"
], function( App, Model ) {

	'use strict';

  return Backbone.Collection.extend({

  	model: Model,
  	layerIndex: 0,

  	url: function () {
      return "http://dev.scool.com/rest/map_0_0/layer_" + this.layerIndex + "_tiles.json?v=" + App.version; // TODO ID Map to change
    },

  	setLayerIndex: function(layerIndex) {
  		this.layerIndex = layerIndex;
  	}

  });

});