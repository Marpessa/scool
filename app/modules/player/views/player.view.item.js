// player.view.item.js
define( [	"app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    template: false,
    triggers: {
      'playerItemViewRender': 'player:itemView:render',
      'playerItemViewRenderPlayer': 'player:itemView:addchild'
    },
    ui: {
      playerSpriteSheet: "",
      content: ""
    },

  	initialize: function(options) {
      this.ui.content = new createjs.Container();
    },

    _loadSpriteSheet: function() {
      // Load Player Sprites // TODO Change variables in code to move into model
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
      
      this.ui.playerSpriteSheet = new createjs.SpriteSheet(_data);
    },

    render: function () {
      this._loadSpriteSheet(); // TODO Move to initialize function
      this.renderPlayer();
      this.triggerMethod(this.triggers.playerItemViewRender, this);
    },

    renderPlayer: function() {
      var _sprite = new createjs.Sprite(this.ui.playerSpriteSheet);
      _sprite.gotoAndStop( this.model.get('frameId') );

      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );
      _sprite.alpha = this.model.get( 'alpha' );
      _sprite.visible = this.model.get( 'visible' );

      this.ui.content.addChild(_sprite);

      this.triggerMethod(this.triggers.playerItemViewRenderPlayer, this);
	  }

  });

});