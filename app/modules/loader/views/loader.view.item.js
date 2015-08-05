// loader.view.item.js
define( [ "app" ], function( App ) {

  'use strict';

  return Backbone.Marionette.ItemView.extend({

    triggerMethods: {
      'loaderItemViewRender': 'loader:itemView:render',
      'loaderItemViewReset': 'loader:itemView:reset'
    },
    content: "",

    attributes : function() {
    },

    initialize: function () {
      var loadProgressLabel = new createjs.Text("Chargement...","18px Verdana","black");
      loadProgressLabel.lineWidth = 200;
      loadProgressLabel.textAlign = "center";
      loadProgressLabel.x = 1200/2;
      loadProgressLabel.y = 50;

      this.content = new createjs.Container();
      this.content.addChild(loadProgressLabel);
    },

    render: function () {
      this.triggerMethod(this.triggerMethods.loaderItemViewRender, this);
    },

    reset: function() {
      this.triggerMethod(this.triggerMethods.loaderItemViewReset, this);
    }

  });

});