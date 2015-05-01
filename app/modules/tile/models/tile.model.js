// tile.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
      return {
      					layerContent: "",
	              posX : 0,
	              posY: 0,
	              walkable: false
            }
    },

		initialize: function(options) {
			if( options.walkable === false )
      {
        this.attributes.walkable = false;
      }
		}

  });

});