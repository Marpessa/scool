// player.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
    		        layerContent: "",
    		        mapPlayerSpriteSheet: "",
    		        baseLayerIndex: 0,
    		        baseTileIndexX: 2,
    		        baseTileIndexY: 2,
    		        frameId: 0,
								width: 100,
						    height: 50,
						    posX: 0,
	              posY: 0,
	              decX: 5,
	              decY: 38,
                alpha: 1,
                visible: true
							}
		},

		initialize: function () {
			
		}

  });

});