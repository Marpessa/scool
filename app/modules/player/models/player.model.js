// player.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
								width: 32,
						    height: 32
							}
		},

		initialize: function () {
			
		}

  });

});