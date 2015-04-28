// map.view.item.js
define( [
	"app",
	"easeljs"
], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

  	id: 'map',

  	initialize: function(options) {
	  },

	  render: function () {
	  	this.renderMap();
	  },

	  renderMap: function() {
	  }

  });

});