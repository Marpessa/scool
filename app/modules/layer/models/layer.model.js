// map.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return {
		            width: 1200,
		            height: 480,
		            posX : 0,
		            posY: 0,
		            posZ : 0,
		            nbTiles : 10, // Tiles number displaying on each layer
		            frameColor: "#ccc"
         		 }
  	},

		initialize: function () {
			
		}

  });

});