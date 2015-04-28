// tile.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    attributes : function() {
    },

  	initialize: function () {
    },

	  render: function () {
	  	sprite = App.queue.getResult("tile");

      var sprite = new createjs.Bitmap(sprite);
      sprite.x = this.model.get( 'positionX' ) + 1200/2;
      sprite.y = this.model.get( 'positionY' );
      sprite.regX = this.model.get( 'regX' );
      sprite.regY = this.model.get( 'regY' );
      App.stage.addChild(sprite);
	  }

  });

});