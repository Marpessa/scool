// layer.collection.js
define( [
	"app",
	"modules/layer/models/layer.model"
], function( App, Model ) {

	'use strict';

  return Backbone.Collection.extend({

  	model: Model,
  	mapIndexFile: "0_0",  // TODO ID Map to change

  	url: function () {
      return "http://dev.scool.com/rest/map_" + this.mapIndexFile + "/layers.json?v=" + App.version;
    }
  });

});