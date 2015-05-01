// tile.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    attributes : function() {
    },

  	initialize: function () {
    },

	  render: function () {
	  	var _sprite = App.queue.getResult("tile");

      _sprite = new createjs.Bitmap(_sprite);
      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );

      var _layerContent = this.model.get('layerContent');
      _layerContent.addChild(_sprite);
	  }

  });

});