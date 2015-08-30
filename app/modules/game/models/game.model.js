// game.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
								/*width: 640,
						    height: 480,*/
						    nbLayers : 3 // TODO update with layer fetch collection listener
							}
		},

		initialize: function () {
			
		}

  });

});