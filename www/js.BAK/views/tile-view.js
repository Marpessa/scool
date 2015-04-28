/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Tile View
	// ---------------

	app.TileItemView = Backbone.View.extend({

    tagName: 'div',
    className: 'tile',

    attributes : function() {
        return {
          'style': "left: " + this.model.get( 'positionX' ) + "px; top: " + this.model.get( 'positionY' ) + "px;"
        };
    },
    
  	initialize: function () {
      this.template = _.template(
        '<div>X:<%= positionX %> Y:<%= positionY %></div>'
      );
  	},
    
    render: function () {
      var renderedContent = this.template(this.model.toJSON());
      this.$el.html(renderedContent);

      return this;
    }
 
  });

  // Tiles List
  // ---------------
  app.TilesView = Backbone.View.extend({

    className: 'tiles',
    tagName: 'div',

    initialize : function () {
      this.subViews = [];
      this.collection.each(function(model){
        this.subViews.push(new app.TileItemView({model:model}));
      },this)
    },

    render : function () {
      console.info( "Render Tiles" );

      // Render each child view
      this.$el.empty();
      _(this.subViews).each(function (view) {

        var _currentViewEl = view.render().el;
        this.$el.append(_currentViewEl);

      }, this);

      return this;
    }
  });

})(jQuery);