// tile.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
      return {
                layerIndex: "",
      					layerContent: "",
                gameTileSpriteSheet: "",
                frameId: 0,
                width: 0,
                height: 0,
                indexX: 0,
                indexY: 0,
                posX: 0,
	              posY: 0,
                alpha: 1,
                visible: true,
	              walkable: false
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

      this.frameId = 'frame_' + this.frameId;
		}

  });

});