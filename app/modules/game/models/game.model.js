// game.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
								width: 640,
						    height: 480,
						    nbLayers : 6
							}
		},

		initialize: function () {
			
		}

  });

});