// layer.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return {
    						index: 0,
		            width: 1200,
		            height: 480,
		            tileWidth: 100,
		            tileHeight: 58,
		            posX : 0,
		            posY: 0,
		            posZ : 0,
		            nbTiles : 10, // Tiles number displaying on each layer
		            grid: [],
		            frameColor: "#ccc",
         		 }
  	},

		initialize: function(options) {
			this.attributes.posX = this.attributes.width/2;
			this.attributes.posY = 0;
			this.attributes.posZ = options.index * this.attributes.tileHeight;
		}

  });

});