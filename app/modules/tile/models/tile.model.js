// tile.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
      return {
	              width: 100,
	              height: 58,
	              regX: 100/2,
	              regY: 58/2,
	              positionX : 0,
	              positionY: 0
            }
    },

		initialize: function () {
			
		}

  });

});