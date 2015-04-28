/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Map Model
	// ----------

	app.Map = Backbone.Model.extend({

		defaults : function() {
    	return  {
								width: 640,
						    height: 480,
						    nbLayers : 6
							}
		}
		
	});
})();