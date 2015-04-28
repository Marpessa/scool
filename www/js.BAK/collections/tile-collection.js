/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Layer Collection
	// ---------------

	// The collection of tiles is backed by *localStorage* instead of a remote
	// server.
	var Tiles = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Tile
	});

	// Create our global collection of **Tiles**.
	app.tiles = new Tiles();
})();