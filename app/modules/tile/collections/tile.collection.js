// tile.collection.js
define( [
	"app",
	"modules/tile/models/tile.model"
], function( App, Model ) {

	'use strict';

  return Backbone.Collection.extend({

  	model: Model,
  	layerIndexFile: "0",
    mapIndexFile: "0_0",  // TODO ID Map to change // Create Map module abnd listen this

  	url: function () {
      return "http://dev.scool.com/rest/map_" + this.mapIndexFile + "/layer_" + this.layerIndexFile + "_tiles.json?v=" + App.version;
    },

  	setLayerIndexFilex: function(layerIndexFile) {
  		this.layerIndexFile = layerIndexFile;
  	}

  });

});