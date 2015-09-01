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
    grid: "",

		initialize: function(options) {

	    this.finder = new PF.AStarFinder({
		    allowDiagonal: true
		  });

		  this.grid = new PF.Grid(100, 100); // TODO init the tiles nb with listener

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

	  onRenderView: function(_tileItemView) {
	  	this.ViewItem.render();
	  },

	  onSetPlayer: function(_tileItemView) {
	  	var _tileItemModel = _tileItemView.model;

			this._setPosition(_tileItemModel);
	  	this._setMatrixFinder(_tileItemModel);
	  },

	  onMove: function(_tileItemView) {
	  	if( _tileItemView.model.get('walkable') ) {
	  		console.info( "Player >> Move : " + "[" + _tileItemView.model.get('posX') + " - " + _tileItemView.model.get('posY') + "]" );

	  		var indexX = this.ViewItem.model.get('indexX');
	  		var indexY = this.ViewItem.model.get('indexY');

	  		var goToIndexX = _tileItemView.model.get('indexX');
	  		var goToIndexY = _tileItemView.model.get('indexY');

	  		var path = this.finder.findPath(indexX, indexY, goToIndexX, goToIndexY, this.grid);
	  		this.grid = this.grid.clone();

	  		console.info( path );
	  	}
	  },

	  _setPosition: function(_tileItemModel) {
	  	if(_tileItemModel.get( 'layerIndex' ) == _tileItemModel.get('baseLayerIndex')
	  		&& _tileItemModel.get( 'indexX' ) == _tileItemModel.get('posPlayerTileIndexY')
	  		&& _tileItemModel.get( 'indexY' ) == _tileItemModel.get('posPlayerTileIndexY')) {

	  		this.ViewItem.model.set('indexX', _tileItemModel.get( 'indexX' ));
	  		this.ViewItem.model.set('indexY', _tileItemModel.get( 'indexY' ));
	  		this.ViewItem.model.set('posX', _tileItemModel.get( 'posX' ) + this.ViewItem.model.get('decX'));
	  		this.ViewItem.model.set('posY', _tileItemModel.get( 'posY' ) - this.ViewItem.model.get('decY'));
	  	}
	  },

	  _setMatrixFinder: function(_tileItemModel) {
	  	var isWalkable = 0;
	  	if(_tileItemModel.get( 'walkable' )) {
	  		isWalkable = 1;
	  	}

	  	this.grid.setWalkableAt(_tileItemModel.get( 'indexX' ), _tileItemModel.get( 'indexY' ), isWalkable);
	  }

  });

});