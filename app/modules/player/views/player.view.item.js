// player.view.item.js
define( [	"app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	playerSpriteSheet: "",

  	attributes : function() {
    },

  	initialize: function(options) {
	  },

	  _loadSpriteSheet: function() {
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
	  },

	  render: function () {
	  	this._loadSpriteSheet();
	  	this.renderPlayer();
      this.triggerMethod('player:itemView:render', this);
    },

    renderPlayer: function() {
      var _sprite = new createjs.Sprite(this.playerSpriteSheet);
      _sprite.gotoAndStop( this.model.get('frameId') );

      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );
      _sprite.alpha = this.model.get( 'alpha' );
      _sprite.visible = this.model.get( 'visible' );

      var _layerContent = this.model.get('layerContent');
      _layerContent.addChild(_sprite);
	  }

  });

});