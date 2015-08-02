// player.controller.js
define( [ 
	'app',
  'pathfinding'
 ], function( App, PF ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewItem: "",
    finder: "",

    collectionEvents: {
	    "tile:collectionView:click": "onMove"
	  },

		initialize: function(options) {
	    this.options = options;

	    this.finder = new PF.AStarFinder({
		    allowDiagonal: true
		  });

	    var ModelItem = new this.options.Model();
	    this.ViewItem = new this.options.ItemView({ model: ModelItem });

      var GameModule = this.options.Modules.GameModule;
      var TileModule = this.options.Modules.TileModule;

	    this.listenTo(TileModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onRenderView: function(_tileController, _collection, _layerChild) {
	  	var baseLayerIndex = 0;
	  	var baseTileIndex = 15;
	  	if(_layerChild._index == baseLayerIndex) {

	  		this.ViewItem.model.set('posX', _collection.models[baseTileIndex].get( 'posX' ) + 25);
	  		this.ViewItem.model.set('posY', _collection.models[baseTileIndex].get( 'posY' ) - 40);
		  	this.ViewItem.model.set('layerContent', _layerChild.getContent());
		  	this.ViewItem.render();

	  		this.triggerMethod('onRenderView');

	  		// Listener
	  		Backbone.Marionette.bindEntityEvents(this, this.options.Modules.TileModule.ControllerItem.ViewCollection, this.collectionEvents);
	  	}
	  },

	  onMove: function() {
	  	console.info( "move" );
	  }

  });

});