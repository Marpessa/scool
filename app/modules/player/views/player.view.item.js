// player.view.item.js
define( [	"app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    template: false,
    triggers: {
      'playerItemViewRender': 'player:itemView:render'
    },
    ui: {
      playerSpriteSheet: "",
      content: ""
    },

  	initialize: function(options) {
      this.ui.content = new createjs.Container();
    },

    loadSpriteSheet: function(App) {
      var _data = {
        images: [App.queue.getResult( "player" )],
        frames: this.model.get('spriteSheetData').frames,
        animations: this.model.get('spriteSheetData').animations
      };
      
      this.ui.playerSpriteSheet = new createjs.SpriteSheet(_data);
    },

    render: function () {
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
	  }

  });

});