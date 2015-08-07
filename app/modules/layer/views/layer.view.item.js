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

  	initialize: function(options) {
	  },

	  render: function () {
      this.triggerMethod(this.triggers.layerItemViewRender, this);
	  }

  });

});