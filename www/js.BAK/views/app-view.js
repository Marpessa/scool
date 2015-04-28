/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({
		el: "body",

		initialize: function () {
 			this.map = new app.MapView();

 			return this;
		},
  
		render: function () {
			console.info( "Render Map" );

			var renderedContent = this.map.render().el;
			this.$el.prepend( renderedContent );

			return this;
		}
 
 });
})(jQuery);