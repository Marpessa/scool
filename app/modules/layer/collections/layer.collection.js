// layer.collection.js
define( [
	"app",
	"modules/layer/models/layer.model"
], function( App, Model ) {

	'use strict';

  return Backbone.Collection.extend({

  	model: Model,

  	url: function () {
      return "http://dev.scool.com/rest/map_0_0/layers.json?v=" + App.version;
    }
  });

});