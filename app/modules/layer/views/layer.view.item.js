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
	  	this.object.graphics.beginFill( this.model.get('frameColor') ).drawRect(this.model.get('posX'), this.model.get('posY'), this.model.get('width'), this.model.get('height'));
      this.object.y = this.model.get( 'posZ' );

      App.stage.addChild(this.object);
	  },

    getObject: function() {
      return this.object;
    }

  });

});