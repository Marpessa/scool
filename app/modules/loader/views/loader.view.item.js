// loader.view.item.js
define( [ "app" ], function( App ) {

  'use strict';

  return Backbone.Marionette.ItemView.extend({

    content: "",

    attributes : function() {
    },

    initialize: function () {
      this.loadProgressLabel = new createjs.Text("Chargement...","18px Verdana","black");
      this.loadProgressLabel.lineWidth = 200;
      this.loadProgressLabel.textAlign = "center";
      this.loadProgressLabel.x = 1200/2;
      this.loadProgressLabel.y = 50;

      //this.content = new createjs.Container();
    },

    render: function () {
      App.stage.addChild(this.loadProgressLabel);
    },

    reset: function() {
      App.stage.removeChild(this.loadProgressLabel);
    }

  });

});