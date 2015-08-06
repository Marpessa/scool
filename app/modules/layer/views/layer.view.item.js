// layer.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    template: false,
    triggers: {
      'layerItemViewRender': 'layer:itemView:render'
    },
    ui: {
    },
    content: "",

  	initialize: function(options) {
      this.content = new createjs.Container();
	  },

	  render: function () {
      this.content.x = this.model.get( 'posX' );
      this.content.y = this.model.get( 'posY' ) + this.model.get( 'posZ' );

      this.triggerMethod(this.triggers.layerItemViewRender, this);
	  },

    getContent: function() {
      return this.content;
    }

  });

});