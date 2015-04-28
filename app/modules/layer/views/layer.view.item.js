// layer.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    object: "",

    attributes : function() {
    },

  	initialize: function(options) {
      this.object = new createjs.Shape();
	  },

	  render: function () {
	  	this.object.graphics.beginFill( this.model.attributes.frameColor ).drawRect(0, 0, 500, 500);
      this.object.y = this.model.get( 'positionZ' ) * 33;

      App.stage.addChild(this.object);
	  },

    getObject: function() {
      return this.object;
    }

  });

});