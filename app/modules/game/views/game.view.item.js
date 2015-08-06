// game.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    template: false,
  	triggers: {
      'gameItemViewRender': 'game:itemView:render'
    },
  	id: 'game',

  	initialize: function(options) {
	  },

	  render: function () {
	  	this.triggerMethod(this.triggers.gameItemViewRender, this);
	  }

  });

});