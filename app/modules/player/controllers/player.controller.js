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
	    "tile:collectionView:click": "onMove",
	    "tile:collectionView:render": "onRenderView"
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

	  	// Listeners
	  	Backbone.Marionette.bindEntityEvents(this, TileModule.ControllerItem.ViewCollection, this.collectionEvents);
	  },

	  onRenderView: function(_tileItemView) {
	  	var _tileItemModel = _tileItemView.model;
	  	if(_tileItemModel.get( 'layerIndex' ) == this.ViewItem.model.get('baseLayerIndex')
	  		&& _tileItemModel.get( 'indexX' ) == this.ViewItem.model.get('baseTileIndexX')
	  		&&  _tileItemModel.get( 'indexY' ) == this.ViewItem.model.get('baseTileIndexY')) {
	  		this.ViewItem.model.set('posX', _tileItemModel.get( 'posX' ) + this.ViewItem.model.get('decX'));
	  		this.ViewItem.model.set('posY', _tileItemModel.get( 'posY' ) - this.ViewItem.model.get('decY'));
		  	this.ViewItem.model.set('layerContent',_tileItemModel.get('layerContent'));
		  	this.ViewItem.render();
	  	}
	  },

	  onMove: function() {
	  	console.info( "move" );
	  }

  });

});