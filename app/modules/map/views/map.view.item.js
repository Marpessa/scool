// map.view.item.js
define( [
	"app",
	"easeljs"
], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	id: 'map',
    //tagName: 'div',
    //stage: '',

  	initialize: function(options) {
	    /*this.template = _.template(
	      '<div id="map"></div>'
	    );*/
	  },

	  render: function () {
	  	this.renderMap();
	  },

	  renderMap: function() {
	  	/*var renderedContent = this.$el;
			$('body').prepend( this.$el ); // Bof bof... $('body')*/
	  }

  });

});