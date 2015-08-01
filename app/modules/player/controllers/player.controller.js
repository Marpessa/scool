// player.controller.js
define( [ 
	'app',
  'pathfinding'
 ], function( App, PF ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewItem: "",
    gamePlayerSpriteSheet: "",
    finder: "",

		initialize: function(options) {
	    this.options = options;

	    this.finder = new PF.AStarFinder({
		    allowDiagonal: true
		  });

	    var ModelItem = new this.options.Model();
	    this.ViewItem = new this.options.ItemView({ model: ModelItem });

      var GameModule = this.options.Modules.GameModule;
      var TileModule = this.options.Modules.TileModule;

	    this.listenTo(GameModule.ControllerItem, 'onRenderView', this.onLoadSpriteSheet); // Always call before Tile listener
	    this.listenTo(TileModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onLoadSpriteSheet: function(_gameController) {
	  	this.ViewItem.model.set('gamePlayerSpriteSheet', _gameController.ViewItem.playerSpriteSheet);
      //this.gamePlayerSpriteSheet = _gameController.ViewItem.playerSpriteSheet;
    },

	  onRenderView: function(_tileController, _collection, _layerChild)
	  {
	  	var baseLayerIndex = 0;
	  	var baseTileIndex = 15;
	  	if(_layerChild._index == baseLayerIndex) {

	  		this.ViewItem.model.set('posX', _collection.models[baseTileIndex].get( 'posX' ) + 25);
	  		this.ViewItem.model.set('posY', _collection.models[baseTileIndex].get( 'posY' ) - 40);
		  	this.ViewItem.model.set('layerContent', _layerChild.getContent());
		  	this.ViewItem.render();

	  		// this.triggerMethod('onRenderView', this); // Not use for this moment
	  	}
	  }

  });

});