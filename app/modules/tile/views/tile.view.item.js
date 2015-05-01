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
      _sprite.x = this.model.get( 'posX' ) + 1200/2;
      _sprite.y = this.model.get( 'posY' );
      _sprite.regX = this.model.get( 'regX' );
      _sprite.regY = this.model.get( 'regY' );


      var _layerObject = this.model.get('layerObject');
      _layerObject.addChild(_sprite);
	  }

  });

});