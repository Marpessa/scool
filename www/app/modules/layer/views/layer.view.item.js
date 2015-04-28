// layer.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	//className: 'layer',
    //tagName: 'div',
    object: "",

    attributes : function() {
        /*return {
          'style': "top: " + this.model.get( 'positionZ' ) * 33 + "px"
        };*/
    },

  	initialize: function(options) {
	    /*this.template = _.template(
        '<div>Z : <%= positionZ %></div>'
      );*/
      this.object = new createjs.Shape();
	  },

	  render: function () {
	  	this.object.graphics.beginFill( this.model.attributes.frameColor ).drawRect(0, 0, 500, 500);
      this.object.y = this.model.get( 'positionZ' ) * 33;

      App.stage.addChild(this.object);
	  }

  });

});