// tile.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
      return {
      					layerContent: "",
                imgId: "",
                x: 0,
                y: 0,
                posX: 0,
	              posY: 0,
                alpha: 1,
                visible: true,
	              walkable: false
            }
    },

		initialize: function(options) {
			if( options.walkable === false )
      {
        this.set('walkable', false);
      }
		}

  });

});