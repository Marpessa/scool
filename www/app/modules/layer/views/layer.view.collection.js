// layer.view.collection.js
define( [
  "app",
  "modules/layer/views/layer.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

  	//className: 'layers',
    //tagName: 'div',

  	childView: ItemView,
  	collection: "",
  	//ParentView: "",

  	initialize: function(options) {
	    //this.ParentView = options.ParentView;
	    this.collection = options.Collection;
	  },

  	onRender: function() {
      //this.addChild(this.loadingBar, this.frame);
  		/*var renderContent = this.$el;
	  	this.ParentView.$el.append( renderContent );*/
  	}
  });

});