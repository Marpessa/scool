// tile.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

    frameId: 0,

  	defaults : function() {
      return {
                layerIndex: 0,
                frameId: 0,
                width: 0,
                height: 0,
                indexX: 0,
                indexY: 0,
                posX: 0,
	              posY: 0,
                alpha: 1,
                visible: true,
	              walkable: false,
                baseLayerIndex: 0, // Current layer
                posPlayerTileIndexX: 2, // Default player X position on layer
                posPlayerTileIndexY: 2, // Default player Y position on layer
            }
    },

		initialize: function(options) {
			if( options.walkable === false )
      {
        this.set('walkable', false);
      }

      if( options.visible === false )
      {
        this.set('visible', false);
      }
      this.frameId = 'frame_' + options.frameId;
		}

  });

});