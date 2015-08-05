// loader.view.item.js
define( [ "app" ], function( App ) {

  'use strict';

  return Backbone.Marionette.ItemView.extend({

    triggers: {
      'loaderItemViewRender': 'loader:itemView:render',
      'loaderItemViewReset': 'loader:itemView:reset'
    },
    content: "",
    loadProgressLabel: "",
    progressBar: "",

    attributes : function() {
    },

    initialize: function () {
      this.loadProgressLabel = new createjs.Text("Chargement... 0%","18px Verdana","#000000");
      this.loadProgressLabel.textAlign = "center";
      this.loadProgressLabel.x = this.model.get('loadProgressLabelPosX');
      this.loadProgressLabel.y = this.model.get('loadProgressLabelPosY');

      var progressBarContainer = new createjs.Graphics();
      progressBarContainer.beginFill("#000000");
      progressBarContainer.drawRect(this.model.get('progressBarContainerPosX'),
                                    this.model.get('progressBarContainerPosY'),
                                    this.model.get('progressBarContainerWidth'),
                                    this.model.get('progressBarContainerHeight'));

      this.progressBar = new createjs.Graphics();
      this.progressBar.beginFill("#cccccc");
      this.progressBar.drawRect(this.model.get('progressBarPosX'),
                                this.model.get('progressBarPosY'),
                                this.model.get('progressBarWidth'),
                                this.model.get('progressBarHeight'));
      
      var progressBarContainerShape = new createjs.Shape(progressBarContainer);
      var progressBarShape = new createjs.Shape(this.progressBar);

      this.content = new createjs.Container();
      this.content.addChild(this.loadProgressLabel);
      this.content.addChild(progressBarContainerShape);
      this.content.addChild(progressBarShape);
    },

    render: function (App) {
      this.loadProgressLabel.text = "Chargement... " + Math.ceil(App.queue.progress*100) + "%";

      var progressPoint = App.queue.progress * this.model.get('progressBarMaxWidth');

      this.progressBar.drawRect(this.model.get('progressBarPosX'),
                                this.model.get('progressBarPosY'),
                                progressPoint, 
                                this.model.get('progressBarHeight'));

      this.triggerMethod(this.triggers.loaderItemViewRender, this);
    },

    reset: function(App) {
      this.triggerMethod(this.triggers.loaderItemViewReset, this);
    }

  });

});