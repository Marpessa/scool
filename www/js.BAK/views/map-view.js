/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Map
	// ---------------

	app.MapView = Backbone.View.extend({
    
    id: 'map',
    tagName: 'div',

  	initialize: function () {
      /*this.template = _.template(
        '<div id="map"></div>'
      );*/
      
      this.stage = new createjs.Stage( "cMap" );

      var bob = new app.Layer({positionZ: 2});
      var jane = new app.Layer({positionZ: 1});
      var tess = new app.Layer({positionZ: 0});

      app.layers.add(bob);
      app.layers.add(jane);
      app.layers.add(tess);

      

      return this;
  	},
  
    render: function () {

      /*var data = {
          images: ["http://dev.scool.com/imgs/tiles/tile0.png"],
          frames: {x: 0, y:0, width:50, height:50}
      };
      var spriteSheet = new createjs.SpriteSheet(data);*/

      var spriteSheet = new createjs.Bitmap("http://dev.scool.com/imgs/tiles/tile0.png");
      spriteSheet.x = 50;
          spriteSheet.y = 50;
          spriteSheet.regX = 65;
          spriteSheet.regY = 32.5;
      /*
      var sprite = new createjs.Sprite("http://dev.scool.com/imgs/tiles/tile0.png");
          sprite.x = 50;
          sprite.y = 50;
          sprite.regX = 65;
          sprite.regY = 32.5;*/

      this.stage.addChild(spriteSheet);

      this.stage.update();

      // Load Layers
      //this.renderLayers();

      return this;
    },

    renderLayers: function() {
      console.info( "Render Layers" );

      var layersView = new app.LayersView({collection:app.layers});

      var renderedContent = layersView.render().el;
      this.$el.append( renderedContent );
    }
 
 });
})(jQuery);