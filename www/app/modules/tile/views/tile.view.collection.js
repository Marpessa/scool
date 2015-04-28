// tile.view.collection.js
define( [
  "app",
  "modules/tile/views/tile.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

  	//className: 'tiles',
    //tagName: 'div',

    id: "",
  	childView: ItemView,
  	collection: "",
  	//ParentView: "",

  	initialize: function(options) {
	    //this.ParentView = options.ParentView;
	    this.collection = options.Collection;
	  },

  	onRender: function() {
  		/*var renderContent = this.$el;

      for(var i in this.ParentView.children._views) { // Bof Bof
        this.ParentView.children._views[i].$el.append( renderContent.clone() );
      }*/
  	}
  });

});