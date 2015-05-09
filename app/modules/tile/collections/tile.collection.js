// tile.collection.js
define( [
	"app",
	"modules/tile/models/tile.model"
], function( App, Model ) {

	'use strict';

  return Backbone.Collection.extend({

  	model: Model,

  	url: function () {
      return "http://dev.scool.com/rest/map_0_0/layer_0_tiles.json";
    }

  });

});