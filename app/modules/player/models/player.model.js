// player.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
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
                visible: true,
                spriteSheetData: {frames: [], animations: {}}
							}
		},

		initialize: function () {
      // x, y, width, height, imageIndex*, regX*, regY*
			var frames = [
        [0, 0, 60, 100],
        [60, 0, 60, 100],
      ];
	    var animations = {
        "frame_0": 0,
        "frame_1": 1
      };

			this.attributes.spriteSheetData.frames = frames;
			this.attributes.spriteSheetData.animations = animations;
		}

  });

});