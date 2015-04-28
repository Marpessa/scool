/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Layer Model
	// ----------

	app.Layer = Backbone.Model.extend({

		defaults : function() {
    	return {
		            width: 640,
		            height: 480,
		            positionZ : 0,
		            nbTiles : 24 // Tiles number displaying on each layer
         		 }
  	}
  	
	});
})();