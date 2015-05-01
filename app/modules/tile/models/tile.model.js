// tile.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
      return {
      					layerObject: "",
	              width: 100,
	              height: 58,
	              regX: 100/2,
	              regY: 58/2,
	              posX : 0,
	              posY: 0
            }
    },

		initialize: function () {
			
		}

  });

});