// tile.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    attributes : function() {
    },

    initialize: function () {
    },

	  render: function () {
      var _spriteSheet = this.model.get('mapTileSpriteSheet');

      var _sprite = new createjs.Sprite(_spriteSheet );
      _sprite.gotoAndStop( this.model.get('frameId') );

      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );
      _sprite.alpha = this.model.get( 'alpha' );
      _sprite.visible = this.model.get( 'visible' );

      var _layerContent = this.model.get('layerContent');
      _layerContent.addChild(_sprite);

      // Event click on one tile
      _sprite.on("click", function(event){ this.click(event, _sprite); }.bind(this) );

      // --- DEV ---
      if( this.model.get( 'visible' ) == true ) {
        var text = new createjs.Text("[" + this.model.get( 'posX' ) + " - " + this.model.get( 'posY' ) + "]", "12px Arial", "#000");
        text.x = this.model.get( 'posX' ) + this.model.get( 'width' )/3;
        text.y = this.model.get( 'posY' ) + this.model.get( 'height' );
        text.textBaseline = "alphabetic";

        _layerContent.addChild(text);
      }
	  },

    click: function (event, _sprite) {
      console.info( "[" + _sprite.x + " - " + _sprite.y + "]" );
    }

  });

});