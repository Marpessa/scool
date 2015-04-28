// map.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return {
		            width: 640,
		            height: 480,
		            positionZ : 0,
		            nbTiles : 24, // Tiles number displaying on each layer
		            frameColor: "#ccc"
         		 }
  	},

		initialize: function () {
			
		}

  });

});