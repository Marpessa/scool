// player.controller.js
define( [ 
	'app',
  'pathfinding'
 ], function( App, PF ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	appEvents: {
	    'app:handleComplete': 'onLoadSpriteSheetView'
	  },
	  tileCollectionEvents: {
	  	'tile:collectionView:render': 'onRenderView'
	  },
    tileCollectionItemEvents: {
	    'tile:collection:itemView:render': 'onSetPlayer',
	    'tile:collection:itemView:click': 'onMove'
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
	  	Backbone.Marionette.bindEntityEvents(this, TileModule.ControllerItem.ViewCollection, this.tileCollectionItemEvents);
	  	Backbone.Marionette.bindEntityEvents(this, TileModule.ControllerItem.ViewCollection, this.tileCollectionEvents);
	  },

	  onLoadSpriteSheetView: function(App) {
	  	this.ViewItem.loadSpriteSheet(App);
	  },

	  onSetPlayer: function(_tileItemView) {
			var _tileItemModel = _tileItemView.model;
	  	if(_tileItemModel.get( 'layerIndex' ) == _tileItemModel.get('baseLayerIndex')
	  		&& _tileItemModel.get( 'indexX' ) == _tileItemModel.get('posPlayerTileIndexY')
	  		&&  _tileItemModel.get( 'indexY' ) == _tileItemModel.get('posPlayerTileIndexY')) {

	  		this.ViewItem.model.set('posX', _tileItemModel.get( 'posX' ) + this.ViewItem.model.get('decX'));
	  		this.ViewItem.model.set('posY', _tileItemModel.get( 'posY' ) - this.ViewItem.model.get('decY'));
	  	}
	  },

	  onRenderView: function(_tileItemView) {
	  	this.ViewItem.render();
	  },

	  onMove: function(_tileItemView) {
	  	if( _tileItemView.model.get('walkable') ) {
	  		console.info( "Player >> Move : " + "[" + _tileItemView.model.get('posX') + " - " + _tileItemView.model.get('posY') + "]" );
	  	}
	  },


  });

});