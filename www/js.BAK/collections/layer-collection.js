/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Layer Collection
	// ---------------

	// The collection of layers is backed by *localStorage* instead of a remote
	// server.
	var Layers = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Layer
	});

	// Create our global collection of **Layers**.
	app.layers = new Layers();
})();