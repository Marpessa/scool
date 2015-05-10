// tile.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    attributes : function() {
    },

  	initialize: function () {
    },

	  render: function () {
	  	var _sprite = App.queue.getResult( this.model.get( 'imgId' ) );

      console.log( this.model.get( 'imgId' ) );

      _sprite = new createjs.Bitmap(_sprite);
      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );
      _sprite.alpha = this.model.get( 'alpha' );

      var _layerContent = this.model.get('layerContent');
      _layerContent.addChild(_sprite);
	  }

  });

});