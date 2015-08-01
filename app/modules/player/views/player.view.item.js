// player.view.item.js
define( [
	"app",
	"easeljs"
], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	initialize: function(options) {

	  },

	  render: function () {
	  	this.renderPlayer();
	  },

	  renderPlayer: function() {
	  	var _spriteSheet = this.model.get('gamePlayerSpriteSheet');

	  	var _sprite = new createjs.Sprite(_spriteSheet );
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