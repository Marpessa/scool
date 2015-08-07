// loader.view.item.js
define( [ "app" ], function( App ) {

  'use strict';

  return Backbone.Marionette.ItemView.extend({

    template: false,
    triggers: {
      'loaderItemViewRender': 'loader:itemView:render',
      'loaderItemViewReset': 'loader:itemView:reset'
    },
    ui: {
      loadProgressLabel: "",
      progressBar: "",
    },
    content: "",

    initialize: function () {
      this.ui.loadProgressLabel = new createjs.Text("Chargement... 0%","18px Verdana","#000000");
      this.ui.loadProgressLabel.textAlign = "center";
      this.ui.loadProgressLabel.x = this.model.get('loadProgressLabelPosX');
      this.ui.loadProgressLabel.y = this.model.get('loadProgressLabelPosY');

      var progressBarContainer = new createjs.Shape();
      progressBarContainer.graphics.beginFill("#000000");
      progressBarContainer.graphics.drawRect(this.model.get('progressBarContainerPosX'),
                                             this.model.get('progressBarContainerPosY'),
                                             this.model.get('progressBarContainerWidth'),
                                             this.model.get('progressBarContainerHeight'));

      this.ui.progressBar = new createjs.Shape();
      this.ui.progressBar.graphics.beginFill("#cccccc");
      this.ui.progressBar.graphics.drawRect(this.model.get('progressBarPosX'),
                                            this.model.get('progressBarPosY'),
                                            this.model.get('progressBarWidth'),
                                            this.model.get('progressBarHeight'));

      this.content = new createjs.Container();
      this.content.addChild(this.ui.loadProgressLabel);
      this.content.addChild(progressBarContainer);
      this.content.addChild(this.ui.progressBar);
    },

    render: function (App) {
      this.ui.loadProgressLabel.text = "Chargement... " + Math.ceil(App.queue.progress*100) + "%";

      var progressPoint = App.queue.progress * this.model.get('progressBarMaxWidth');

      this.ui.progressBar.graphics.drawRect(this.model.get('progressBarPosX'),
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