// map.view.item.js
define( [
	"app",
	"easeljs"
], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	id: 'map',
  	spriteSheet: "",

  	initialize: function(options) {

	  },

	  render: function () {
	  	this.renderMap();
	  },

	  renderMap: function() {

	  	// Load Sprites
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
      
      this.spriteSheet = new createjs.SpriteSheet(_data);
	  }

  });

});