// player.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
    		        layerContent: "",
    		        mapPlayerSpriteSheet: "",
    		        frameId: 0,
								width: 100,
						    height: 50,
						    posX: 0,
	              posY: 0,
                alpha: 1,
                visible: true
							}
		},

		initialize: function () {
			
		}

  });

});