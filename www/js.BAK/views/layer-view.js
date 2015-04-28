/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Layer Item
	// ---------------

	app.LayerItemView = Backbone.View.extend({

    className: 'layer',
    tagName: 'div',
    attributes : function() {
        return {
          'style': "top: " + this.model.get( 'positionZ' ) * 33 + "px"
        };
    },
 
    initialize: function () {
      this.template = _.template(
        '<div>Z : <%= positionZ %></div>'
      );
  	},
    
    render: function () {
      var renderedContent = this.template(this.model.toJSON());
      this.$el.html(renderedContent);

      return this;
    }
 
  });

  // Layers List
  // ---------------
  app.LayersView = Backbone.View.extend({

    className: 'layers',
    tagName: 'div',

    initialize : function () {
      this.subViews = [];
      this.collection.each(function(model){
        this.subViews.push(new app.LayerItemView({model:model}));
      },this)
    },

    render : function () {
      console.info( "Render Layers" );

      // Render each child view
      this.$el.empty();
      _(this.subViews).each(function (view) {

        var _currentViewEl = view.render().el;
        this.$el.append(_currentViewEl);
        this.renderTiles(_currentViewEl); // Load Tiles

      }, this);


      return this;
    },

    renderTiles: function(_currentViewEl) {
      var width = 66;
      var height = 33;

      var i, j = 0;
      for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
          var sprite = new createjs.Sprite("/imgs/tiles/tile0.png");
          sprite.x = (j-i) * width;
          sprite.y = (i+j) * height;
          sprite.regX = 65;
          sprite.regY = 32.5;
          //context.stage.addChild(sprite);

          var tile = new app.Tile({positionX: (j-i) * width, positionY: (i+j) * height});
          app.tiles.add( tile );
        }
      }

      var tilesView = new app.TilesView({collection:app.tiles});

      var renderedContent = tilesView.render().el;
      $(_currentViewEl).append( renderedContent );
    }

});

})(jQuery);