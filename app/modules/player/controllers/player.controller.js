// player.controller.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.Object.extend({

  	ViewItem: "",
    mapPlayerSpriteSheet: "",

		initialize: function(options) {
	    this.options = options;

	    var ModelItem = new this.options.Model();
	    this.ViewItem = new this.options.ItemView({ model: ModelItem });

      var MapModule = this.options.Modules.MapModule;
      var TileModule = this.options.Modules.TileModule;

	    this.listenTo(MapModule.ControllerItem, 'onRenderView', this.onLoadSpriteSheet); // Always call before Tile listener
	    this.listenTo(TileModule.ControllerItem, 'onRenderView', this.onRenderView);
	  },

	  onLoadSpriteSheet: function(_mapController) {
	  	this.ViewItem.model.set('mapPlayerSpriteSheet', _mapController.ViewItem.playerSpriteSheet);
      //this.mapPlayerSpriteSheet = _mapController.ViewItem.playerSpriteSheet;
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