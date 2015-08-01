// game.view.item.js
define( [
	"app",
	"easeljs"
], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	id: 'game',
  	tileSpriteSheet: "",
    playerSpriteSheet: "",

  	initialize: function(options) {

	  },

	  render: function () {
	  	this.renderGame();
	  },

	  renderGame: function() {

	  	// Load Tiles Sprites
	  	var _data = {
        images: [App.queue.getResult( "map_0_0" )],
        frames: [
          // x, y, width, height, imageIndex*, regX*, regY*
          [100, 0, 100, 100],
          [200, 0, 100, 100],
          [300, 0, 100, 100],
          [0, 100, 100, 100],
          [100, 100, 100, 100],
          [200, 100, 100, 100],
          [300, 100, 100, 100],
          [0, 200, 100, 100],
          [100, 200, 100, 100]
        ],
        animations: {
          "frame_0": 0,
          "frame_1": 1,
          "frame_2": 2,
          "frame_3": 3,
          "frame_4": 4,
          "frame_5": 5,
          "frame_6": 6,
          "frame_7": 7,
          "frame_8": 8
        }
      };
      
      this.tileSpriteSheet = new createjs.SpriteSheet(_data);

      // Load Player Sprites
      var _data = {
        images: [App.queue.getResult( "player" )],
        frames: [
          // x, y, width, height, imageIndex*, regX*, regY*
          [0, 0, 60, 100],
          [60, 0, 60, 100],
        ],
        animations: {
          "frame_0": 0,
          "frame_1": 1
        }
      };
      
      this.playerSpriteSheet = new createjs.SpriteSheet(_data);
	  }

  });

});