// game.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	triggerMethods: {
      'gameItemViewRender': 'game:itemView:render'
    },
  	id: 'game',
  	tileSpriteSheet: "",
    playerSpriteSheet: "",

  	initialize: function(options) {
	  },

	  render: function () {
	  	this.triggerMethod(this.triggerMethods.gameItemViewRender, this);
	  }

  });

});