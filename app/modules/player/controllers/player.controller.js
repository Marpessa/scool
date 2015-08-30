// player.controller.js
define( [ 
	'app',
  'pathfinding'
 ], function( App, PF ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	appEvents: {
	    "app:handleComplete": "onLoadSpriteSheetView"
	  },
    collectionEvents: {
	    "tile:collectionView:click": "onMove",
	    "tile:collectionView:render": "onRenderView"
	  },
  	ViewItem: "",
    finder: "",

		initialize: function(options) {

	    this.finder = new PF.AStarFinder({
		    allowDiagonal: true
		  });

	    var ModelItem = new options.Model();
	    this.ViewItem = new options.ItemView({ model: ModelItem });

      var GameModule = options.Modules.GameModule;
      var TileModule = options.Modules.TileModule;

	  	// Listeners
	  	Backbone.Marionette.bindEntityEvents(this, App, this.appEvents);
	  	Backbone.Marionette.bindEntityEvents(this, TileModule.ControllerItem.ViewCollection, this.collectionEvents);
	  },

	  onLoadSpriteSheetView: function(App) {
	  	this.ViewItem.loadSpriteSheet(App);
	  },

	  onRenderView: function(_tileItemView) {
	  	var _tileItemModel = _tileItemView.model;
	  	if(_tileItemModel.get( 'layerIndex' ) == this.ViewItem.model.get('baseLayerIndex')
	  		&& _tileItemModel.get( 'indexX' ) == this.ViewItem.model.get('baseTileIndexX')
	  		&&  _tileItemModel.get( 'indexY' ) == this.ViewItem.model.get('baseTileIndexY')) {

	  		this.ViewItem.model.set('posX', _tileItemModel.get( 'posX' ) + this.ViewItem.model.get('decX'));
	  		this.ViewItem.model.set('posY', _tileItemModel.get( 'posY' ) - this.ViewItem.model.get('decY'));
		  	this.ViewItem.render();
	  	}
	  },

	  onMove: function() {
	  	console.info( "Player >> Move" );
	  }

  });

});