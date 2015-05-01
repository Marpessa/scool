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
     /* var _shape = new createjs.Shape();
      _shape.graphics.beginFill( this.model.get('frameColor') ).drawRect(this.model.get('posX'), this.model.get('posY'), this.model.get('width'), this.model.get('height'));
      this.object.addChild(_shape);*/

      this.content.x = this.model.get( 'posX' );
      this.content.y = this.model.get( 'posY' ) + this.model.get( 'posZ' );

      App.stage.addChild(this.content);
	  },

    getContent: function() {
      return this.content;
    }

  });

});