// layer.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    content: "",

    attributes : function() {
    },

  	initialize: function(options) {
      this.content = new createjs.Container();
	  },

	  render: function () {
      this.content.x = this.model.get( 'posX' );
      this.content.y = this.model.get( 'posY' ) + this.model.get( 'posZ' );

      App.stage.addChild(this.content);

      this.triggerMethod('layer:itemView:render', this);
	  },

    getContent: function() {
      return this.content;
    }

  });

});