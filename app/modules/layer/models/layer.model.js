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
		            nbTilesByRow : 10, // Tiles number displaying on each layer
		            grid: [],
		            frameColor: "#ccc",
         		 }
  	},

		initialize: function(options) {
			this.set('posX', this.get('width')/2);
			this.set('posY', 0);
			this.set('posZ', - ( options.index * this.get('tileHeight') ) );
		}

  });

});