// player.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
    		        layerContent: "",
    		        mapPlayerSpriteSheet: "",
    		        baseLayerIndex: 2,
    		        baseTileIndexX: 6,
    		        baseTileIndexY: 8,
    		        frameId: 0,
								width: 100,
						    height: 50,
						    posX: 0,
	              posY: 0,
	              decX: 25,
	              decY: 40,
                alpha: 1,
                visible: true
							}
		},

		initialize: function () {
			
		}

  });

});