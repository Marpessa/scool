// game.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	id: 'game',
  	tileSpriteSheet: "",
    playerSpriteSheet: "",

  	initialize: function(options) {

	  },

	  render: function () {
	  	this.renderGame();
	  },

	  renderGame: function() {
	  }

  });

});