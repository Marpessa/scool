// loader.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
								loadingBarWidth: 300,
						    loadingBarHeight: 20
							}
		},

		initialize: function () {
			
		}

  });

});